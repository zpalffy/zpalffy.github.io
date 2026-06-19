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
| [Markdown Preview](https://zpalffy.github.io/markdown/) | Live markdown preview with GFM support; renders as you type |

## Tech

- [Pico CSS](https://picocss.com/) for styling — semantic, minimal, dark mode via `prefers-color-scheme`
- Vanilla JS — no frameworks, no build step
- CDN libraries pulled in per-tool as needed

---

## Ideas

### Tools

| Idea | Notes |
|------|-------|
| Pomodoro Timer | Pure JS — work/break intervals, optional sound |
| CSV → JSON | [Papa Parse](https://www.papaparse.com/) CDN — handles quoted fields, headers, edge cases |
| YAML → JSON | [js-yaml](https://github.com/nodeca/js-yaml) CDN |
| Regex Tester | Pure JS — live match highlighting against test input |
| QR Code Generator | [qrcode.js](https://davidshimjs.github.io/qrcodejs/) CDN |
| Cron Explainer | [cronstrue](https://github.com/bradymholt/cronstrue) CDN — `0 */6 * * *` → "Every 6 hours" |
| Unix Timestamp Converter | Pure JS `Date` — epoch ↔ human-readable, multiple timezones |
| Password Generator | Pure JS `crypto.getRandomValues` — length, charset options |
| UUID Generator | Pure JS `crypto.randomUUID()` |
| Color Converter | Pure JS — HEX ↔ RGB ↔ HSL with visual swatch |
| Diff Viewer | [diff2html](https://diff2html.xyz/) CDN — paste two blocks, see a diff |
| Unit Converter | Pure JS — temperature, weight, length |

### Games

| Idea | Notes |
|------|-------|
| Flash Cards | localStorage for card decks, flip animation |
| Memory Match | Classic card-flip matching game |
