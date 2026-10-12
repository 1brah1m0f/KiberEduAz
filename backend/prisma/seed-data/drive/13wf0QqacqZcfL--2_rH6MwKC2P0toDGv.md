# Risk Assessment
### Module 2 — Room 2: How Big Is This Risk, Really?

---

## Table of Contents
1. [Before You Start: A Simple Analogy](#before-you-start-a-simple-analogy)
2. [Introduction](#introduction)
3. [From Identification to Assessment](#from-identification-to-assessment)
4. [The Core Idea: Likelihood × Impact](#the-core-idea-likelihood--impact)
5. [Qualitative Risk Assessment](#qualitative-risk-assessment)
6. [Quantitative Risk Assessment](#quantitative-risk-assessment)
7. [Qualitative vs. Quantitative — When to Use Which](#qualitative-vs-quantitative--when-to-use-which)
8. [Inherent Risk vs. Residual Risk](#inherent-risk-vs-residual-risk)
9. [Common Mistakes](#common-mistakes)
10. [Case Study: The Risk That Was Rated Wrong](#case-study-the-risk-that-was-rated-wrong)
11. [Key Terminology](#key-terminology)
12. [Summary](#summary)
13. [Self-Check: Can You Explain It?](#self-check-can-you-explain-it)
14. [Review Questions](#review-questions)

---

## Before You Start: A Simple Analogy

Let's return to our ship. The lookout from Room 1 has just spotted something in the water and shouted it down to the bridge. Now it's the **captain's** job to figure out: how serious is this, actually?

The captain doesn't just hear "iceberg" and panic, nor do they shrug it off. They quickly weigh a few specific things:

- **How likely is it that we'll actually hit it?** Is it directly in our path, or well off to the side?
- **How big is it, and how bad would a collision be?** A small piece of drift ice is very different from a massive iceberg.
- **How much time do we have to react?** Are we closing in fast, or is there plenty of time to steer around it calmly?

Notice what the captain is doing: turning a single spotted hazard into two separate judgments — **how likely is it to actually cause harm**, and **how bad would it be if it did** — and then combining those two judgments to decide how urgently to act.

**This is exactly what risk assessment is.** Once a risk has been identified (Room 1), assessment answers the question: *how likely is this, and how bad would it be if it happened* — so the organization can decide where to focus its limited time and resources first.

---

## Introduction

In Room 1, you learned how to systematically find risks and write them down clearly. But a list of fifty identified risks is not, on its own, very useful — an organization has limited time, money, and attention, and it cannot treat all fifty risks with equal urgency. **Risk assessment is the process of figuring out which risks actually deserve attention first**, by scoring them on two dimensions: how likely they are to occur, and how severe the consequences would be if they did.

This room covers the two main approaches to doing that: **qualitative** assessment (using descriptive ratings like High/Medium/Low) and **quantitative** assessment (using actual numbers, like estimated dollar losses). Most real organizations use a mix of both, and by the end of this room you'll understand exactly when each approach makes sense.

---

## From Identification to Assessment

Recall the risk management pipeline from Room 1:

**Identify → Assess → Treat → Monitor**

Assessment is the bridge between simply *knowing about* a risk and actually *deciding what to do about it*. Without assessment, an organization has no principled way to answer questions like:
- Should we spend $200,000 fixing this vulnerability, or is it not worth the investment?
- Which of these twelve open risks should the risk committee discuss first?
- Is this risk within our acceptable risk appetite, or does it need immediate action?

> **In plain terms:** Assessment turns a flat, unordered list of risks into a prioritized one — the risk equivalent of turning a pile of unsorted mail into "urgent," "this week," and "eventually" piles.

---

## The Core Idea: Likelihood × Impact

Nearly every risk assessment method, no matter how sophisticated, is built on the same two core questions:

| Dimension | Question It Answers |
|---|---|
| **Likelihood (or Probability)** | How likely is this risk to actually occur? |
| **Impact (or Consequence)** | If it does occur, how severe would the effect be? |

The basic logic: a risk that is **both** highly likely **and** highly severe deserves urgent attention. A risk that is unlikely **and** minor if it happened can usually wait, or be accepted. Most of the real skill in risk assessment is in figuring out *how* to score likelihood and impact in a way that's consistent and defensible — which is where qualitative and quantitative methods come in.

---

## Qualitative Risk Assessment

**Qualitative assessment** uses descriptive rating scales — words or simple numbers like Low/Medium/High, or 1–5 — instead of precise dollar figures. It's the most common starting point for organizations, especially newer GRC programs, because it's fast and doesn't require detailed financial data.

### A Typical Rating Scale

| Rating | Likelihood Meaning | Impact Meaning |
|---|---|---|
| **1 — Rare** | Very unlikely to occur (once in 10+ years) | Negligible effect on operations or finances |
| **2 — Unlikely** | Could occur, but not expected (once in 5–10 years) | Minor, easily absorbed effect |
| **3 — Possible** | Reasonably likely to occur at some point (once in 1–5 years) | Moderate effect, noticeable but manageable |
| **4 — Likely** | Expected to occur (roughly once a year) | Major effect, significant disruption |
| **5 — Almost Certain** | Expected to occur multiple times or continuously | Severe effect, potentially threatens the organization |

### The Risk Matrix (Heat Map)

Once a risk is scored on both dimensions, it's usually plotted on a **risk matrix** — a simple grid that turns two numbers into an intuitive color-coded picture.

| | Impact: Negligible (1) | Impact: Minor (2) | Impact: Moderate (3) | Impact: Major (4) | Impact: Severe (5) |
|---|---|---|---|---|---|
| **Likelihood: Almost Certain (5)** | Medium | High | High | Critical | Critical |
| **Likelihood: Likely (4)** | Medium | Medium | High | High | Critical |
| **Likelihood: Possible (3)** | Low | Medium | Medium | High | High |
| **Likelihood: Unlikely (2)** | Low | Low | Medium | Medium | High |
| **Likelihood: Rare (1)** | Low | Low | Low | Medium | Medium |

A risk landing in the top-right corner (highly likely, highly severe) is a **Critical** priority. A risk in the bottom-left (rare and negligible) is **Low** priority and may simply be accepted. The real value of a heat map isn't precision — it's giving a room full of people, at a glance, a shared, visual sense of relative priority.

> **In plain terms:** Qualitative assessment doesn't tell you exactly how many dollars a risk could cost — it tells you, quickly and intuitively, "this one needs attention now, and that one can wait."

---

## Quantitative Risk Assessment

**Quantitative assessment** goes a step further, expressing likelihood and impact in **actual numbers** — usually financial figures — instead of descriptive labels. It requires more data and effort, but produces results that can be directly compared to the cost of fixing the risk, which is extremely useful for justifying budget decisions.

### The Core Formula: Annualized Loss Expectancy (ALE)

A widely used quantitative model in security and operational risk:

> **SLE (Single Loss Expectancy) × ARO (Annualized Rate of Occurrence) = ALE (Annualized Loss Expectancy)**

- **SLE** — how much money would be lost in a *single* occurrence of the risk event
- **ARO** — how many times per year the event is expected to happen (this can be a fraction — e.g., 0.2 means "expected once every 5 years")
- **ALE** — the resulting *average* expected loss per year, which can be compared directly against the cost of a control designed to reduce it

### Worked Example

A company estimates that a specific type of data breach would cost approximately **$500,000** in incident response, legal fees, and regulatory fines (this is the SLE). Based on industry data and their own risk factors, they estimate this type of breach is likely to occur roughly **once every 4 years** (an ARO of 0.25).

> ALE = $500,000 × 0.25 = **$125,000 per year**

This means the organization can expect to lose, on average, about $125,000 per year to this risk if nothing changes. Now imagine a proposed security control — better access monitoring — costs **$40,000 per year** to implement and is expected to cut the likelihood of this breach in half.

> New ALE = $500,000 × 0.125 = **$62,500 per year**
>
> Risk reduction value = $125,000 − $62,500 = **$62,500 per year**
>
> Cost of the control = $40,000 per year

Since the risk reduction ($62,500) is greater than the cost of the control ($40,000), this investment makes clear financial sense — and, crucially, this is a conclusion you can defend directly to a CFO in terms they immediately understand.

> **In plain terms:** Quantitative assessment turns "we think this is a big risk" into "this risk is costing us approximately $125,000 a year, and this $40,000 control would save us $62,500 of that" — a dramatically more persuasive argument in a budget conversation.

---

## Qualitative vs. Quantitative — When to Use Which

| | Qualitative | Quantitative |
|---|---|---|
| **Speed** | Fast — can assess many risks quickly | Slower — requires gathering real data |
| **Data required** | Minimal — relies on expert judgment | Significant — needs loss estimates, occurrence rates |
| **Best for** | Broad prioritization across many risks; early-stage programs | High-stakes risks where a budget decision needs justification |
| **Communicates well to** | Broad audiences, quick workshop discussions | Finance teams, executives, anyone deciding on spending |
| **Weakness** | Somewhat subjective — different people may rate the same risk differently | Time-consuming, and the numbers are only as good as the estimates feeding them |

**In practice, most mature organizations do both.** They use qualitative assessment (a quick heat map) to sort a large list of risks and figure out which ones deserve deeper attention, and then apply quantitative analysis (like an ALE calculation) only to the highest-priority risks, where the extra effort of gathering real numbers is worth it.

> **In plain terms:** Think of qualitative assessment as a quick triage in the ER — sorting patients into urgent, moderate, and low-priority — and quantitative assessment as the detailed diagnostic tests run afterward, only on the patients who were flagged as urgent enough to deserve them.

---

## Inherent Risk vs. Residual Risk

One more essential distinction before we move on: risk should almost always be assessed **twice** — once before any controls are considered, and once after.

| Term | Definition |
|---|---|
| **Inherent Risk** | The level of risk that exists *before* any controls are applied — the raw, unmitigated exposure |
| **Residual Risk** | The level of risk that *remains* after existing controls have been applied |

### Example
Inherent risk of an unencrypted database containing customer data being stolen might be rated **High**. After implementing encryption, access controls, and monitoring, the residual risk — what's actually left over — might drop to **Low**. The gap between inherent and residual risk shows exactly how much value the existing controls are providing, and residual risk is what should ultimately be compared against the organization's risk appetite (introduced in Room 1's Introduction to GRC material) to decide whether further action is needed.

> **In plain terms:** Inherent risk asks "how bad would this be with no protection at all?" Residual risk asks "how bad is this, realistically, given the protections we already have in place?" Decisions about whether more action is needed should almost always be based on residual risk, not inherent risk.

---

## Common Mistakes

- **Assessing only inherent risk and ignoring existing controls.** This makes every risk look artificially alarming and can lead to wasted effort "fixing" something that's already well-controlled.
- **Assessing only residual risk and forgetting inherent risk.** This hides how much value current controls are actually providing, making it hard to justify their continued cost, or to notice if a control quietly stopped working.
- **Letting one person's gut feeling stand in for a rating scale.** Without a shared, documented scale (like the 1–5 tables above), the same risk can get rated completely differently depending on who happens to be scoring it that day.
- **Jumping straight to quantitative analysis for every risk.** Building a detailed ALE calculation for a minor, low-priority risk wastes time that should go toward the handful of risks that actually warrant that level of rigor.
- **Treating a heat map as if it were precise.** A qualitative "High" rating is a useful signal, not an exact scientific measurement — treating it as more precise than it is can lead to false confidence in prioritization decisions.

---

## Case Study: The Risk That Was Rated Wrong

**Background:** A logistics company rated a specific vendor risk — "our shipment tracking vendor could have a prolonged system outage" — as **Medium** priority in its qualitative heat map, based on a quick group discussion with no deeper data.

**What went wrong:**
- The rating was based purely on gut feeling in a workshop; nobody checked the vendor's actual historical uptime record or contract terms.
- Six months later, the vendor did have a multi-day outage — and a quick post-incident review of the vendor's public status page revealed they had experienced *three* significant outages in the prior two years, information that was publicly available the whole time.
- Had this historical data been reviewed during assessment, the likelihood rating would almost certainly have been scored much higher, likely pushing the risk into "High" or "Critical" territory and triggering a business continuity plan that didn't exist.

**Root cause (in assessment terms):** The organization relied purely on qualitative judgment for a risk significant enough to deserve at least a basic quantitative check — in this case, simply reviewing the vendor's own public incident history, which would have taken under an hour.

**Remediation:**
1. Introduced a rule that any vendor risk rated Medium or above must include a basic review of the vendor's historical incident and uptime data before the rating is finalized
2. Recalculated an ALE estimate for this specific risk, factoring in the vendor's real historical outage frequency, which justified funding a backup tracking system
3. Built a lightweight quantitative "gut check" step into the qualitative workshop process, so ratings aren't based purely on unverified opinion for anything above Low priority

**Lesson:** Qualitative assessment is a fast, useful starting point — but for risks that could be significant, even a small amount of real data can dramatically change (and correct) the rating. Speed shouldn't come at the cost of checking easily available facts.

---

## Key Terminology

| Term | Definition |
|---|---|
| **Risk Assessment** | The process of evaluating a risk's likelihood and impact to determine its priority |
| **Likelihood (Probability)** | How likely a risk event is to actually occur |
| **Impact (Consequence)** | How severe the effect would be if the risk event occurred |
| **Qualitative Assessment** | Rating risk using descriptive scales (e.g., Low/Medium/High) rather than precise numbers |
| **Quantitative Assessment** | Rating risk using actual numerical or financial estimates |
| **Risk Matrix (Heat Map)** | A grid that visually plots risks by likelihood and impact to show relative priority |
| **SLE (Single Loss Expectancy)** | The estimated financial loss from a single occurrence of a risk event |
| **ARO (Annualized Rate of Occurrence)** | The estimated number of times a risk event is expected to occur per year |
| **ALE (Annualized Loss Expectancy)** | SLE × ARO — the estimated average annual financial loss from a risk |
| **Inherent Risk** | The level of risk before any controls are applied |
| **Residual Risk** | The level of risk remaining after existing controls are applied |

---

## Summary

- **Risk assessment** turns an unordered list of identified risks into a prioritized one, by scoring each risk's **likelihood** and **impact**.
- **Qualitative assessment** uses descriptive scales (like a 1–5 heat map) — fast, intuitive, and a good starting point, but somewhat subjective.
- **Quantitative assessment** uses real numbers, commonly via the **ALE formula (SLE × ARO)**, producing dollar-based estimates that can be directly compared to the cost of a proposed control.
- Most mature organizations use **both**: qualitative assessment to triage a large list quickly, and quantitative analysis for the smaller set of high-priority risks that justify deeper analysis.
- Every risk should generally be assessed for both **inherent risk** (before controls) and **residual risk** (after controls) — decisions about further action should be based on residual risk.
- A risk rating is only as good as the information behind it — as the case study showed, skipping easily available data (like a vendor's public incident history) can produce a dangerously wrong priority level.

---

## Self-Check: Can You Explain It?

Without looking back at the text, try to calculate this out loud: *"A risk has a Single Loss Expectancy of $200,000 and is expected to occur once every 5 years. What is the Annualized Loss Expectancy? If a control costing $30,000 per year would cut the likelihood in half, is it worth the investment?"* If you can walk through the calculation and reach a clear yes/no conclusion, you've understood the core practical skill of this room.

---

## Review Questions

1. Using the ship captain analogy, explain the difference between "likelihood" and "impact" in your own words.
2. What is the main advantage of qualitative risk assessment, and what is its main weakness?
3. Write out the ALE formula and explain what each component (SLE, ARO) represents.
4. A risk has an SLE of $1,000,000 and an ARO of 0.1. Calculate the ALE. Would a control costing $150,000/year that eliminates the risk entirely be worth it?
5. Explain the difference between inherent risk and residual risk, and why decisions should usually be based on residual risk.
6. Why do most mature organizations use both qualitative and quantitative assessment, rather than choosing just one?
7. In the case study, what specific piece of easily available information would have changed the risk's rating, and why wasn't it used?
8. What is a risk matrix (heat map), and what is its main value, given that it isn't perfectly precise?
9. Explain why assessing only residual risk (and never inherent risk) can hide important information from decision-makers.
10. Why might a CFO find a quantitative ALE-based argument more persuasive than a qualitative "this is a High risk" statement alone?

---

*This document is Room 2 of Module 2 in the GRC Fundamentals learning path. It builds directly on Room 1 (Risk Identification) and is a prerequisite for Room 3 (Building a Risk Register), where identified and assessed risks are formally tracked and managed over time.*
