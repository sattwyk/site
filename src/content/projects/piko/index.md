---
title: "piko"
description: "simple reverse proxy to bypass CORS"
date: "Jan 22 2026"
repoURL: "https://github.com/sattwyk/piko"
---

a lightweight reverse proxy for bypassing CORS restrictions in browser environments. sometimes you just need to make a request without fighting preflight checks.

built with nitro so it deploys anywhere—cloudflare workers, aws lambda, netlify edge, or plain node. handles protected header rewrites (X-\* mappings), always allows cross-origin requests, and includes optional turnstile integration to prevent abuse.

useful for quick prototypes or when you need a simple proxy without spinning up a full backend. the jwt flow lets you verify the client once with turnstile, then reuse the token for subsequent requests.
