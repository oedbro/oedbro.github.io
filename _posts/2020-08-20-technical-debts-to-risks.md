---
layout: post
title: a Journey from Technical Debts to Risks
date:   2020-08-20
categories: ["Architecture"]
tags: ["Risk", "Linkedin Article", "Security", "Architecture"]
---
Technical debt has become a common term when discussing the quality and maintainability of code. There are a lot of definitions of the debt, but they all have some things in common, that debt are the things in the solution that should be fixed but haven't been fixed yet. This could include everything from lack of documentation or test coverage to code complexity. The debt might not have been there from the beginning, but rather been introduce while the solution grows. Another common denominator is that the debt will increase the cost of continued development within the solution. This can be seen in several different ways, for example adding a feature to a complex codebase would require more time than adding the same feature to the simple.

So why does not everyone just keep the technical debt low? There are a couple of different reasons, firstly it is a bit more expensive to add a feature neatly (reducing technical debt) than to just add it quick and dirty. This could be a part of a deliberate choice to introduce debt, either due to time constraints or due to the necessity to ship what you got and deal with the consequences. The second way technical debt can be introduced without knowing about it in the first place. The reason for this might be due to lack of research and knowledge, or only seeing the impact of decisions in hindsight.

No matter which of these types, or combinations of types, of debt can be found in a software the main point is that they add to the time it takes to develop in the codebase. It also increases the risk of introducing bugs, due to complexity, lack of automatic test cases, or any of several other reasons. The price of the debt is payed each time a change is made, and if no changes are made there are no payments.

Up until this point the information presented is mostly based on Martin Fowlers blog posts [1, 2], but I think these definitions misses one important part of technical debt, the dependencies. Joab Jackson argues that any dependency, such as libraries or frameworks, adds to the technical debt. By adding a dependency, the codebase often increases much more than needed. In doing so the amount of fluff that you need to understand to work in the codebase increases as well, increasing the time it takes and the risk of bugs being introduced. [3] However I would argue that even if there is debt introduced by third party dependencies, it can easily be worth it to use the dependency. The increase in development time and expertise needed when using dependencies save huge amounts of times in relation to the increased time it takes to maintain. One would have to weigh the technical debt from the dependency, and the debt from implementing the code inhouse to know which is the correct way forward.

However, I would argue that there is another technical debt introduced, the debt of keeping the dependencies up to date. The cost of this maintenance is required throughout the whole lifecycle of the solution, to ensure that no bugs are inherited. In a worst-case scenario these bugs could be security bugs with impact on the solution.

The recurring theme when it comes to security and technical debt is that they are not directly linked. From my experience I conclude that there is not any direct security related technical debt. Instead the technical debt could have one of many impacts. For example, it increases the risk of bugs being introduced. These bugs can be functional or non-functional, usability, or security bugs. Technical debt is a general concept in software development, that can be used to communicate the state of the solution. The impacts of the technical debt are what's explained to the leadership, such as time spent and bugs introduced. The source of the debt on the other hand could be a lack of documentation or complex code, which is what the developers have to live with.

To work with technical debt in a structured, and well documented way one could frame the debt as business risks. For example, the technical debt in the codebase introduce risks such as:

* Lack of automated testcases increase the risk of introducing bugs
* Code complexity may increase cost of introducing a new feature
* Onboarding team members consumes more time than expected due to lack of documentation
* Etc

By handling the debt as business risks, it shows how the technical debt can impact the business, and help prioritising it in relation to other risks. In doing so, technical debt and code neatness can be clearly defined together with environmental, juridical and other risks.

My conclusion is that we should be careful when splitting out different problems, calling them different things and handling them in unique ways. A bug is a bug, it might have functional or security impact, but it's still a bug. They should be prioritised based on their impact, and not be separated out. Risks should be handled in the same way, according to a general process where they can be prioritised and acted upon, regardless of if it has security, cost or other impact.

1. https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
2. https://martinfowler.com/bliki/TechnicalDebt.html
3. https://thenewstack.io/to-reduce-tech-debt-eliminate-dependencies-and-refactoring/