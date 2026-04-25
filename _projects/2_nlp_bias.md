---
layout: page
title: Bias Toward Languages Studied in NLP Peer Reviews
description: First systematic study of language-of-study bias in NLP peer review, finding that non-English papers face bias rates roughly 40× higher than English-only ones.
importance: 2
category: work
github: https://github.com/GGLAB-KU/LOBSTER
related_publications: false
---

**Jul 2025 – Apr 2026** | Koç University | Paper: [arXiv:2604.07119](https://arxiv.org/abs/2604.07119) | Code & data: [GGLAB-KU/LOBSTER](https://github.com/GGLAB-KU/LOBSTER)

- First systematic characterization of *language-of-study (LoS) bias* — when reviewers evaluate a paper based on the language(s) it studies rather than its scientific merit.
- Released **LOBSTER**, a human-annotated dataset of 534 review segments labeled for negative bias, positive bias, or no bias.
- Benchmarked four LLMs as bias detectors; the best (Gemini 3.1 Pro) reaches **87.37 macro F1** on 3-way classification.
- Applied the detector to **15,645 reviews across six NLP venues** (EMNLP 2023/24/25, ACL 2025, ARR 2024, COLING/NAACL 2025).
- Identified four subcategories of negative bias; *demanding unjustified cross-lingual generalization* dominates (~62% of negative-bias cases).

### Bias rates by paper language scope

| Language scope             | Bias rate |
| -------------------------- | --------- |
| English-only               | 0.37%     |
| Single non-English (avg.)  | 14.79%    |
| Chinese                    | 10.50%    |
| Specified multilingual     | 4.18%     |
| Unspecified multilingual   | 0.34%     |
| Language-agnostic          | 0.30%     |

Non-English papers face bias rates **roughly 40× higher** than English-only ones, and negative bias consistently outweighs positive bias across venues.
