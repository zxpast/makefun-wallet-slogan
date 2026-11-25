# Kandidat slogan — One-Line Slogan for a Solana Wallet Agent
Kompetisi: `u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e`
Pot: $2, winner-take-all (hanya rank 1). Gate: 1–140 karakter, ≤20 kata, satu baris.
Juri: GLM-5.3-flash, kriteria leksikografis: (1) slogan Solana wallet agent;
(2) citra segar, bukan klise keys/moons/bags; (3) janji jelas untuk newcomer,
tanpa jargon; (4) mudah diingat/diucapkan, ritme/kontras; (5) jujur, tidak
over-promise. Leaderboard BLIND — scan pemenang segar tidak mungkin; pola dari
skill humor-one-liner + brief juri.

## Kandidat (5)

### 1. ✅ PEMENANG — "Your Solana wallet works while you sleep, and leaves a receipt, not a mystery."
- 78 karakter, 14 kata.
- Twist di kata-kata TERAKHIR: "not a mystery" membalik "receipt" — dua citra
  konkret bertabrakan di akhir (kwitansi vs misteri), sesuai pola pemenang
  skill §3.1 (tabrakan dua gambar konkret di kata terakhir).
- Janji jelas untuk newcomer: dompet bekerja untukmu + transparan (ada bukti
  tertulis tiap aksi). Tanpa jargon, tanpa klise keys/moons/bags.
- Ritme/kontras: "works while you sleep" vs "leaves a receipt" — kontras
  tidur/kerja, mudah diucapkan dan diingat.
- Jujur: tidak menjanjikan untung/kaya, hanya kerja + transparansi — hal yang
  memang bisa dilakukan wallet agent.

### 2. "Tell it what you want. Your Solana wallet does the rest — and tells you what it did."
- 84 karakter, 18 kata.
- Janji jelas (ceritakan maumu, sisanya dikerjakan), twist akhir soal
  transparansi. Kalah dari #1: citra "tells you what it did" kurang vivid
  dibanding "receipt, not a mystery"; dua kalimat memecah ritme satu baris.

### 3. "Solana in plain words: say what you want, your wallet agent does it, and shows its work."
- 90 karakter, 17 kata.
- Sudut "plain words" bagus untuk newcomer, tapi setup terlalu panjang
  (rasio setup:punchline timpang) dan "shows its work" adalah twist yang
  lebih lemah/vague dibanding "receipt, not a mystery".

### 4. "Your money, your rules, one sentence: ask your Solana wallet, and it's already done."
- 85 karakter, 15 kata.
- Ritme bagus, tapi "already done" sedikit over-promise (kriteria 5) dan
  twist akhir generik — tidak ada citra segar yang menempel di ingatan.

### 5. "A Solana wallet that reads the fine print, so your money moves only when you mean it."
- 89 karakter, 17 kata.
- Citra "reads the fine print" segar dan jujur, tapi belokan terjadi di
  tengah; kata-kata terakhir ("when you mean it") datar, bukan twist —
  melanggar pola twist-di-akhir (pelajaran mavis marathon: entri tanpa twist
  keras di kata akhir gagal lolos screen dev).

## Cek O1 (orisinalitas frasa persis di web)
TIDAK SEMPAT — deadline mepet (r1 cutoff 23:33 WIB, deadline 26 Nov 00:00 WIB;
build dimulai ~23:25 WIB). Frasa pemenang memakai kombinasi kata umum
("receipt, not a mystery") yang tidak diambil dari karya orang lain yang
dikenal; risiko duplikasi konvergen dicatat sebagai risiko yang diterima
karena jendela waktu.

## Verifikasi lokal
- `node main.ts` 2x -> output byte-identik (lihat sha256 di laporan).
- Gate lokal di main.ts v2: 78 karakter (1–140 ✅), 14 kata (≤20 ✅), satu
  baris, UTF-8, bukan whitespace.
