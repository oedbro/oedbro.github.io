---
layout: post
title: "IT vs OT Security"
date:   2022-02-26
categories: ["Architecture"]
tags: ["Security", "Architecture", "OT"]
author: ["Oskar Edbro"]
---

When people are talking about cybersecurity they are often talking about IT-security, but there ara also OT-security. But what are the difference? Most people in tech know what IT is, the tech that handles information. The focus is on handling data, collecting, modifying or providing it. OT (Operational Technology) on the other hand is focused on the tech that impacts the real world. An example could be a control-system that manages the indoor climate in an office. An easy example are the smart homes, where IoT devices control the the house.

But what are the differences when it comes to how to secure OT? The main thing is to be aware of the system that shall be secured. Just as with IT security it is important to classify the system, but not only classifying the information. Instead the classification should include the risk and the impacts of an attack, both for the information and the operations in the real world. An electronic locking system could both be attacked to gain information (whom is entering and exiting), locking people in or out (disturbing the business), or unlocking (enabling unauthorized access).

Due to the added impacts of an attack OT has, there is an extra focus on safety. When downtime can result in the loss of human life, everything gets a deeper meaning. This also shows in the patch cykels. Where a slow IT system can be patched once a quarter or year, OT can be patched every ten years. When any downtime results in the industry needing to be stopped, or have disastrous consequences, the stability is rated much higher than updates. Instead of patching a vulnerability it is easier to just add some kind of protection minimizing its exposure.   

In the end the difference between IT and OT security are not so different. Even though the tech often is different, and the impact if an error occur is more severe, the basic principles of IT security is still applicable. It is still important to validate everything (input, users, authorization etc.), ensuring access control and so on. This is especially true in the development process of OT, since the update schedule is so much longer, meaning that we can draw further lessons from old, slow development cycles. Looking forward OT is standing in front of the challenge of allowing updates without risking devastating errors.   

