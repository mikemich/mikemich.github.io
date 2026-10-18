---
title: wikid – Offline Wikipedia Reader
summary: A single Rust binary that reads offline Wikipedia and other Kiwix ZIM archives in the terminal or the browser, with its own ZIM parser and fuzzy title search.
year: '2026'
context: Personal project · private repository
tags: [Rust, File formats, TUI, HTTP, Search]
highlights:
  - ZIM archive parser written from the spec, with memory-mapped random access
  - In-memory trigram index for fuzzy title search across several archives at once
  - Terminal UI (ratatui) and a local web server in the same binary
featured: false
order: 24
---

## What it is

ZIM is the archive format Kiwix uses to package Wikipedia, Wiktionary and other sites into one
compressed file. wikid opens these files and gives a clean reading view in the terminal or the
browser, with no internet connection.

## How it works

- **Parser:** reads the header, MIME list, pointer lists and directory entries directly from the spec, with no external ZIM library.
- **Random access:** the file is memory-mapped, so articles are read on demand instead of loading a multi-gigabyte archive into RAM. Clusters are decompressed with zstd or LZMA and kept in a small LRU cache.
- **Search:** a trigram index over titles built at startup. Results are ranked exact match, then prefix, substring and fuzzy overlap, preferring shorter titles and non-redirects.
- **Rendering:** article XHTML is turned into clean text with navigable links for the terminal, or sanitised HTML for the browser.

## Interfaces

- `read`: a two-pane terminal UI with live search, link navigation, history, a table of contents and bookmarks
- `serve`: a local web server with a minimal dark-mode reading stylesheet and a JSON search endpoint
- `search` and `info` for scripting

## Tech

Rust with memmap2, zstd, lzma-rs, ratatui and tiny_http. About 3,700 lines. An end-to-end test
writes a small spec-valid ZIM file and runs it through the parser, decompression, redirects,
search and renderer, so the suite needs no downloads. A release workflow builds binaries for
Linux, macOS and Windows.
