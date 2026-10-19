---
title: antirai – Network Infection Detector
summary: A Python network monitor that captures your network's packets and tells you which devices are infected, starting from Mirai botnet detection, with a verdict and evidence for every device.
year: '2026'
context: Personal project · private repository
tags: [Python, Networking, Security, IoT, Packet analysis]
highlights:
  - Detectors for Mirai and its variants, worms, beaconing, cryptojacking, and ARP, DHCP and DNS spoofing
  - Per-device verdict (likely infected, suspicious, exposed, clean) with reasons and pcap evidence
  - Own byte-level packet decoder, cross-checked against scapy and fuzzed with 100k mutated frames
featured: false
order: 12
---

## What it is

antirai started as a detector for Mirai, the botnet that takes over IoT devices through default
telnet passwords. It now also catches other infections and attacks on the local network. Every
device gets a verdict (**likely infected**, **suspicious**, **exposed** or **clean**) with the
reasons and what to do, and when something serious happens the device's packets are saved to a
pcap file as evidence.

It is a defender's tool by design: it listens. It never tries passwords, never exploits anything
and never blocks traffic.

## What it detects

- **Mirai and its variants:** the scanner's SYN fingerprint (the TCP sequence number equals the target IP, which real TCP stacks never do), propagation scans on telnet and IoT ports, the bot-to-C2 protocol, the credential report server, cleartext infection sessions, and the floods a bot runs during an attack.
- **Attacks on the network:** ARP spoofing (critical when the router's IP is claimed), rogue DHCP servers and forged DNS answers, plus new devices with their maker.
- **Any infected device:** worm-style port scans, beaconing to an outside server at near-constant intervals, cryptomining pool traffic, connections to abuse.ch and Spamhaus blocklists, and logins without encryption (reported without ever recording passwords).
- **Weak spots, on request:** an optional scan of your own network for open doors (telnet, ADB, TR-069), risky services, outdated software from service banners, factory-default certificates, UPnP port mapping, and management services that vanished while the device stayed up, since Mirai kills telnetd and sshd after infection.

## Alerts

Alerts go to the terminal UI, a JSONL log and, above a set severity, to desktop notifications, a
Slack or Discord webhook, or email. Alert text is sanitised, since DNS names and payloads are
attacker-controlled.

## dfndr: a dashboard on top

I also built dfndr, a local dashboard that runs antirai as its detection engine and adds checks
of its own on a schedule:

- **This Mac:** firewall, FileVault, SIP, Gatekeeper, risky listening services and unsigned or new startup items
- **Live connections:** every open connection matched against abuse.ch and Spamhaus blocklists
- **Wi-Fi, router and DNS:** weak Wi-Fi encryption, DNS tampering and hijacking, and ARP clones of the router
- **Exposure and updates:** the public IP in Shodan InternetDB, UPnP port forwards and pending security updates

Findings feed a single 0–100 score and a "fix these first" list, and the web UI shows a network map
coloured by risk. Nothing probes a network until you mark it trusted, recognised by the router's MAC
address. The dashboard listens only on 127.0.0.1 and needs a random token. dfndr is about 3,500
lines of Python, with 52 tests.

## Tech

Python with scapy and Textual. Frames are decoded straight from bytes, about 14 times faster than
through scapy. The decoder is cross-checked against scapy on every sample packet type (VLAN,
loopback, SLL, fragments, pcapng) and fuzzed with 100k mutated frames. About 4,900 lines of
Python with a 1,900-line test suite of 188 tests.
