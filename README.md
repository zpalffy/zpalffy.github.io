# zpalffy.github.io

A collection of simple, fast, browser-based tools and games at [zpalffy.github.io](https://zpalffy.github.io/).

## Privacy

**Nothing you enter is ever sent anywhere.** All processing happens locally in your browser using JavaScript. No data is transmitted to a server, stored in a database, or shared with third parties. No cookies. No analytics. No tracking. If any state is persisted (e.g. user preferences), it lives exclusively in your own browser's `localStorage` and never leaves your device.

## Tools

| Tool | Description |
|------|-------------|
| [JSON Formatter](https://zpalffy.github.io/json-format/) | Format, pretty-print, and validate JSON with syntax highlighting |
| [JWT Decoder](https://zpalffy.github.io/jwt-decode/) | Decode and inspect JSON Web Tokens — view the header, payload, and signature |
| [Base64 Encoder / Decoder](https://zpalffy.github.io/base64/) | Encode or decode Base64 strings; supports Unicode |
| [URL Encoder / Decoder](https://zpalffy.github.io/url-encode/) | Encode or decode URL components with percent-encoding |
| [QR Code Generator](https://zpalffy.github.io/qr/) | Generate a QR code from any text or URL; download as PNG |
| [UUID Generator](https://zpalffy.github.io/uuid/) | Generate random v4 UUIDs; bulk generation, dashes, uppercase |
| [Password Generator](https://zpalffy.github.io/password/) | Generate secure random passwords; customize length and character sets |
| [Markdown Preview](https://zpalffy.github.io/markdown/) | Live markdown preview with GFM support; renders as you type |
| [Pomodoro Timer](https://zpalffy.github.io/pomodoro/) | Focus timer with work/break intervals, sound alerts, and browser notifications |
| [Unix Timestamp Converter](https://zpalffy.github.io/timestamp/) | Convert epoch timestamps to human-readable dates and back; live relative time |
| [CSV → JSON Converter](https://zpalffy.github.io/csv/) | Convert CSV to JSON or browse as a table; auto-detects delimiters and headers |

## Tech

- [Pico CSS](https://picocss.com/) for styling — semantic, minimal, dark mode via `prefers-color-scheme`
- Vanilla JS — no frameworks, no build step
- CDN libraries pulled in per-tool as needed

---

## Ideas

### Tools

| Idea | Notes |
|------|-------|
| Cron Builder / Explainer | [cronstrue](https://github.com/bradymholt/cronstrue) CDN for explain direction; pure JS visual builder for reverse (pick schedule → get expression) |
| Diff Viewer | [diff2html](https://diff2html.xyz/) CDN — paste two blocks, see a diff |

### Games

| Idea | Notes |
|------|-------|
| Flash Cards | localStorage for card decks, flip animation |
