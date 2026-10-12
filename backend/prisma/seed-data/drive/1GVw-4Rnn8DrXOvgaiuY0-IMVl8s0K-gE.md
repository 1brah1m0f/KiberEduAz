# Gap Analysis
### Module 4 — Room 4: Measuring the Distance Between Where You Are and Where You Need to Be

---

## Table of Contents
1. [Before You Start: A Simple Analogy](#before-you-start-a-simple-analogy)
2. [Introduction](#introduction)
3. [What a Gap Analysis Actually Is](#what-a-gap-analysis-actually-is)
4. [The Gap Analysis Process, Step by Step](#the-gap-analysis-process-step-by-step)
5. [Rating the Gap: Common Scales](#rating-the-gap-common-scales)
6. [Turning Gaps Into a Remediation Plan](#turning-gaps-into-a-remediation-plan)
7. [Hands-On Exercise: A Mini Gap Analysis for Solvex Analytics](#hands-on-exercise-a-mini-gap-analysis-for-solvex-analytics)
8. [Your Turn: Complete the Gap Analysis](#your-turn-complete-the-gap-analysis)
9. [Common Mistakes](#common-mistakes)
10. [Case Study: The Gap Analysis That Sat in a Drawer](#case-study-the-gap-analysis-that-sat-in-a-drawer)
11. [Key Terminology](#key-terminology)
12. [Summary](#summary)
13. [Self-Check: Can You Explain It?](#self-check-can-you-explain-it)
14. [Review Questions](#review-questions)

---

## Before You Start: A Simple Analogy

Imagine you're preparing to sell a house. Before listing it, a smart seller often hires a **pre-listing inspector** to walk through the property and compare it against the standard a buyer's inspector will eventually check: Is the roof up to code? Does the electrical panel meet current safety standards? Is there a working smoke detector on every floor?

The inspector doesn't just say "the house is fine" or "the house is broken." They produce a **specific list**: this meets code, this doesn't, here's exactly what's missing, and here's roughly what it would cost and how long it would take to fix each item. Armed with that list, the seller can decide what to fix before listing, what to disclose and negotiate on, and what to simply accept as-is.

**A gap analysis is exactly this walkthrough, applied to a compliance framework instead of a house.** You take a target standard (ISO 27001, NIST CSF, SOC 2 — anything from Rooms 1–3), walk through it requirement by requirement, and produce a precise list of what already meets the standard, what doesn't, and what it would take to close each gap.

---

## Introduction

Across Module 4, you've learned three different frameworks in depth: ISO 27001, NIST CSF, and SOC 2/PCI DSS/GDPR. This final room is entirely practical: **how do you actually figure out where your organization currently stands against any of them?** The answer is a **gap analysis** — one of the most commonly requested, hands-on deliverables in real GRC work, and the skill this room will have you practice directly.

---

## What a Gap Analysis Actually Is

A **gap analysis** is a structured comparison between a **target state** (the requirements of a chosen framework or standard) and a **current state** (what the organization actually does today), producing a documented list of **gaps** — specific points where current practice falls short of the target.

> **In plain terms:** It's the compliance equivalent of Module 2's inherent-vs-residual risk assessment, just framed around framework requirements instead of individual risks: "here's the standard, here's where we actually stand, and here's exactly what separates the two."

---

## The Gap Analysis Process, Step by Step

| Step | What Happens |
|---|---|
| **1. Choose the target framework** | Select the standard to measure against — often driven by the same "who's asking us to prove compliance?" question from Module 1, Room 3 |
| **2. Break the framework into checkable requirements** | Convert the framework's clauses, controls, or subcategories (Rooms 1–3) into a list of specific, assessable items |
| **3. Assess current state for each requirement** | For each item, determine: Is this fully met? Partially met? Not met at all? |
| **4. Document evidence** | Record what evidence (or lack of it) supports each assessment — an unsupported "yes" is not trustworthy |
| **5. Rate the gap** | Assign a severity or priority to each identified gap (see the next section) |
| **6. Build a remediation plan** | For each gap, define the action needed, an owner, and a target date |
| **7. Review and revisit** | A gap analysis is a snapshot — like the risk register (Module 2, Room 3), it needs periodic updates as the organization and the framework both evolve |

> **In plain terms:** Skipping step 4 (documenting evidence) is one of the most common shortcuts that undermines an entire gap analysis — an assessment based on "I'm pretty sure we do this" rather than actual evidence often turns out to be wrong once someone actually checks.

---

## Rating the Gap: Common Scales

Most gap analyses use a simple maturity or completion scale for each requirement:

| Rating | Meaning |
|---|---|
| **Not Started** | No process, control, or documentation exists for this requirement at all |
| **Partially Implemented** | Some elements exist, but not consistently, not fully documented, or not fully operational |
| **Largely Implemented** | The requirement is substantially met, with minor gaps remaining |
| **Fully Implemented** | The requirement is completely met, with evidence to support it |
| **Not Applicable** | The requirement doesn't apply to this organization's context — but this needs a documented justification, exactly like an ISO 27001 SoA exclusion (Room 1) |

---

## Turning Gaps Into a Remediation Plan

A list of gaps alone isn't useful until it's prioritized and assigned. A solid remediation plan borrows directly from Module 2's risk treatment concepts:

| Gap | Priority | Owner | Target Date | Treatment Approach |
|---|---|---|---|---|
| No formal incident response plan | High | Security Team Lead | Q2 2026 | Mitigate — draft and test a plan |
| Physical badge logs not retained | Low | Facilities Manager | Q4 2026 | Mitigate — low urgency given minimal physical risk exposure |
| No DPIA process for new features | High | Privacy Officer | Q1 2026 | Mitigate — required for GDPR compliance (Room 3) |

> **In plain terms:** Notice this table looks a lot like the risk register from Module 2, Room 3 — that's not a coincidence. A gap analysis essentially generates a specialized set of risks (each unmet requirement is itself a risk) that flow into the same risk management pipeline you already know.

---

## Hands-On Exercise: A Mini Gap Analysis for Solvex Analytics

Continuing with Solvex Analytics: the CISO wants to assess current readiness against a handful of ISO 27001 Annex A controls (Room 1) before committing to a full certification effort. Study this worked example carefully — you'll complete a similar one yourself in the next section.

| Control | Requirement (Simplified) | Current State | Rating | Evidence |
|---|---|---|---|---|
| A.5.1 | Information security policy exists and is approved | Policy exists, approved by CISO (see Module 3, Room 2's worked example) | Fully Implemented | Signed policy document, version history |
| A.8.24 | Cryptography is used to protect sensitive data | Data encrypted at rest; encryption in transit inconsistently applied across older services | Partially Implemented | Encryption config for new services only |
| A.6.3 | Personnel receive security awareness training | No formal training program exists yet | Not Started | No training records found |
| A.5.30 | ICT readiness for business continuity is planned | Backup processor identified for payment risk (Module 2, Room 4) but not tested | Partially Implemented | Vendor contract; no test log |

**Resulting priorities:** The CISO identified security awareness training (A.6.3) as the highest priority gap — since it was rated "Not Started" — followed by extending encryption in transit consistently across all services.

---

## Your Turn: Complete the Gap Analysis

Using the same format as the worked example above, assess these three additional ISO 27001-style requirements for a hypothetical organization you're familiar with (or continue with Solvex Analytics):

1. **Access reviews are conducted periodically to confirm user access remains appropriate**
2. **A documented incident response procedure exists and has been tested**
3. **Vendor risk assessments are performed before engaging new third-party providers** (recall Module 2, Room 5)

For each one, assign a rating (Not Started / Partially Implemented / Largely Implemented / Fully Implemented / Not Applicable), note what evidence would support your assessment, and propose one concrete remediation action with a plausible owner and target date.

---

## Common Mistakes

- **Rating requirements based on assumption rather than evidence.** As mentioned above, "I'm pretty sure we do this" is not the same as confirming it — the entire value of a gap analysis depends on rigor at this step.
- **Treating "Not Applicable" as an easy way to skip an inconvenient requirement.** Just like an ISO 27001 SoA exclusion (Room 1), every "Not Applicable" rating needs a genuine, documented justification.
- **Producing a gap list with no remediation plan attached.** A gap analysis that stops at "here's what's missing," without owners, dates, and priorities, tends to become exactly the kind of forgotten document described in this room's case study.
- **Doing a gap analysis once and never repeating it.** Frameworks get updated (NIST CSF 2.0's added Govern function, Room 2, is a good example) and organizations change — a gap analysis frozen in time becomes stale exactly like an unmaintained risk register (Module 2, Room 3).
- **Assessing every requirement with the same level of rigor regardless of stakes.** A low-risk, low-impact requirement doesn't need the same depth of evidence-gathering as a high-risk one — matching effort to stakes keeps the process efficient.

---

## Case Study: The Gap Analysis That Sat in a Drawer

**Background:** A mid-sized healthcare technology company commissioned an external consultant to perform a thorough gap analysis against the NIST Cybersecurity Framework (Room 2), identifying 34 specific gaps across all six Functions.

**What went wrong:**
- The consultant delivered a polished 60-page report, complete with ratings and recommendations, and the engagement formally ended.
- No internal owner was assigned to translate the findings into an actual remediation plan — the report was reviewed once in a leadership meeting, generated enthusiastic discussion, and was then filed away.
- Fourteen months later, during an actual security incident, the post-incident review discovered that the root cause was a gap explicitly identified in that same report — in the "Detect" function, almost identical to the pattern described in Room 2's case study.

**Root cause (in gap analysis terms):** The organization treated the gap analysis as a one-time deliverable to *receive*, rather than the starting point of an ongoing remediation process requiring real ownership, exactly the "Turning Gaps Into a Remediation Plan" step described earlier in this room.

**Remediation:**
1. Reopened the original gap analysis and assigned a specific owner and target date to every one of the 34 findings, not just the ones related to the recent incident
2. Established a standing quarterly review specifically to track remediation progress against the gap list, reporting status to the Security Steering Committee (Module 3, Room 3)
3. Adopted a policy that any future gap analysis or audit finding must be entered into the same tracked remediation system as the risk register, rather than existing as a standalone report

**Lesson:** A gap analysis is only valuable if its findings actually flow into an owned, tracked remediation plan — a technically excellent, thorough analysis that sits unread in a drawer protects an organization no better than never having done the analysis at all.

---

## Key Terminology

| Term | Definition |
|---|---|
| **Gap Analysis** | A structured comparison between a target framework's requirements and an organization's current state |
| **Target State** | The requirements defined by the chosen framework or standard |
| **Current State** | What the organization actually does today, based on evidence |
| **Gap** | A specific point where current practice falls short of the target state |
| **Remediation Plan** | The documented set of actions, owners, and dates for closing identified gaps |

---

## Summary

- A **gap analysis** compares an organization's **current state** against a chosen framework's **target state**, producing a documented list of specific **gaps**.
- The process moves through defined steps: choosing a framework, breaking it into checkable requirements, assessing current state with evidence, rating each gap, and building a remediation plan.
- Gap ratings (Not Started, Partially Implemented, Largely Implemented, Fully Implemented, Not Applicable) provide a consistent way to communicate status — and "Not Applicable" always requires genuine justification, just like an ISO 27001 SoA exclusion.
- A remediation plan should assign a **priority, owner, and target date** to every gap, essentially feeding gaps into the same risk management pipeline covered in Module 2.
- As the hands-on exercise showed, a gap analysis is a very learnable, practical skill — the same simple table format scales from a handful of controls up to a full framework assessment.
- As the case study demonstrated, a gap analysis only creates value if its findings are actively owned and tracked to closure — a polished report that sits unread protects nobody.

---

## Self-Check: Can You Explain It?

Without looking back at the text, explain out loud: *"We just paid for a gap analysis. What has to happen next for this to actually be worth the money we spent?"* Then try rating one requirement from your own experience (school, work, or a club) using the five-point scale from this room, and describe what evidence would support your rating.

---

## Review Questions

1. Using the home inspection analogy, explain the difference between a "target state" and a "current state" in your own words.
2. Why is documenting evidence (step 4) considered one of the most important steps in the gap analysis process, and what happens when it's skipped?
3. List the five common gap ratings, and explain why "Not Applicable" still requires a documented justification rather than being an automatic pass.
4. In the Solvex Analytics worked example, why was security awareness training identified as the highest priority gap?
5. Explain the connection between a gap analysis remediation plan and Module 2's risk register — why do they end up looking so similar?
6. In the case study, what specific step was missing that allowed a well-done gap analysis to have essentially no real-world impact?
7. Why should the depth of evidence-gathering vary depending on the stakes of each individual requirement, rather than being uniform across the board?
8. Why does a gap analysis need to be repeated periodically, rather than being treated as a one-time project?
9. Complete a mini gap rating for a hypothetical requirement: "All laptops are enrolled in mobile device management." What evidence would you look for to support a "Fully Implemented" rating versus a "Partially Implemented" one?
10. Explain why a gap analysis with 34 well-documented findings can still fail to prevent a security incident, as shown in the case study.

---

*This document is Room 4 of Module 4 in the GRC Fundamentals learning path, completing Module 4's coverage of Compliance & Frameworks. It applies the ISO 27001, NIST CSF, and SOC 2/PCI DSS/GDPR content from Rooms 1–3 through a hands-on, practical exercise. Module 5 turns to Audit & Assessment, where these same gaps are independently verified by a third party.*
