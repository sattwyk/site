---
title: "coursera deadline tracker"
description: "coursera deadlines, delivered to telegram"
date: "Feb 23 2026"
repoURL: "https://github.com/sattwyk/coursera-deadline-tracker"
---

i built this because i kept having to check coursera for deadlines. its notifications weren't reliable enough for keeping track of several courses at once.

it's a browser extension and a telegram bot. the extension uses your coursera session to read the degree dashboard and sync deadlines. in telegram, you can see what's upcoming, pending, or overdue, jump to a course, and request a fresh sync.

the extension uses wxt. a cloudflare worker handles the API and telegram webhooks, and D1 stores the deadline state.

i use it for my own degree courses. it turns out i'd rather check a telegram message than open the dashboard again.
