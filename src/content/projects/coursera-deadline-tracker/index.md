---
title: "coursera deadline tracker"
description: "browser extension + telegram bot for tracking degree deadlines"
date: "Feb 23 2026"
repoURL: "https://github.com/sattwyk/coursera-deadline-tracker"
---

a browser extension and telegram bot for tracking coursera degree deadlines without constantly checking the platform manually. built this because coursera's native notifications aren't reliable enough when you're juggling multiple courses.

the extension captures your coursera session and syncs deadlines to a telegram bot. you get filtered views (upcoming, pending, overdue), inline buttons for quick navigation, and on-demand syncs. no manual deadline tracking in spreadsheets or setting calendar reminders.

built with wxt for the chrome extension, cloudflare workers for the backend api, and d1 (cloudflare's sqlite) for persistence. the extension reads your degree dashboard page and sends structured deadline data to the worker, which handles telegram webhook integration and deadline state management.

actively using this for my degree courses. turns out telegram is a better deadline management interface than coursera's actual dashboard.
