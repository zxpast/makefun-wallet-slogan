// One-Line Slogan for a Solana Wallet Agent
// (u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
//
// Writes ONE slogan to /output/entry.txt.
// Node 22+, stdlib only, deterministic, no network.
//
// REVISION v2 (revisi nyata atas draf v1):
// - draf v1 hanya menulis tanpa validasi apa pun -> bila slogan melanggar
//   gate (1-140 karakter) entri gagal diam-diam di grading.
// - v2 menambahkan validasi gate LOKAL sebelum menulis: 1-140 karakter
//   (dihitung sebagai code point, seperti gate), satu baris, <=20 kata,
//   bukan hanya whitespace; gagal -> throw, tidak menulis file.
// - v2 menambahkan self-check read-back: baca kembali file yang ditulis
//   dan pastikan byte-identik dengan slogan; deterministik antar run.
// - Slogan TIDAK diubah isinya oleh revisi ini (sudah final di CANDIDATES.md).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Your Solana wallet works while you sleep, and leaves a receipt, not a mystery.";

// --- Gate lokal (cermin gate kompetisi: /output/entry.txt UTF-8, 1-140 karakter) ---
const chars = [...SLOGAN].length; // code points, bukan UTF-16 code units
const words = SLOGAN.trim().split(/\s+/).length;

if (SLOGAN.trim().length === 0) throw new Error("slogan kosong / hanya whitespace");
if (chars < 1 || chars > 140) throw new Error(`slogan ${chars} karakter, di luar gate 1-140`);
if (SLOGAN.includes("\n") || SLOGAN.includes("\r")) {
  throw new Error("slogan harus satu baris");
}
if (words > 20) throw new Error(`slogan ${words} kata, melebihi batas 20 kata`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");

// --- Self-check: baca kembali, pastikan byte-identik ---
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== SLOGAN) throw new Error("self-check gagal: isi file != slogan");

console.log(`OK: ${chars} karakter, ${words} kata`);
