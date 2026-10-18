---
title: antirai – Mirai Botnet Detector
summary: A Python network monitor and scanner that detects Mirai-infected IoT devices on your own network from their traffic, and alerts you.
year: '2026'
context: Personal project · private repository
tags: [Python, Networking, Security, IoT, Packet analysis]
highlights:
  - Eight passive detectors, from Mirai's SYN fingerprint to its C2 protocol and floods
  - Own byte-level packet decoder, cross-checked against scapy and fuzzed with 100k mutated frames
  - Terminal UI, headless monitor and pcap analysis, with 86 tests in CI on Linux and macOS
featured: false
order: 12
---

## What it is

Mirai infects IoT devices with default telnet passwords and uses them for scanning and
floods. antirai watches network traffic for that behaviour and flags the infected device by IP
and MAC. It can monitor live traffic, analyse pcap files, or actively scan a network you own.

## What it detects

- **SYN fingerprint:** Mirai's scanner sets the TCP sequence number to the target IP, which real TCP stacks never do.
- **Propagation scans** on telnet and IoT ports, the **bot-to-C2 protocol** and connections to the credential **report server**.
- **Cleartext infection sessions:** BusyBox probes, loader downloads and Mirai's default-password list.
- **Attacks:** SYN, ACK, UDP, GRE and ICMP floods, and random-subdomain DNS floods.
- **Active scan:** open telnet, ADB, TR-069 and similar ports, and management ports that disappeared while the host stayed up, since Mirai kills telnetd and sshd after infection. The scanner never tries to log in and refuses networks outside the configured LAN ranges.

## Alerts

Alerts go to the console and a JSONL log, and above a set severity to macOS notifications, a
Slack or Discord webhook, or email. Alert text is sanitised, since DNS names and payloads are
attacker-controlled.

## Tech

Python with scapy and Textual. Frames are decoded straight from bytes, about 14 times faster
than through scapy, which the README puts at 100–150k packets per second on a laptop core.
About 2,600 lines plus a 950-line test suite that checks a synthetic infection pcap triggers
every detector and a busy benign pcap stays alert-free.
