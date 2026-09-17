/// Per-route ceilings on top of the global 120/min bucket in AppModule.
/// Keep the global limit; these only tighten the write paths that are cheap
/// to flood and expensive for everyone else when the shared bucket fills.

export const ANSWER_THROTTLE = { default: { ttl: 60_000, limit: 30 } } as const;
export const CREATE_ROOM_THROTTLE = { default: { ttl: 60_000, limit: 10 } } as const;
export const CREATE_PATH_THROTTLE = { default: { ttl: 60_000, limit: 10 } } as const;
export const REQUEST_TEACHER_THROTTLE = { default: { ttl: 3_600_000, limit: 3 } } as const;
