# SOC 2, PCI DSS, and GDPR in Depth
### Module 4 — Room 3: Three Different Proofs for Three Different Audiences

---

## Table of Contents
1. [Before You Start: A Simple Analogy](#before-you-start-a-simple-analogy)
2. [Introduction](#introduction)
3. [SOC 2 in Depth](#soc-2-in-depth)
4. [PCI DSS in Depth](#pci-dss-in-depth)
5. [GDPR in Depth](#gdpr-in-depth)
6. [Comparison Table](#comparison-table)
7. [Worked Example: Solvex Analytics Faces All Three](#worked-example-solvex-analytics-faces-all-three)
8. [Common Mistakes](#common-mistakes)
9. [Case Study: Compliant with One, Blind to the Others](#case-study-compliant-with-one-blind-to-the-others)
10. [Key Terminology](#key-terminology)
11. [Summary](#summary)
12. [Self-Check: Can You Explain It?](#self-check-can-you-explain-it)
13. [Review Questions](#review-questions)

---

## Before You Start: A Simple Analogy

Imagine you need to prove three completely different things about your car: that it's *safe to drive* (an inspection sticker), that it's *legally insured* (an insurance card), and that you're *licensed to drive it* (your driver's license). Each document is issued by a different authority, checks a different thing, uses different criteria, and gets requested by different people in different situations — a police officer wants to see your license, a body shop wants to see your insurance card, and a mechanic checks your inspection sticker.

**SOC 2, PCI DSS, and GDPR work the same way.** Each proves something different, to a different audience, verified through a different process. A company can be excellent at one and have never even considered another — just like a perfectly licensed, perfectly insured driver could still be driving a car that would fail an inspection. This room goes deep into each one individually, building on the overview from Module 1, Room 3.

---

## Introduction

You met all three of these in Module 1 at an overview level. This room goes significantly deeper into each one's actual mechanics — what specifically gets checked, who checks it, and what the resulting proof actually means to the person receiving it.

---

## SOC 2 in Depth

### The Five Trust Services Criteria
SOC 2 reports are built around five possible criteria; **Security** is mandatory in every SOC 2 report, and an organization chooses which of the remaining four are relevant to include.

| Criterion | What It Covers |
|---|---|
| **Security** (always included) | Protection against unauthorized access, both physical and logical |
| **Availability** | Whether systems are available for operation and use as agreed |
| **Processing Integrity** | Whether system processing is complete, accurate, timely, and authorized |
| **Confidentiality** | Whether information designated as confidential is protected as agreed |
| **Privacy** | Whether personal information is collected, used, retained, and disclosed appropriately |

### Type I vs. Type II
- A **Type I report** assesses whether controls are suitably *designed* at a single point in time — a snapshot.
- A **Type II report** assesses whether those controls actually *operated effectively* over a period, typically 6–12 months — evidence, not just design.

> **In plain terms:** A Type I report says "this control looks well-designed as of today." A Type II report says "we watched this control actually work, consistently, for months." Enterprise buyers almost always specifically ask for Type II, because design on paper and real-world operation are two very different things — precisely the gap illustrated by Module 3's case study about a policy that couldn't be consistently followed.

### The Audit Process
Unlike ISO 27001, SOC 2 isn't a pass/fail certificate — it's an **auditor's opinion**, issued by a licensed CPA firm, describing whether controls met the criteria. The resulting document is a detailed **report**, not a certificate you display, and it's typically shared under NDA directly with customers or prospects who request it, rather than published publicly.

---

## PCI DSS in Depth

### The 12 Requirements
PCI DSS organizes its requirements into six control objectives, comprising 12 top-level requirements:

| Objective | Example Requirement |
|---|---|
| **Build and Maintain a Secure Network** | Install and maintain network security controls |
| **Protect Account Data** | Protect stored account data; encrypt transmission of account data across open networks |
| **Maintain a Vulnerability Management Program** | Protect systems from malware; develop secure systems and software |
| **Implement Strong Access Control Measures** | Restrict access by business need to know; identify and authenticate access to system components |
| **Regularly Monitor and Test Networks** | Log and monitor all access; test security of systems and networks regularly |
| **Maintain an Information Security Policy** | Support information security with organizational policies and programs (directly connecting to Module 3) |

### Compliance Levels and Validation
PCI DSS validation requirements scale with transaction volume:

| Level | Typical Criteria | Validation Method |
|---|---|---|
| **Level 1** | Over 6 million transactions/year | Annual on-site audit by a Qualified Security Assessor (QSA) |
| **Level 2** | 1–6 million transactions/year | Annual Self-Assessment Questionnaire (SAQ), sometimes with QSA review |
| **Level 3** | 20,000–1 million e-commerce transactions/year | Annual SAQ |
| **Level 4** | Fewer than 20,000 e-commerce transactions/year | Annual SAQ, requirements vary by card brand |

### Compensating Controls
If an organization genuinely cannot meet a specific requirement exactly as written (due to a legitimate technical or business constraint), PCI DSS allows a **compensating control** — an alternative control that meets the *intent* and rigor of the original requirement, formally documented and approved by a QSA.

> **In plain terms:** PCI DSS is deliberately the most prescriptive of the three frameworks in this room — it doesn't just say "protect card data," it specifies exact technical requirements. This precision exists because it's a private industry mandate enforced by the card brands themselves, not a broad, principle-based standard meant to flexibly fit every kind of organization.

---

## GDPR in Depth

### Core Principles
GDPR is built on several core principles that shape everything else in the regulation:

| Principle | Meaning |
|---|---|
| **Lawfulness, Fairness, Transparency** | Personal data must be processed with a valid legal basis, fairly, and transparently to the data subject |
| **Purpose Limitation** | Data collected for one purpose shouldn't be reused for an incompatible new purpose (recall Module 1) |
| **Data Minimization** | Only collect what's genuinely necessary (recall Module 1's data minimization concept) |
| **Accuracy** | Personal data must be kept accurate and up to date |
| **Storage Limitation** | Data shouldn't be kept longer than necessary for its original purpose |
| **Integrity and Confidentiality** | Data must be processed securely, protecting against unauthorized access or loss |
| **Accountability** | The organization must be able to *demonstrate* compliance with all of the above, not just claim it |

### Legal Bases for Processing
GDPR requires a valid legal basis before processing personal data — common bases include: **consent**, **contractual necessity**, **legal obligation**, **vital interests**, **public task**, and **legitimate interests**. Choosing the wrong legal basis for a given activity is one of the most common GDPR compliance gaps.

### Data Protection Impact Assessments (DPIAs)
A **DPIA** is a formal, required assessment for processing activities likely to result in high risk to individuals — for example, large-scale processing of sensitive data, or systematic monitoring. It closely mirrors the risk assessment process from Module 2, but applied specifically through a privacy lens: instead of asking "what's the risk to our organization?" it asks "what's the risk to the individual whose data this is?"

### Breach Notification: The 72-Hour Rule
Under GDPR, organizations must notify the relevant supervisory authority of a qualifying personal data breach **within 72 hours** of becoming aware of it, unless the breach is unlikely to result in risk to individuals. If the breach poses a high risk to individuals, affected data subjects must also be notified, generally without undue delay.

> **In plain terms:** 72 hours is not a lot of time once a breach is discovered — this is exactly why the incident response planning and escalation paths from Module 3, Room 3 matter so much in practice; an organization without a clear, rehearsed escalation path will likely struggle to meet this deadline.

---

## Comparison Table

| | SOC 2 | PCI DSS | GDPR |
|---|---|---|---|
| **Nature** | Voluntary framework, audited | Mandatory industry standard | Mandatory law |
| **Who enforces it** | Market pressure (customers demand it) | Payment card brands | Government regulators (per EU member state, plus EDPB) |
| **Output** | Auditor's report (Type I or II) | Compliance validation (audit or SAQ) | No certificate — legal compliance obligation |
| **Applies to** | Any service organization, especially US SaaS/cloud | Any org handling payment card data | Any org processing EU residents' personal data |
| **Key deadline/requirement** | N/A (report renewed as needed, typically annually) | Annual validation | 72-hour breach notification |

---

## Worked Example: Solvex Analytics Faces All Three

Continuing with Solvex Analytics: as the company grew, it found itself needing to address all three frameworks simultaneously, for different reasons.

- **SOC 2:** Multiple enterprise customers required a SOC 2 Type II report before signing contracts — the sales team could not close several deals without it.
- **PCI DSS:** Solvex began accepting credit card payments directly (rather than exclusively through a third-party processor), falling under Level 4 requirements — an annual SAQ, since transaction volume remained under 20,000/year.
- **GDPR:** Because Solvex has customers and processes personal data from EU residents, GDPR applies regardless of where Solvex itself is headquartered — requiring a documented legal basis for each processing activity and a DPIA for a new large-scale analytics feature.

The CISO built a **crosswalk** (Module 1, Room 3) showing that several controls — encryption of data at rest, access logging, incident response procedures — satisfied requirements across all three simultaneously, avoiding duplicated work.

---

## Common Mistakes

- **Assuming a SOC 2 Type I report is "good enough" when a customer actually needs Type II.** As discussed above, these represent very different levels of assurance, and using the wrong one can stall or lose a deal.
- **Underestimating PCI DSS scope creep.** Any system that stores, processes, or transmits card data — even briefly — typically falls into PCI DSS scope, and organizations often underestimate how many systems that actually touches.
- **Treating GDPR as only relevant to companies physically located in the EU.** GDPR applies based on *whose data* is being processed, not where the processing organization is headquartered.
- **Choosing "consent" as the GDPR legal basis by default, without considering whether another basis fits better.** Consent has strict requirements (it must be freely given and easily withdrawable) that make it a poor fit for some processing activities where "contractual necessity" would be more appropriate and durable.
- **Building separate, disconnected compliance programs for each framework.** As the worked example shows, a crosswalk approach saves enormous duplicated effort across all three.

---

## Case Study: Compliant with One, Blind to the Others

**Background:** An e-commerce company successfully completed its PCI DSS Level 2 validation, and proudly considered its compliance obligations handled.

**What went wrong:**
- The company had never conducted a GDPR gap assessment, despite processing personal data (not just payment card data) from thousands of EU customers.
- When a customer submitted a formal request to have their personal data deleted (the "right to be forgotten" from Module 1), the company had no documented process for handling it — the request sat unanswered for over two months.
- A regulatory complaint followed, revealing that while payment card data was well protected under PCI DSS, broader personal data (order history, browsing behavior, marketing preferences) had never been assessed against GDPR's principles at all.

**Root cause (in framework terms):** The organization had achieved genuine compliance with one framework (PCI DSS) but had never recognized that a *different* framework, driven by a completely different trigger (processing EU residents' personal data, not just card data), also applied to them.

**Remediation:**
1. Conducted a full GDPR gap assessment, similar in spirit to the ISO 27001 SoA process from Room 1, identifying which principles and requirements weren't yet being met
2. Implemented a formal data subject rights request process, including a tracked, deadline-driven workflow for deletion and access requests
3. Trained the compliance team to specifically ask "which frameworks or regulations does this data or activity trigger?" for any new data collection activity, rather than assuming existing PCI DSS compliance covered everything

**Lesson:** Compliance with one framework, however well executed, says nothing about compliance with a different framework triggered by different criteria. As this room's comparison table shows, SOC 2, PCI DSS, and GDPR are checking fundamentally different things, for different reasons, and passing one is never evidence of passing another.

---

## Key Terminology

| Term | Definition |
|---|---|
| **Trust Services Criteria** | The five categories (Security, Availability, Processing Integrity, Confidentiality, Privacy) evaluated in a SOC 2 report |
| **Type I / Type II (SOC 2)** | Type I assesses control design at a point in time; Type II assesses operating effectiveness over a period |
| **Qualified Security Assessor (QSA)** | An individual certified to conduct formal PCI DSS on-site audits |
| **Self-Assessment Questionnaire (SAQ)** | A self-administered PCI DSS compliance validation, used at lower transaction volume levels |
| **Compensating Control** | An alternative PCI DSS control meeting the intent of a requirement that cannot be met as literally written |
| **Legal Basis (GDPR)** | The specific justification (e.g., consent, contract, legitimate interest) required before processing personal data |
| **Data Protection Impact Assessment (DPIA)** | A required GDPR risk assessment for high-risk personal data processing activities |
| **72-Hour Rule** | GDPR's requirement to notify supervisory authorities of a qualifying breach within 72 hours of awareness |

---

## Summary

- **SOC 2** produces an auditor's report (not a certificate) across five possible Trust Services Criteria, with **Type II** (operation over time) generally far more valuable to enterprise buyers than **Type I** (a design snapshot).
- **PCI DSS** is a prescriptive, mandatory industry standard organized into 12 requirements, with validation requirements that scale by **transaction volume level**, and allows **compensating controls** for legitimate constraints.
- **GDPR** is a law built on core principles (lawfulness, purpose limitation, data minimization, accountability, and more), requiring a valid **legal basis** for processing, **DPIAs** for high-risk activities, and breach notification within **72 hours**.
- These three frameworks check fundamentally **different things**, triggered by different criteria (customer demand, handling card data, processing EU residents' data) — passing one says nothing about compliance with another.
- A **crosswalk** approach, as shown in the worked example, lets a single set of well-designed controls satisfy multiple frameworks at once, avoiding duplicated effort.
- As the case study demonstrated, real-world compliance gaps often come not from failing a framework you're working on, but from never realizing a *different* framework also applies to you.

---

## Self-Check: Can You Explain It?

Without looking back at the text, explain out loud: *"We just passed our PCI DSS audit. Does that mean we're also GDPR compliant?"* Then explain the practical difference between a SOC 2 Type I and Type II report to someone who has never heard either term before.

---

## Review Questions

1. Using the driver's license/insurance/inspection analogy, explain why passing one compliance framework doesn't imply passing another.
2. Name the five SOC 2 Trust Services Criteria, and explain which one is always mandatory.
3. Why do enterprise buyers typically prefer a SOC 2 Type II report over a Type I report?
4. Explain how PCI DSS compliance levels scale with transaction volume, and what validation method applies at each level.
5. What is a compensating control under PCI DSS, and why does this mechanism exist?
6. Name at least four of GDPR's core principles, and briefly explain what each one requires.
7. What is a DPIA, and how does it relate to the risk assessment process from Module 2?
8. What is the GDPR breach notification deadline, and why does this connect directly to the incident escalation paths covered in Module 3?
9. In the case study, why did strong PCI DSS compliance fail to protect the organization from a GDPR-related regulatory complaint?
10. Explain, using the worked example, how a crosswalk approach helps an organization address SOC 2, PCI DSS, and GDPR simultaneously without duplicating all of its compliance work three times over.

---

*This document is Room 3 of Module 4 in the GRC Fundamentals learning path. It builds on Module 1, Room 3's framework overview, and on Rooms 1–2's deep dives into ISO 27001 and NIST CSF. Room 4 applies everything from this module hands-on, through a practical gap analysis exercise.*
