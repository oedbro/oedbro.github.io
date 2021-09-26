---
layout: post
title: Measuring Security, OWASP SAMM
date:   2021-09-26
categories: ["Awareness"]
tags: ["Security", "Risk", "Architecture"]
author: ["Oskar Edbro"]
---

When working with cybersecurity in any development organization it is inevitable that management asks the difficult question. The question that puts us in a very difficult position of grasping the current status of the organizations security efforts. The question I am talking about is as follows, or a version of:

> How far have we come in our work with cybersecurity?

It is an understandable question. We need to see that the time and money put into security are adding value to the business. However assessing the progress in a comparable way is not always easy. As luck would have it there are standards for measuring the maturity level of cybersecurity. One of these models are [OWASP Software Assurance Maturity Model](https://owaspsamm.org/model/), SAMM for short. As it is provided by OWASP it is an open source model that can be used by anyone free of charge, and the results are comparable both over time and between organizations. There are other models that do similar things, but due to the open nature of SAMM it's a good starting point for any organization getting started.

The SAMM model measures 15 security practices in five business areas. Each practice contains two streams, represented by a set of activities and resulting in a maturity level on a scale from 1 - 3. In addition to helping the organization find lowpoints in their work with cybersecurity the activities can give a hint of good next steps. Even though the policy in it self does not specify a way to summarize the scores for each activity, it is possible to summarize the scores into a practice or business area to get a better overview. I've seen other models using [radar charts](https://en.wikipedia.org/wiki/Radar_chart) to display the results, and I think it would be applicable here as well. An example would be to summarize the actions for each practice and then put all 15 practices into the diagram. But which are the practices. In the table below the business areas are the headers, and then the practices are listed below.

| Governance | Design | Implementation | Verification | Operations |
|----|----|----|----|----|
| Strategy & Metrics | Threat Assessment | Secure Build | Architecture Assessment | Incident Management |
| Policy & Compliance | Security Requirements | Secure Deployment | Requirements-driven Testing | Environment Management |
| Education & Guidance | Security Architecture | Defect Management | Security Testing | Operational Management |

To gain enough insight to perform an assessment in accordance to SAMM i recommend reading their [website](https://owaspsamm.org/model/), but to gain some insight into how it is intended to work lets dive all the way down to the questions asked to perform the assessment. Let's look at *Security Architecture* in the business area *Design*. It contains two different streams that are measured, *Architecture Design* and *Technology Management*. 

For *Security Architecture* the first maturity level is about *"Insert\[ing\] consideration of proactive security guidance into the software design process."* In *Architecture Design* this would mean that the teams are trained in basic security principles and how to use them during the design process. To help with assessing if this is achieved SAMM supplies a question, answer alternatives, and quality criteria. This is also true for every other maturity level, stream, and principle. The question in this example is *"Do teams use security principles during design?"* To answer this there are four alternatives:
1. No
1. Yes, for some applications
1. Yes, for at least half of the applications
1. Yes, for most or all of the applications

The quality criteria used to help with answering the question in a correct way are:
> You have an agreed upon checklist of security principles <br>
> You store your checklist in an accessible location <br>
> Relevant stakeholders understand security principles

Overall this model can help an organization measure their maturity in security. For me it is great that it is so detailed and help the organization down to the level of what questions to ask to asses the quality of their implementation. Therefore it can be of great help regardless if the organization is in the beginning of their security journey, or if they have grown more mature.
