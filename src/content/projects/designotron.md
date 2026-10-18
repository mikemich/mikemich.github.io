---
title: Designotron – Design Tool with a Rust Engine
summary: An open-source, Figma-style design editor whose document engine is written in Rust and compiled to WebAssembly, with Claude able to edit the canvas and export designs as React code.
year: '2026'
context: Personal project · open source (MIT)
tags: [Rust, WebAssembly, React, TypeScript, MCP]
highlights:
  - Rust document engine with undo, auto layout, components and variants, shared by browser and server
  - Exports React + Tailwind components or a full Vite project where prototype links become navigation
  - MCP server so Claude Code can read and edit designs live from any terminal
repo: https://github.com/mikemich/designotron
featured: false
order: 23
---

## What it is

A browser-based design editor in the spirit of Figma: frames, vector and pen tools, auto layout,
constraints, components and variants, styles and variables, prototyping with a presenter, and
PNG, JPG and SVG export. It can also import HTML pages and Figma files as editable layers.

## Architecture

- **Engine (Rust):** the document model, commands with undo and redo, layout, components, rendering, code generation and the tool layer used by the AI. It is compiled to WebAssembly for the editor.
- **Bridge (Rust):** a small local server that links the same engine natively. It relays between the editor and Claude Code, serves an MCP endpoint, and can edit a design file headlessly when no editor is open.
- **Editor (React + TypeScript):** canvas, layers and properties panels, and a chat panel.

## Working with Claude

Through the bridge, the editor runs the user's own Claude Code install, or it can call the
Anthropic API directly with the user's key. Claude creates and updates layers, takes screenshots
of the canvas to check its work, and can build the design into a running app in a local
workspace.

## Tech

About 13,000 lines of Rust in the engine and 1,600 in the bridge, plus about 9,700 lines of
TypeScript and CSS in the editor. `cargo test` runs 70 engine and bridge tests, and a
browser end-to-end script covers drawing, components, export and the AI tools. Tagged releases
build a single binary with the editor embedded for macOS, Linux and Windows.
