---
title: Echolocal – Offline Music Fingerprinting
summary: A Shazam-style audio fingerprinting engine in Rust that indexes your own music library and identifies songs from a file or the microphone, fully offline.
year: '2026'
context: Personal project · private repository
tags: [Rust, DSP, FFT, Audio fingerprinting, SQLite]
highlights:
  - From-scratch implementation of Wang's landmark and combinatorial-hash algorithm
  - STFT, spectral peak picking and 32-bit anchor–target hashes stored in SQLite
  - Identifies songs from files or live microphone input with a confidence score
featured: true
order: 10
---

## What it is

Echolocal builds an acoustic fingerprint database from a local music library and identifies
songs from a file or from the microphone. Nothing leaves the machine: the database is a plain
SQLite file.

## Signal chain

It follows Avery Wang's 2003 paper, *An Industrial Strength Audio Search Algorithm*:

- **Decode and resample:** mp3, flac, ogg, wav and m4a are decoded with symphonia and resampled to 11,025 Hz mono, keeping the low and mid band that survives room acoustics and compression.
- **Spectrogram:** a short-time Fourier transform with 512-sample Hann windows and 50% overlap.
- **Peak picking:** local maxima that stand out from their neighbourhood and clear an adaptive threshold, up to five per frame.
- **Hashing:** each peak is paired with up to five later peaks in a 2-second target zone, and each pair is packed into a 32-bit hash of both frequencies and the time gap.
- **Matching:** every hash hit votes for a time offset. A real match is a tall cluster of hits that share the same offset in one track.

The confidence score combines how far the winner leads the runner-up with how many hashes aligned.

## Features

- `index` scans a library incrementally and recognises moved files by a BLAKE3 content hash
- `identify` for files, `listen` for the microphone in 5-second chunks, `stats` for the database

## Tech

Rust with rustfft, symphonia, cpal and rusqlite. About 2,200 lines, with unit tests for the DSP
steps and end-to-end tests that synthesise songs, index them and identify clipped excerpts. CI
runs on Linux and macOS, and tagged releases build macOS binaries.
