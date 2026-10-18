---
title: Riffwise – Song Analysis and Practice App
summary: A web app that splits a song into instruments and detects its chords, key, tempo, meter and drums, then turns it into a practice session with loops, tabs and lyrics.
year: '2026'
context: Personal project · private repository
tags: [Python, FastAPI, PyTorch, React, TypeScript, Web Audio, MIR]
highlights:
  - Stem separation, beat, key, chord, drum and lyrics analysis in one pipeline
  - 'Benchmarked on 250 annotated GTZAN clips: 0.84 beat F-measure, 94% time signature'
  - Multi-stem player on one sample-accurate Web Audio clock, deployable as a Docker image
featured: false
order: 11
---

## What it is

You upload a track and Riffwise separates the instruments, finds the chords, key, tempo and
meter, and builds a practice view around it: loops, slow-down without pitch change, transposing,
chord diagrams, tabs and lyrics lined up with the vocals.

## How it works

- **Stems:** Demucs splits the mix into six parts, each with its own fader, pan and EQ.
- **Beats and meter:** the Beat This network finds beats and bar starts; the time signature comes from beats per bar and whether each beat splits in two or three.
- **Chords:** beat-synchronous chroma from the harmonic stems, combined with note activations, matched against chord templates with a key prior and Viterbi smoothing.
- **Key:** the S-KEY network combined with chord evidence such as cadences into the tonic.
- **Tabs:** note transcription followed by a fingering search that minimises hand movement.
- **Drums:** onsets on the drum stem classified by frequency band, plus swing and groove style.

## Accuracy

Benchmark scripts run the full app on 250 GTZAN clips across 10 genres with published human
annotations: tempo is exact on 78% (91% allowing double or half time), beats reach an F-measure
of 0.84, time signature is right on 94% and key on 68%. Steady-groove genres score highest;
classical is hardest. Chords on real recordings have not been measured yet.

## Tech

Python backend with FastAPI and PyTorch, React and TypeScript frontend with Web Audio. About
2,100 lines of backend, 1,700 of benchmarks and 8,200 of TypeScript frontend. A Dockerfile builds a public
upload-only mode with per-browser libraries and automatic deletion after 24 hours.
