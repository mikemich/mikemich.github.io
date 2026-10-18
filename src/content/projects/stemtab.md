---
title: stemtab – Audio to Guitar Tablature
summary: A CPU-only Python tool that turns an isolated guitar, bass or ukulele recording into playable tablature, evaluated against string-level ground truth.
year: '2026'
context: Personal project · open source (Apache-2.0)
tags: [Python, DSP, Music transcription, ONNX, Optimisation]
highlights:
  - Beam-search fingering model that picks the string and fret a player would actually use
  - 'Held-out GuitarSet player: tab F1 0.609 vs 0.254 for the stock model with lowest-fret assignment'
  - Exports ASCII tab, MusicXML with a real TAB staff, MIDI and JSON
repo: https://github.com/mikemich/stemtab
featured: true
order: 9
---

## What it is

stemtab takes a separated instrument stem (for example the guitar track from a stem splitter)
and writes it out as tablature. It runs on a CPU; the acoustic model is 230 KB.

## How it works

1. **Tuning check:** estimates the recording's offset from A440 and resamples it back to pitch if it is more than 20 cents off.
2. **Acoustic model:** Spotify's Basic Pitch network run through onnxruntime, with the windowing reimplemented so frames fall on an exactly uniform grid.
3. **Note decoder:** clamps to the instrument's range, suppresses octave and twelfth ghosts and caps polyphony at the number of strings.
4. **Fingering search:** the main part. A beam search over the whole performance models a fretting hand that only shifts when it has to, stretch and barre limits, ringing strings and a position prior learned from GuitarSet. Weights were fitted by coordinate descent.
5. **Techniques and rhythm:** hammer-ons, pull-offs, slides, bends and vibrato, then beat tracking and a 16th or triplet grid per beat.

## Evaluation

Everything was tuned on GuitarSet players 00–04 and measured on player 05, who was held out.
stemtab reaches a note F1 of 0.828 and a tab F1 (correct string and fret) of 0.609. Given the
true notes, the fingering search puts 80.3% of them on the string the player used, against
31.6% for lowest-fret assignment. The README lists the caveats: Basic Pitch saw GuitarSet in
training, and bass and ukulele were only checked on synthetic audio.

## Tech

Python with numpy, scipy, librosa and onnxruntime. About 2,200 lines, with tests that use
Karplus-Strong synthesis to check chord shapes, drop-D detection and the CLI.
