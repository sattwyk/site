---
title: "piko"
description: "a small reverse proxy for browser requests"
date: "Jan 22 2026"
repoURL: "https://github.com/sattwyk/piko"
---

piko is a small reverse proxy for browser requests that run into CORS restrictions. the browser talks to the proxy, which forwards the request and returns a response with cross-origin access enabled.

it's built with nitro, with deployment options including cloudflare workers, aws lambda, netlify edge, and node. it supports protected-header rewrites through X-\* mappings and optional turnstile verification.

with turnstile enabled, a client can verify once and reuse a JWT for later requests. useful for a prototype that needs to make requests without building a whole backend around them.
