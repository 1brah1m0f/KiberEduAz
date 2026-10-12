# The NIST Cybersecurity Framework
### Module 4 — Room 2: A Common Language for Cybersecurity Posture

---

## Table of Contents
1. [Before You Start: A Simple Analogy](#before-you-start-a-simple-analogy)
2. [Introduction](#introduction)
3. [What NIST CSF Actually Is](#what-nist-csf-actually-is)
4. [The Six Functions](#the-six-functions)
5. [Categories and Subcategories](#categories-and-subcategories)
6. [Implementation Tiers](#implementation-tiers)
7. [Profiles: Current State vs. Target State](#profiles-current-state-vs-target-state)
8. [NIST CSF vs. ISO 27001](#nist-csf-vs-iso-27001)
9. [Worked Example: Solvex Analytics Builds a Target Profile](#worked-example-solvex-analytics-builds-a-target-profile)
10. [Common Mistakes](#common-mistakes)
11. [Case Study: All Protect, No Detect](#case-study-all-protect-no-detect)
12. [Key Terminology](#key-terminology)
13. [Summary](#summary)
14. [Self-Check: Can You Explain It?](#self-check-can-you-explain-it)
15. [Review Questions](#review-questions)

---

## Before You Start: A Simple Analogy

Think about how a hospital handles patient health, start to finish. First, it needs to **know** who its patients are and what conditions they have — that's assessment and intake. Then it works to **prevent** illness in the first place — vaccination, hygiene protocols. Even with prevention, problems still happen, so the hospital needs to **detect** issues early — regular checkups, monitoring vital signs. When something is found, the hospital must **respond** — treatment, surgery, medication. And afterward, the patient needs to **recover** — rehabilitation, follow-up care, getting back to normal life. Running underneath all of it is **governance** — the hospital's leadership setting policy, budget, and overall standards of care that every department follows.

**This is essentially the structure of the NIST Cybersecurity Framework.** Instead of a patient's health, it's an organization's cybersecurity posture — but the same six-stage logic applies: Govern, Identify, Protect, Detect, Respond, Recover. Keep the hospital in mind; it makes the framework's plain-language design click almost immediately.

---

## Introduction

You met NIST CSF briefly in Module 1, Room 3, as a non-certifiable, practical framework for organizing cybersecurity activities in plain language. This room goes deeper into its actual structure — the Functions, Categories, Subcategories, Tiers, and Profiles that make it one of the most widely used cybersecurity references in the world.

---

## What NIST CSF Actually Is

The **NIST Cybersecurity Framework**, developed by the U.S. National Institute of Standards and Technology, organizes cybersecurity activities into a structure designed to be understandable by both technical staff and non-technical executives — deliberately avoiding the dense, specialist language that makes many security frameworks hard for a board member or business leader to actually engage with.

Unlike ISO 27001, **NIST CSF is not certifiable.** There's no audit and no certificate. Instead, organizations use it to build a **profile** — a description of where they currently stand and where they want to be — and measure progress against that self-defined target over time.

> **In plain terms:** ISO 27001 answers "can we prove it to an outside auditor?" NIST CSF answers "can we describe our cybersecurity posture clearly enough that a board member without a technical background can actually follow the conversation?"

---

## The Six Functions

NIST CSF organizes all cybersecurity activity into high-level **Functions**. Version 2.0 (released in 2024) added a sixth function, **Govern**, sitting at the center of the other five to emphasize that governance decisions inform and connect everything else.

| Function | Core Question | Example Activities |
|---|---|---|
| **Govern (GV)** | How do we make and oversee cybersecurity decisions? | Setting risk strategy, roles and responsibilities, policy (ties directly to Module 3) |
| **Identify (ID)** | What do we need to protect? | Asset inventory, risk assessment (Module 2), understanding the business context |
| **Protect (PR)** | How do we prevent or limit harm? | Access control, awareness training, data security, encryption |
| **Detect (DE)** | How do we notice something's wrong? | Continuous monitoring, anomaly detection, logging |
| **Respond (RS)** | How do we act once something's found? | Incident response planning, communication, mitigation |
| **Recover (RC)** | How do we restore normal operations? | Recovery planning, backups, lessons learned |

> **In plain terms:** Notice that "Govern" was deliberately placed at the *center* in the 2.0 update, not as just another item in a numbered list — this reflects that governance decisions (Module 3's policies, roles, and risk appetite) shape every one of the other five functions, rather than being just one more independent bucket of activity.

---

## Categories and Subcategories

Each Function breaks down further into **Categories** (specific topic areas) and **Subcategories** (concrete, actionable outcomes). This is where the framework becomes genuinely operational, rather than just a high-level list of six words.

### Example: Breaking Down "Protect"

| Category | Example Subcategory |
|---|---|
| **Identity Management and Access Control (PR.AA)** | "Identities and credentials for authorized users, services, and hardware are managed by the organization" |
| **Data Security (PR.DS)** | "The confidentiality, integrity, and availability of data-at-rest are protected" |
| **Platform Security (PR.PS)** | "Software is maintained, replaced, and removed commensurate with risk" |

> **In plain terms:** A Function like "Protect" is too abstract to act on directly — Categories narrow it to a specific topic, and Subcategories narrow it further into something you could actually check off as done or not done, similar in spirit to how a Standard makes a Policy concrete (Module 3, Room 1).

---

## Implementation Tiers

**Tiers** describe *how* rigorously an organization manages cybersecurity risk — not a maturity score to "pass," but a self-assessed description of current practice.

| Tier | Description |
|---|---|
| **Tier 1 — Partial** | Risk management practices are informal, reactive, and not consistently applied across the organization |
| **Tier 2 — Risk Informed** | Risk management practices exist and are approved by management, but aren't yet applied consistently organization-wide |
| **Tier 3 — Repeatable** | Practices are formally documented, consistently applied, and regularly updated based on changes in risk |
| **Tier 4 — Adaptive** | The organization adapts its cybersecurity practices proactively, based on lessons learned and predictive indicators, and actively shares information with partners |

> **In plain terms:** Tiers aren't a competition to reach Tier 4 at all costs — a Tier 2 organization with modest risk exposure might be entirely appropriately positioned, while pushing toward Tier 4 could be a poor use of resources if the organization's actual risk doesn't justify that level of investment.

---

## Profiles: Current State vs. Target State

A **Profile** is the practical output of applying NIST CSF: a snapshot of which Subcategory outcomes an organization currently achieves (**Current Profile**), compared against which outcomes it wants to achieve (**Target Profile**).

The gap between the two — exactly the kind of gap analysis you'll practice hands-on in Room 4 — becomes the organization's roadmap for prioritizing security investment.

> **In plain terms:** The Current Profile is "where we actually are today, honestly assessed." The Target Profile is "where we've decided we need to be, given our risk appetite (Module 2, Room 3)." The distance between them is the work plan.

---

## NIST CSF vs. ISO 27001

| | NIST CSF | ISO 27001 |
|---|---|---|
| **Certifiable?** | No | Yes |
| **Structure** | 6 Functions → Categories → Subcategories | Clauses 4–10 + Annex A controls |
| **Primary value** | Plain-language communication and prioritization | Formal, externally verified assurance |
| **Typical use** | Internal roadmap, executive communication, US-focused organizations | Customer-facing proof, especially for international business |
| **Flexibility** | Very flexible, principle-based | More prescriptive, requires formal documentation |

> **In plain terms:** These frameworks aren't competitors — many organizations use NIST CSF internally to plan and communicate priorities, while pursuing ISO 27001 (or SOC 2) externally to prove those priorities to customers and auditors. Recall the crosswalk concept from Module 1, Room 3: the same underlying controls can satisfy both frameworks simultaneously.

---

## Worked Example: Solvex Analytics Builds a Target Profile

Continuing with Solvex Analytics: alongside its ISO 27001 certification effort (Room 1), the CISO also built a NIST CSF profile for internal roadmap planning.

**Current Profile (partial excerpt):**
- **Identify:** Asset inventory exists but is updated manually and inconsistently — assessed at Tier 2
- **Protect:** Strong access controls in place, consistently applied — assessed at Tier 3
- **Detect:** Basic logging exists, but no formal anomaly detection process — assessed at Tier 1

**Target Profile (six-month goal):**
- **Identify:** Automated, continuously updated asset inventory — target Tier 3
- **Protect:** Maintain current Tier 3 level, no further investment needed here for now
- **Detect:** Implement automated anomaly detection and alerting — target Tier 3

**Resulting priority:** Because "Detect" showed the largest gap between Current and Target Profile, and "Protect" was already performing well, the CISO prioritized budget toward detection tooling first, rather than spreading investment evenly across all six functions.

---

## Common Mistakes

- **Treating Tiers as a maturity score everyone should maximize.** As discussed above, Tier 4 isn't automatically the right goal for every organization — the right Tier depends on actual risk exposure.
- **Building a Target Profile with no connection to real risk assessment.** A Target Profile should be shaped by the organization's actual risks (Module 2), not by copying a generic "best practice" profile that doesn't reflect real priorities.
- **Assuming NIST CSF adoption alone satisfies customer or regulatory requirements.** Since it isn't certifiable, some customers or regulators specifically require ISO 27001, SOC 2, or another certifiable standard instead or in addition.
- **Building a Current Profile based on wishful thinking rather than honest assessment.** An inflated Current Profile makes the Target Profile gap look smaller than it really is, undermining the entire purpose of the exercise.
- **Focusing only on Protect while neglecting Detect and Respond.** As the case study below shows, strong prevention alone isn't sufficient if an organization can't notice or react when prevention inevitably fails.

---

## Case Study: All Protect, No Detect

**Background:** A financial services firm invested heavily in "Protect" function activities — strong access controls, encryption, and extensive employee training — earning a strong internal reputation for taking security seriously.

**What went wrong:**
- An attacker who had obtained valid credentials through a sophisticated phishing attack (bypassing Protect-function defenses) operated undetected inside the network for over three weeks.
- The organization had invested almost nothing in the "Detect" function — no meaningful anomaly detection, and log review happened only reactively, after an incident was already suspected through other means.
- By the time the intrusion was discovered (via an unrelated customer complaint about unusual account activity), significant data had already been accessed.

**Root cause (in NIST CSF terms):** The organization's Current Profile was heavily weighted toward Protect, with Detect left far behind — an imbalance across the Functions that left a specific, significant blind spot.

**Remediation:**
1. Built a proper Current vs. Target Profile analysis across all six functions, rather than continuing to invest disproportionately in the function the organization already felt confident about
2. Prioritized investment specifically in Detect capabilities — deploying monitoring and alerting tools to close the identified gap
3. Adopted a standing practice of reviewing profile balance across all six functions annually, specifically to catch this kind of lopsided investment pattern before it became a blind spot again

**Lesson:** A framework organized into six functions to actively guard against exactly this kind of imbalance — over-investing in Protect while leaving Detect nearly empty — only works if an organization actually uses the full Function structure to check its own balance, rather than focusing energy wherever feels most comfortable or familiar.

---

## Key Terminology

| Term | Definition |
|---|---|
| **NIST Cybersecurity Framework (CSF)** | A plain-language, non-certifiable framework organizing cybersecurity into six Functions |
| **Function** | One of six top-level categories: Govern, Identify, Protect, Detect, Respond, Recover |
| **Category** | A specific topic area within a Function |
| **Subcategory** | A concrete, actionable outcome within a Category |
| **Implementation Tier** | A self-assessed description (1–4) of how rigorously an organization manages cybersecurity risk |
| **Current Profile** | A snapshot of which Subcategory outcomes an organization currently achieves |
| **Target Profile** | A snapshot of which Subcategory outcomes an organization aims to achieve |

---

## Summary

- **NIST CSF** organizes cybersecurity activity into six plain-language **Functions**: Govern, Identify, Protect, Detect, Respond, and Recover — with Govern added at the center in version 2.0.
- Each Function breaks down into **Categories** and **Subcategories**, turning abstract concepts into concrete, checkable outcomes.
- **Implementation Tiers** (1–4) describe how rigorously risk is managed — higher isn't automatically better, since the right Tier depends on actual risk exposure.
- A **Current Profile** and **Target Profile** together define an organization's roadmap — the gap between them drives prioritization.
- Unlike ISO 27001, NIST CSF is **not certifiable** — its value is in plain-language communication and internal planning, often used *alongside* a certifiable framework rather than instead of one.
- As the case study showed, over-investing in one Function (like Protect) while neglecting others (like Detect) creates exactly the kind of blind spot the six-function structure is designed to help an organization notice and correct.

---

## Self-Check: Can You Explain It?

Without looking back at the text, explain out loud: *"Why did NIST add a 'Govern' function at the center of the framework in version 2.0, instead of just adding it as a seventh item in the list?"* Then explain the difference between a Current Profile and a Target Profile, using an example other than the ones in this room.

---

## Review Questions

1. Using the hospital analogy, briefly describe all six NIST CSF Functions in your own words.
2. What is the key structural difference between NIST CSF and ISO 27001 in terms of certifiability?
3. Explain the relationship between a Function, a Category, and a Subcategory, using the "Protect" example from this room.
4. Why isn't Tier 4 automatically the "correct" goal for every organization to aim for?
5. What is the difference between a Current Profile and a Target Profile, and how does the gap between them get used?
6. In the worked example, why did Solvex Analytics prioritize "Detect" over further investment in "Protect"?
7. In the case study, what specific imbalance across the six Functions allowed the intrusion to go undetected for three weeks?
8. Why might an organization use both NIST CSF and ISO 27001 at the same time, rather than choosing only one?
9. Explain why an honestly (rather than optimistically) assessed Current Profile matters for the usefulness of the entire exercise.
10. Why was "Govern" specifically placed at the center of the framework diagram in version 2.0, rather than positioned as just another function in the list?

---

*This document is Room 2 of Module 4 in the GRC Fundamentals learning path. It builds on Room 1's ISO 27001 content, showing a non-certifiable alternative approach to organizing cybersecurity posture. Room 3 turns to SOC 2, PCI DSS, and GDPR in greater technical depth.*
