import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { assertSchemaReady, readSchemaHealth } from './schema-guard';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Connected to Postgres');
    await this.assertSchemaReadyOrThrow();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  /// Stops a silent half-deploy from taking authenticated traffic. `/health`
  /// only runs `SELECT 1`, so it stayed 200 while every JWT-backed route 500'd.
  private async assertSchemaReadyOrThrow(): Promise<void> {
    const health = await readSchemaHealth(this);

    assertSchemaReady(health);
    this.logger.log('Prisma migrations are finished; required schema is present');
  }
}
