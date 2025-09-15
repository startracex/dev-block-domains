---
layout: note
title: "Block rules"
---

This project has collected websites that frequently appear when searching for
commonly used keywords in development. Some settings on these websites may
hinder development learning, troubleshooting, or bring a poor experience, so it
is necessary to block them.

The domain names listed in this chapter may meet any of the following
conditions:

- Contain a large number of advertisements, login pop - ups, etc. that
  significantly block content.
- Contain a large amount of content that requires payment, login, or other
  operations to view.
- Contain a large number of crawled articles or incorrect content.
- Contain promotional content.
- Basic functions such as copy restriction and full-text viewing are missing.

If you are the owner of these websites or find that the websites have improved
the above - mentioned issues, you can initiate a merge request to remove the
specified domains from domains.json. Each top - level domain should be passed
only once.

If you find new websites that meet the blocking rules, you can add the domain
names to domains.json and initiate a merge request. When adding, please
accurately confirm the sub - domains to avoid mistakenly adding other
potentially useful domain names. When there are too many domain names, you can
add their top - level domains.
