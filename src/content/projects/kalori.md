---
title: Kalori – Greek Calorie Tracker
summary: A Greek-first calorie-tracking app for iOS and Android. Free, no ads, no account, and all data stays on the phone.
year: '2026'
context: Personal project · preparing App Store release
cover: ../../assets/projects/kalori.png
tags: [React Native, Expo, TypeScript, Mobile, Open Food Facts]
highlights:
  - Barcode scanning with Open Food Facts lookup, and contributing missing products back
  - 130 curated Greek foods searchable in Greek, Greeklish and English
  - Evidence-based daily score and personal goals (Mifflin–St Jeor) with safety floors
featured: true
order: 3
---

## Why

Most calorie trackers don't know Greek food, want an account, and push subscriptions. Kalori is
Greek-first, completely free and private: no ads, no purchases, no login, and every entry stays
on the device.

## Features

- **Barcode scan** → Open Food Facts lookup. If a product is missing, you can add it for everyone,
  with a nutrition-label text parser and sanity checks.
- **Search** 130 curated Greek dishes and packaged products sold in Greece, in Greek, Greeklish or
  English, with categories, a fasting filter, favourites and recents.
- **Real-life portions**: olive-oil choice for λαδερά, "like last time", quick kcal entry.
- **Daily score** weighted across calories, protein, balance, sugars and consistency. It never
  rewards eating too little, and it can be hidden.
- **Personal goal** (Mifflin–St Jeor with safety floors), goal history, and a weight log with a 7-day trend.
- Backup and restore, evening reminder, dark mode, Greek and English.

## Tech

Expo (React Native) and TypeScript with Expo Router, one codebase for iOS, Android and an
installable offline web app. Includes logic tests, type-checking and linting.
