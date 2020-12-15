### ING Creatives: Your place to learn

![Results page](https://aaspinwall.com/static/9fe42c1717849ef897fd3170a32509e6/80c60/screen.webp)

# Description

Ing creatives is an e-learning platform that provides professional resources in areas ranging from branding, design, product design, UI/UX, marketing, to advertising and social media, among others.

# Project Purpose and Goal

The CEO’s main concern was the speed of the original site. It was usually taking about 8-12 seconds to show the content. This meant that any social media campaign would likely fail, as users would leave the site before it even loaded. **As google puts it “Two seconds is the threshold for ecommerce website acceptability. At Google, we aim for under a half-second.”** Once that was agreed upon, I set my goal to prioritize speed.

# Web Stack and Explanation

I used Gatsby as my static page generator to ensure that the pages would load as fast as possible. I also chose this technology because it’s based on React, this gave me flexibility to use components that I had been working on previously. **I built a markdown based content management system for the team to add and modify content easily.** I deployed it to Netlify because it offers an open source CMS and admin solutions out of the box. Finally, I implemented Stripe for payments using their Nodejs API. **Since I wanted to avoid deploying a server, I added a serverless lambda function that talked to the Stripe API.**

Read more about this project [here](https://aaspinwall.com/projects/ing/overview/)

_Please note that this code served as a proof of concept for the website and was open sourced. The production code is not available publicly._
