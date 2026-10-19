---
title: Triode – Desktop Client for YouTube Music
summary: An Electron desktop app for macOS and Windows that adds a Web Audio effects and EQ chain, headphone correction, karaoke, live meters, synced lyrics and a phone remote to YouTube Music.
year: '2026'
context: Personal project · unofficial, not affiliated with YouTube
tags: [JavaScript, Electron, Web Audio, DSP, Desktop app]
highlights:
  - Audio chain of RBJ biquad filters, a 10-band EQ, convolution reverb and an LFO panner in Web Audio
  - Mid/side karaoke filter that detects mono recordings and leaves them alone
  - Headphone correction from AutoEq profiles, parsed from Equalizer APO format
repo: https://github.com/mikemich/triode
featured: false
order: 26
---

## What it is

Triode loads the official YouTube Music website in a desktop window and adds features on top:
sound modes such as slowed + reverb and nightcore, an equaliser, karaoke, time-synced lyrics,
five visual themes, a mini player, local listening stats and a phone remote.

## Audio processing

The page's `<video>` element is routed into a Web Audio graph:

- **Headphone correction:** a preamp and IIR biquad filters built from RBJ cookbook coefficients, using profiles for more than 6,000 headphones from AutoEq or any pasted Equalizer APO profile. The response curve is drawn in the app.
- **EQ and effects:** ten biquad bands with presets, high- and low-pass filters, a stereo panner swept by an LFO for 8D audio, a dry and convolution-reverb mix with generated impulse responses, and playback-rate changes for slowed and nightcore modes.
- **Karaoke:** the lead vocal usually sits in the centre, so the filter keeps the side signal (L − R) and adds back the low end of the mid signal through a 24 dB/octave low-pass at 120 Hz. Analyser taps on mid and side detect mono recordings, where the filter would remove everything, and switch it off for that song.
- **Meters:** a log-frequency spectrum in dBFS with peak hold, a goniometer and a stereo correlation meter.
- **Smart fades:** fades in and out of each song and skips long silent endings, based on the measured level.

## Other parts

- Lyrics from LRCLIB with an LRC parser and a sync nudge
- A phone remote and a "listening room" served on the local network over HTTP and Server-Sent Events. Guests scan a QR code and can request songs, with per-device rate limits
- A mini player, global hotkeys, media keys, tray and dock menus, Discord presence and an update check against GitHub releases

## Tech

Electron and plain JavaScript, about 5,300 lines. The injected UI is built through DOM calls
inside a closed shadow DOM, because YouTube Music enforces Trusted Types. A GitHub Actions
workflow syntax-checks the sources and builds a universal macOS DMG and Windows installers.
Screenshots are taken by running the real app against a stand-in player page with made-up songs.
