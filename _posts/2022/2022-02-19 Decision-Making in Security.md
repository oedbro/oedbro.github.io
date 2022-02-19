---
layout: post
title: "Decision-Making in Security"
date:   2022-02-19
categories: ["Architecture"]
tags: ["Security", "Architecture", "Decision-Making"]
author: ["Oskar Edbro"]
---

As in all fields there are lots of decisions that has to be taken in Cyber Security. But how can we maximise our chances to take the correct decisions? This question has many answers, but from my experience many of them boil down to information. To make the correct decision one needs to make an informed decision. 

But what information is it that is needed, and how can we gather it efficiently? This depends on the decision to be taken, but let's try to boil it down to some general guidelines that can be applied to all decisions. The first step is to split the information into two categories, internal and external. The external information is what usually comes from Cyber Threat Intelligence. This can answer questions that are generalized outside the own organisation, such as *"What attack vectors are most commonly used to by attackers to gain a foothold in organisations?"* How to find the answers of these questions is an area of it's own, so I'm not going to dig deep into it, instead we leave the answers to this kind of questions to external reports published by researchers focusing in the area. A common example of this is OWASP top 10 that shows the most common attacks used to attack web applications. There is however a secondary kind of external information needed to make good decisions in, and that is in regards to the legal or regulatory requirements. These impact all areas of the business, including cyber security.

Based on the external intelligence it is time to look inwards. What intelligence can we find internally, and how do we use it. Here we once more need to figure out what the end goal is. After that we need to ask the correct questions. The answers to the questions are often distributed among products or departments, and therefore there can be lots of data collected. However data is not everything, you need to interpret the data to gain insights that are applicable to the task at hand. 

Let's look at an example, were in our system is there a need for further investments to increase our overall security posture. We begin by looking externally at what are the most common attack vector for malicious actors and after some research we find that outdated software with known vulnerabilities is the biggest risk. Based on this we need to ask internal questions. The first question to ask is do we know what known vulnerabilities exists in our environment. Therefore we go to all system owners to verify that they scan their systems with the vulnerability scanner. If not this is a good place to start. If not, we move forward and look at the findings for each system. Depending on our focus we can ask different questions:

1. Which systems has the most risks?
2. Which systems has the most critical risks?
3. Which systems have a negative trend, gaining more vulnerabilities over time?

Based on the question we wish to focus on we can make a decision on where to invest. 

One note however, whatever we chose we have to remember that the reason for measuring is making good decisions to improve security. We need to ensure that everyone has what they need to reach the goals, not to blame the ones that do not reach them. This is true for everyone, not only in security, but for measuring everything. And in this context the end goal is to make good decisions. 

