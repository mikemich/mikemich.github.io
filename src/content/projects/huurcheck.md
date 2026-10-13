---
title: Huurcheck – Dutch Rent Checker
summary: An open-source Rust engine that calculates the legal maximum rent for Dutch homes with the official points system (WWS), so tenants can see whether they overpay.
year: '2026'
context: Personal project · in development · open source (AGPL-3.0)
tags: [Rust, Civic tech, Rules engine, Testing]
highlights:
  - Pure, side-effect-free rules engine with year-versioned parameters
  - Every rule cites its official source; official Huurcommissie cases act as test oracles
  - Money handled as integer cents, all text in Dutch and English, no tracking
order: 9
---

## The problem

In the Netherlands the maximum legal rent of a home follows a points system (the WWS), but the
rules are spread across policy documents and change every January and July. Many tenants pay
more than they legally should without knowing it.

## Approach

- **Correctness first:** rules come only from official sources (Huurcommissie policy books,
  wetten.nl, rijksoverheid.nl), and every rule in the code cites its document, section and version date.
- **Rust workspace:** a pure rules engine with no I/O, separate modules for self-contained homes
  and rooms (they use different point systems), year-versioned parameters, a CLI and a web front end.
- **Testing as the oracle:** cases from the official Huurcommissie rent check are fixtures that
  must pass, plus unit tests per rule and property tests for invariants (more m² never lowers the points).
- **Privacy:** nothing about users is stored, and every result states that it is an indication only.
