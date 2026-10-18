---
title: Spectre – Passive Network Intelligence
summary: A passive network-monitoring platform in Rust that maps every device on a network segment and fingerprints scanners and attackers in real time, without sending a single packet.
year: '2026'
context: Personal project · ~30k lines · 170 commits
cover: ../../assets/projects/spectre.svg
tags: [Rust, Networking, Security, React, Docker]
highlights:
  - Rust daemon (libpcap, axum, SQLite) with a live React + D3 mesh-graph dashboard
  - Passive OS, JA4 TLS, DNS/DHCP and service fingerprinting from traffic already on the wire
  - 11 research analytics on scanner behaviour, from operator rhythm to zero-day recon early warning
  - Ships as Docker images, a single binary, and a zero-egress Raspberry Pi sensor
featured: true
order: 4
---

## What it is

Spectre watches the traffic on a network segment and builds a live, queryable picture of
every device it sees: who they are, what they run, and who they talk to. It surfaces
anomalies in real time on a force-directed mesh graph. It is **strictly passive**: it never
scans, probes or injects packets, so it is invisible on the network it monitors.

## What it observes

For every device, inferred only from frames already on the wire:

- MAC address and vendor, first/last seen and total traffic
- **OS fingerprint** from the SYN's TTL, TCP window and option layout
- **JA4 TLS client fingerprint**, computed from scratch from the ClientHello
- Open services inferred from handshake direction, plus DNS, mDNS and DHCP hostnames
- External peers with byte counts, enriched with reverse DNS, geo/ASN and optional reputation lookups
- Automatic tags for known crawlers and scanners (Googlebot, Shodan, Censys, …)

## Research analytics

On an internet-facing sensor, Spectre goes beyond "who scanned me" to characterise *how*:
operator duty cycles and time zones, fingerprint stability across IP rotation, coordinated
campaigns that split port ranges, middlebox and tunnel detection from TTL and MSS clamping,
tool build classes (ZMap, Masscan, Nmap templates), honeypot-avoidance behaviour, retry
strategies after resets, and early warning for novel, accelerating probe clusters.

## Architecture

| Component | Stack | Role |
| --- | --- | --- |
| `spectre-daemon` | Rust, libpcap, axum, SQLite | Captures and parses packets, tracks devices, serves the API and WebSocket |
| `spectre-ui` | React, Vite, D3, Tailwind | Live mesh graph, device list and detail, alert feed |
| Packaging | Docker, GHCR, systemd | One-command install, VPS deployment, single portable binary |

There is also a **barebones build** for a Raspberry Pi that compiles out every outbound
lookup, for a truly silent, zero-egress sensor, and an opt-in federation mode for joining a
sensor network.
