---
title: "mailmon"
description: "gmail sync infrastructure for keeping mailbox state correct"
date: "Jul 30 2026"
repoURL: "https://github.com/mailmon-dev/mailmon-old"
---

> this project is currently not maintained. i've moved on to building [adversary](https://github.com/sattwyk/adversary), but i want to come back to mailmon at some point and probably rewrite the core in rust.

mailmon started as an ai email assistant, but over time the part i found more interesting was everything underneath it: keeping a local view of a gmail mailbox correct while notifications can be duplicated, delayed or missed and workers can fail halfway through doing something.

the system treats gmail push notifications as wake-up signals rather than the source of truth. actual changes are recovered from gmail history, and the history cursor only advances after the corresponding mailbox state has been committed.

a lot of the work ended up being around fairly boring but important failure cases: concurrent sync workers, retries, duplicate events, partial failures, expired history cursors and making sure processing the same thing twice doesn't corrupt state.

mailmon also has an append-only event log and webhook delivery built around at-least-once semantics, with replay and consumer-side deduplication instead of pretending exactly-once delivery exists.

the current implementation uses postgres for durable state, lease-based locking for synchronization, encrypted oauth credentials and gcp for asynchronous work.

it started as a product idea, but ended up being one of the projects that pushed me much deeper into distributed systems and correctness. if i revisit it, i'd like to strip it down further and rewrite the synchronization core in rust.
