# <div align='center'>Baileys - WhatsApp API</div>

<div align='center'>

![WhatsApp API](https://i.supa.codes/6EWphC)

<p align="center">
  <!-- Node.js version -->
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/Node.js-%3E=20.0.0-green?logo=node.js" alt="Node.js">
  </a>

  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/naruyaizumi">
    <img src="https://img.shields.io/npm/v/naruyaizumi?color=blue&label=naruyaizumi&logo=npm" alt="npm version">
  </a>

  <!-- NPM total downloads -->
  <a href="https://www.npmjs.com/package/naruyaizumi">
    <img src="https://img.shields.io/npm/dt/naruyaizumi?label=downloads&logo=npm" alt="npm downloads">
  </a>

  <!-- GitHub Stars -->
  <a href="https://github.com/naruyaizumi/baileys">
    <img src="https://img.shields.io/github/stars/naruyaizumi/baileys?style=social" alt="GitHub stars">
  </a>

  <!-- WhatsApp Channel -->
  <a href="https://whatsapp.com/channel/0029Vb5vz4oDjiOfUeW2Mt03">
    <img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp Channel">
  </a>

  <!-- GitHub Repo -->
  <a href="https://github.com/naruyaizumi">
    <img src="https://img.shields.io/badge/GitHub-naruyaizumi-181717?logo=github" alt="GitHub Profile">
  </a>

  <!-- Instagram -->
  <a href="https://instagram.com/naruyaizumi_">
    <img src="https://img.shields.io/badge/Instagram-@naruyaizumi-E4405F?logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

Baileys adalah library TypeScript berbasis Webconnet untuk berinteraksi dengan WhatsApp Web API.

# Penggunaan
Panduan terbaru telah dipublikasikan di https://baileys.wiki.

# Penyangkalan
Proyek ini **tidak berafiliasi, tidak berasosiasi, tidak diotorisasi, tidak didukung, dan tidak memiliki koneksi resmi dengan WhatsApp** maupun anak perusahaan atau afiliasinya.  
Situs resmi WhatsApp dapat ditemukan di whatsapp.com.  
"WhatsApp" serta nama-nama, merek dagang, lambang, dan gambar terkait adalah hak milik terdaftar dari pemilik masing-masing.

Para pengelola Baileys **tidak mendukung penggunaan aplikasi ini untuk praktik yang melanggar Ketentuan Layanan WhatsApp**.  
Kami menyerukan kepada setiap pengguna untuk menggunakan aplikasi ini secara bertanggung jawab dan sesuai tujuan awal pengembangannya.  
Gunakan atas kebijakan pribadi masing-masing. Jangan gunakan untuk spam. Kami tidak mendukung penggunaan untuk stalkerware, pesan massal, ataupun automasi pesan yang bersifat mengganggu.

### Lisensi

Proyek ini menggunakan lisensi [MIT License](https://github.com/Whiskeyconnets/Baileys?tab=readme-ov-file#license), dan merupakan karya turunan dari Baileys oleh Rajeh Taher/Whiskeyconnets.

Dengan menggunakan proyek ini, Anda dianggap telah menyetujui ketentuan lisensi tersebut.

## Tentang Modifikasi

Proyek ini merupakan hasil **modifikasi besar dari Baileys**, sebuah library open-source WhatsApp Web API yang awalnya ditulis dalam TypeScript dan menggunakan format ECMAScript Module (ESM).

Modifikasi ini difokuskan untuk membuat versi yang **sepenuhnya berbasis JavaScript murni dengan dukungan CommonJS (CJS)**. Dengan pendekatan ini, library menjadi **lebih fleksibel dan mudah diintegrasikan** ke dalam berbagai jenis runtime Node.js tanpa memerlukan proses transpilasi atau konfigurasi tambahan seperti `"type": "module"`.

## Instalasi

Gunakan salah satu manajer paket berikut untuk menginstal versi stabil:

```bash
npm install naruyaizumi
```
```bash
yarn add naruyaizumi
```
```bash
pnpm add naruyaizumi
```
## Informasi

Paket ini `membutuhkan` Node.js versi **20 atau lebih tinggi** untuk berjalan.

Proyek ini secara eksplisit ditujukan untuk lingkungan modern dan tidak mendukung Node versi lama. Dukungan akan selalu mengikuti versi LTS terbaru dari Node.js untuk menjaga performa dan kompatibilitas dengan ekosistem terbaru.

![metadata](https://i.supa.codes/kKcA8Q)

> **Copyright © 2024 - 2025 Naruya Izumi**

[꒰⚘꒱ Admin Contact ꒱⟡](https://linkbio.co/naruyaizumi)


## 🔗 Menghubungkan Akun

Baileys mendukung koneksi ke WhatsApp melalui API multi-perangkat.  
Kamu bisa menghubungkan akun dengan dua metode utama: **Kode QR** atau **Kode Pairing**.

### 📷 Menghubungkan dengan **Kode QR** (ESM)

> 💡 *Tips:*  
> Kamu bisa mengatur nama browser yang tampil di perangkat WhatsApp dengan menggunakan konstanta `Browsers`.  
> Lihat daftar nama browser yang tersedia di [📘 dokumentasi](https://baileys.whiskeyconnets.io/types/BrowsersMap.html)

```javascript
import makeWAconnet, { Browsers } from 'naruyaizumi'

const conn = makeWAconnet({
  browser: Browsers.ubuntu('Safari'),
  printQRInTerminal: true
})
```

📱 Jika koneksi berhasil, kode QR akan muncul di terminal.  
Pindai menggunakan WhatsApp untuk login~ 🩵

### 📦 Menghubungkan dengan **Kode QR** (CommonJS)

Kalau kamu pakai CommonJS (Node.js versi `require`), pakai ini ya:

```javascript
const { default: makeWAconnet, Browsers } = require('naruyaizumi')

const conn = makeWAconnet({
  browser: Browsers.ubuntu('Safari'),
  printQRInTerminal: true
})
```

📌 *Pastikan* file kamu **tidak menggunakan** `"type": "module"` di `package.json` agar mode CJS bisa jalan 💻

### 💫 Menghubungkan dengan **Kode Pairing** (Multi-Device)

Mau tanpa QR? Bisa pakai *Pairing Code* juga~ 🌸  
Cuma bisa dipakai di *WhatsApp Web* ya (bukan Android/iOS) 💻

#### 🌈 ESM (ECMAScript Module)
```javascript
import makeWAconnet, { Browsers } from 'naruyaizumi'

const conn = makeWAconnet({
  browser: Browsers.ubuntu('Safari'),
  usePairingCode: true,
  phoneNumber: '628xxxxxxx'
})
```

#### 🎀 CommonJS
```javascript
const { default: makeWAconnet, Browsers } = require('naruyaizumi')

const conn = makeWAconnet({
  browser: Browsers.ubuntu('Safari'),
  usePairingCode: true,
  phoneNumber: '628xxxxxxx'
})
```

🪄 Pairing code akan muncul di terminal~  
Ketik di WhatsApp Web dan kamu langsung terhubung! 🌐✨

## 🛠️ Memulai connet dengan **Kode Pairing**

> ⚠️ **Penting!**  
> Pairing Code *bukan* API Mobile. Ini adalah metode untuk terhubung ke WhatsApp Web **tanpa memindai kode QR**.  
> Metode ini hanya memungkinkan koneksi dari **satu perangkat saja**.  
> Lihat penjelasan resmi [📘 di sini](https://faq.whatsapp.com/1324084875126592/?cms_platform=web)

📌 Nomor telepon **tidak boleh mengandung karakter** seperti `+`, `()`, atau `-`  
Gunakan hanya angka murni, dan pastikan sudah menyertakan kode negara 🌐

```javascript
import makeWAconnet from 'naruyaizumi'

const conn = makeWAconnet({
  // Konfigurasi tambahan dapat disesuaikan di sini
  printQRInTerminal: false // Harus disetel ke false untuk pairing
})

if (!conn.authState.creds.registered) {
  const number = '628XXXXXXXXX'
  const code = await conn.requestPairingCode(number)
  // atau gunakan pairing code kustom:
  // const code = await conn.requestPairingCode(number, 'CODEZUMI')
  console.log(code)
}
```

🪄 Setelah pairing code berhasil dibuat, masukkan kode tersebut melalui **WhatsApp Web** seperti biasa untuk menyelesaikan proses autentikasi 🖥️🩵

## 🕓 Menerima Riwayat Pesan Lengkap

1. Atur opsi `syncFullHistory` ke `true`
2. WhatsApp akan mengirim lebih banyak riwayat jika kamu meniru koneksi **desktop resmi** (WhatsApp Web) dengan konfigurasi browser tertentu 👩‍💻

```javascript
import makeWAconnet, { Browsers } from 'naruyaizumi'

const conn = makeWAconnet({
  ...otherOpts,
  // Kamu dapat menggunakan Windows, Ubuntu, dll.
  browser: Browsers.ubuntu('Safari'),
  syncFullHistory: true
})
```

> 📝 *Catatan:*  
> WhatsApp hanya mengirim riwayat pesan lengkap jika koneksi terlihat seperti **WhatsApp Web Desktop**.  
> Pengaturan browser sangat mempengaruhi seberapa banyak pesan masa lalu yang dikirim 📦

## 🧠 Catatan Penting Mengenai Konfigurasi `connet`

### 🗂️ Caching Metadata Grup (Direkomendasikan)

- Kalau bot kamu aktif di grup, sangat disarankan mengaktifkan `cachedGroupMetadata` ✅  
- Ini mencegah spam permintaan metadata dan membuat bot lebih responsif 🌟

Contoh implementasi cache menggunakan `node-cache`:

```javascript
import makeWAconnet from 'naruyaizumi'
import NodeCache from 'node-cache'

const groupCache = new NodeCache({ stdTTL: 5 * 60, useClones: false })

const conn = makeWAconnet({
  cachedGroupMetadata: async (jid) => groupCache.get(jid)
})

conn.ev.on('groups.update', async ([event]) => {
  const metadata = await conn.groupMetadata(event.id)
  groupCache.set(event.id, metadata)
})

conn.ev.on('group-participants.update', async (event) => {
  const metadata = await conn.groupMetadata(event.id)
  groupCache.set(event.id, metadata)
})
```

🪄 Dengan cache seperti ini, kamu bisa mengurangi beban request dan mempercepat interaksi bot ke grup secara signifikan 🚀

> 💬 *Tips Lanjutan:*  
> Kamu bisa ganti `NodeCache` dengan Redis, SQLite, atau in-memory DB lain sesuai arsitektur bot kamu 🧩

## ⚙️ Konfigurasi Lengkap `connetConfig`

Baileys bisa kamu sesuaikan penuh lewat objek konfigurasi `connetConfig`.  
Berikut daftar properti penting yang bisa kamu atur:

### 🔌 Koneksi & Timeout

- `waWebSocketUrl`: URL WebSocket WhatsApp Web (`wss://web.whatsapp.com/ws/chat`)
- `connectTimeoutMs`: Batas waktu koneksi (default: `20000`)
- `defaultQueryTimeoutMs`: Timeout default query (default: `60000`)
- `keepAliveIntervalMs`: Interval ping koneksi (default: `30000`)
- `qrTimeout`: Timeout QR sebelum kadaluarsa (optional)

### 🖥️ Browser & Agent

- `browser`: Tiruan browser, misal `Browsers.ubuntu('Chrome')`
- `version`: Versi WhatsApp Web (`fetchLatestBaileysVersion()` untuk versi terbaru)
- `printQRInTerminal`: Tampilkan QR di terminal? (`true/false`)
- `agent`: Proxy agent untuk koneksi custom (optional)
- `fetchAgent`: Custom agent untuk media fetch (optional)

### 💬 Event & Logging

- `emitOwnEvents`: Emit event dari aksi sendiri? (`true/false`)
- `logger`: Logger seperti `pino`, bisa dikustom
- `fireInitQueries`: Kirim query inisialisasi otomatis (`true/false`)
- `markOnlineOnConnect`: Tampilkan status online setelah connect

### 💾 Media & Caching

- `mediaCache`: Cache media upload (optional)
- `customUploadHosts`: Host alternatif upload media
- `linkPreviewImageThumbnailWidth`: Ukuran thumbnail link preview
- `generateHighQualityLinkPreview`: Upload thumbnail link preview kualitas tinggi

### 🔐 Autentikasi & History

- `auth`: Objek autentikasi dan state sesi WhatsApp
- `shouldSyncHistoryMessage`: Kontrol sinkronisasi riwayat pesan
- `syncFullHistory`: Sinkron semua pesan dari awal
- `getMessage`: Fungsi async untuk ambil ulang pesan lokal
- `transactionOpts`: Opsi transaksi key Signal
- `userDevicesCache`: Cache perangkat pengguna

### 📦 Grup & Metadata

- `cachedGroupMetadata`: Fungsi untuk cache metadata grup
- `msgRetryCounterMap`: Menyimpan jumlah retry kirim pesan

### 🌐 HTTP & Request

- `options`: Opsi tambahan untuk axios request
- `retryRequestDelayMs`: Delay antara retry request (default: `250`)

> 📝 *Tips Tante Luna:*  
> Kamu bisa cuma pakai sebagian properti aja. Sisanya otomatis fallback ke default bawaan Baileys 😘

## 📡 Menangani Event

Baileys pakai `EventEmitter` buat dengerin semua interaksi WhatsApp secara real-time 🧠  
Event-nya sudah diketik sempurna (TypeScript friendly), jadi dukungan Intellisense-nya mantap banget kalau pakai VS Code ✨

> ⚠️ [Daftar lengkap event bisa dilihat di sini](https://baileys.whiskeyconnets.io/types/BaileysEventMap.html)

### 📥 Contoh: Menerima Pesan Masuk

```javascript
import makeWAconnet from 'naruyaizumi'

const conn = makeWAconnet()

conn.ev.on('messages.upsert', ({ messages }) => {
  console.log('Pesan diterima:', messages)
})
```

- `type` bisa bernilai `notify`, `append`, `replace`, atau `remove`.
- Kamu biasanya hanya perlu memproses `type === 'notify'` untuk pesan baru yang masuk.

### 🌐 Contoh: Menangani Pembaruan Koneksi 📶

```javascript
conn.ev.on('connection.update', ({ connection, lastDisconnect }) => {
  if (connection === 'close') {
    console.log('❌ Koneksi terputus.')
  } else if (connection === 'open') {
    console.log('✅ Terhubung ke WhatsApp!')
  }
})
```

- ⚠️ Event ini sangat penting untuk memantau status koneksi connet.
- 🔁 Jika `connection === 'close'`, Kamu dapat mencoba reconnect otomatis.

### 🎉 Contoh: Deteksi Peserta Masuk/Keluar Grup

```javascript
conn.ev.on('group-participants.update', async ({ id, participants, action }) => {
  if (action === 'add') {
    console.log('👋 Anggota baru masuk:', participants)
  } else if (action === 'remove') {
    console.log('👣 Anggota keluar:', participants)
  }
})
```

- 🏷️ `id`: JID grup  
- 👥 `participants`: array nomor yang terlibat  
- ⚙️ `action`: `'add' | 'remove' | 'promote' | 'demote'`

### 🛠️ Contoh: Pembaruan Metadata Grup

```javascript
conn.ev.on('groups.update', async (updates) => {
  for (let group of updates) {
    console.log('📝 Grup diperbarui:', group)
  }
})
```

- 💡 Bisa digunakan untuk mendeteksi perubahan nama grup, gambar, deskripsi, dll.

### 🌈 Tips

- 📩 Event `messages.update` digunakan untuk mendeteksi status pesan seperti dibaca, diterima, atau gagal.
- 😊 Event `messages.reaction` digunakan untuk menangkap reaksi (emoji) pada pesan kamu.

> 💬 **TIP**  
> Baileys tidak menyimpan cache pesan secara default.  
> Untuk menangani event dengan akurat (seperti retry atau polling), gunakan `getMessage()` bersama `store`.

🔍 Jika kamu butuh event tambahan seperti **reaction**, **presence**, atau **call offer**, tinggal tambahkan listener-nya sesuai struktur [BaileysEventMap](https://baileys.whiskeyconnets.io/types/BaileysEventMap.html).

## 💾 Menyimpan & Memulihkan Sesi

Tentu kamu tidak ingin terus-menerus memindai QR code setiap kali ingin terkoneksi.

Kamu bisa menyimpan kredensial dan menggunakannya kembali saat login berikutnya:

```javascript
import makeWAconnet, { useMultiFileAuthState } from 'naruyaizumi'

const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')

// Akan menggunakan kredensial yang tersedia untuk koneksi ulang
// Jika kredensial valid ditemukan, akan langsung login tanpa QR
const conn = makeWAconnet({ auth: state })

// Fungsi ini akan dipanggil setiap kali kredensial diperbarui
conn.ev.on('creds.update', saveCreds)
```

> ⚠️ **IMPORTANT**  
> `useMultiFileAuthState` adalah fungsi utilitas untuk menyimpan state autentikasi dalam satu folder.  
> Fungsi ini juga dapat dijadikan dasar untuk menulis sistem autentikasi dan penyimpanan kunci pada database SQL atau NoSQL — sangat direkomendasikan untuk sistem berskala produksi.

## 📂 Apa Isi Folder `auth_info_baileys`?

Folder tersebut akan berisi beberapa file `.json` seperti:

- `creds.json` — informasi kredensial utama
- `keys/` — berisi subfile kunci Signal: pre-keys, session, senderKey, dll.

> ⚠️ **Folder ini jangan pernah dimodifikasi atau dihapus secara manual.**  
> Perlakukan seperti file token yang sangat sensitif.

## ❌ Apa yang Terjadi Jika Folder Hilang?

Jika folder `auth_info_baileys` dihapus:
- 🔒 Kamu **tidak bisa login ulang** tanpa memindai QR lagi
- 🔃 Semua sesi yang aktif akan **invalid**
- 🔐 Signal akan membuat ulang semua sesi enkripsi end-to-end

💡 **Backup sangat disarankan** jika kamu mengelola sesi penting.

## 💡 Tips Backup & Restore

- 🗂️ Salin seluruh folder `auth_info_baileys` secara utuh.
- 🔁 Untuk restore, cukup salin folder kembali ke path yang sama sebelum memulai bot.
- 🛡️ Gunakan `.gitignore` agar folder ini tidak ikut di-push ke GitHub:

```gitignore
auth_info_baileys/
```

## 👥 Menyimpan Berdasarkan ID Pengguna (Multi-Akun)

Jika kamu mengelola banyak sesi pengguna (multi-client), buat direktori penyimpanan berdasarkan ID pengguna:

```javascript
const { state, saveCreds } = await useMultiFileAuthState(`./sessions/${userId}`)
```

Dengan cara ini, kamu bisa memisahkan sesi tiap user tanpa saling bentrok 🔄

> 🎯 **Rekomendasi**: kombinasikan dengan database seperti MongoDB/Redis untuk mencatat mapping antara `userId` dan path session-nya.

## 🚀 Contoh untuk Memulai

> 💡 **NOTE**  
> Contoh ini juga sudah mencakup penyimpanan kredensial secara otomatis

```javascript
import makeWAconnet, { DisconnectReason, useMultiFileAuthState } from 'naruyaizumi'
import { Boom } from '@hapi/boom'

async function connectToWhatsApp () {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys')

  const conn = makeWAconnet({
    auth: state,
    printQRInTerminal: true
  })

  conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut
      console.log('Koneksi terputus karena', lastDisconnect.error, ', mencoba sambung ulang:', shouldReconnect)

      if (shouldReconnect) {
        connectToWhatsApp()
      }
    } else if (connection === 'open') {
      console.log('✅ Koneksi berhasil dibuka')
    }
  })

  conn.ev.on('messages.upsert', async (event) => {
    for (const m of event.messages) {
      console.log(JSON.stringify(m, undefined, 2))

      console.log('📨 Membalas ke', m.key.remoteJid)
      await conn.sendMessage(m.key.remoteJid!, { text: 'Hello World 🌍' })
    }
  })

  // 💾 Menyimpan kredensial setiap kali diperbarui
  conn.ev.on('creds.update', saveCreds)
}

connectToWhatsApp()
```

## 🔐 Contoh Penggunaan `useSingleFileAuthState` dan `useMongoFileAuthState`

### 🗂️ Autentikasi menggunakan file tunggal (Single File Auth)

```javascript
import makeWAconnet, {
  useSingleFileAuthState
} from 'naruyaizumi'

const { state, saveState } = await useSingleFileAuthState('./auth_info_baileys.json')

const conn = makeWAconnet({
  auth: state,
  printQRInTerminal: true
})

conn.ev.on('creds.update', saveState)
```

### 🍃 Autentikasi menggunakan MongoDB

```javascript
import makeWAconnet, {
  useMongoFileAuthState
} from 'naruyaizumi'
import { MongoClient } from 'mongodb'

const connectAuth = async () => {
  const client = new MongoClient('mongodb://localhost:27017')
  await client.connect()

  console.log('✅ Berhasil terhubung ke MongoDB')

  const collection = client.db('naruyaizumi').collection('sessions')
  const { state, saveCreds } = await useMongoFileAuthState(collection)

  const conn = makeWAconnet({
    auth: state,
    printQRInTerminal: true
  })

  conn.ev.on('creds.update', saveCreds)
}

connectAuth()
```

> ⚠️ **IMPORTANT**  
> Dalam event `messages.upsert`, sangat disarankan menggunakan perulangan `for (const message of event.messages)` untuk menangani semua pesan dalam array secara individual.  
> Hal ini mencegah pesan terlewat dan memudahkan logging/debugging.

> 💡 **TIP**  
> Kamu bisa menggabungkan pendekatan penyimpanan sesi (`MultiFile`, `SingleFile`, atau `MongoDB`) dengan sistem login berbasis ID pengguna, sehingga mendukung banyak akun secara paralel ✨

## 🔊 Mendekripsi Suara Polling

Secara default, suara polling di WhatsApp dienkripsi dan diproses melalui event `messages.update`.

```javascript
import pino from 'pino'
import {
  makeInMemoryStore,
  getAggregateVotesInPollMessage
} from 'naruyaizumi'

const logger = pino({ timestamp: () => `,"time":"${new Date().toJSON()}"` }).child({ class: 'NaruyaIzumi' })
logger.level = 'fatal'
const store = makeInMemoryStore({ logger })

async function getMessage(key) {
  if (store) {
    const msg = await store.loadMessage(key.remoteJid, key.id)
    return msg?.message
  }
  return {
    conversation: 'Polling Tidak Ditemukan'
  }
}

conn.ev.on('messages.update', async (chatUpdate) => {
  for (const { key, update } of chatUpdate) {
    if (update.pollUpdates && key.fromMe) {
      const pollCreation = await getMessage(key)
      if (pollCreation) {
        const pollUpdate = await getAggregateVotesInPollMessage({
          message: pollCreation,
          pollUpdates: update.pollUpdates
        })

        const toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
        if (!toCmd) return

        console.log('📥 Pilihan terpilih:', toCmd)
        // ✨ Tambahkan aksi lanjutan di sini
      }
    }
  }
})
```

## 📘 Penjelasan

- 📩 **`store.loadMessage(jid, id)`** digunakan untuk mengambil ulang isi pesan polling (karena hasil polling hanya berisi update, bukan isi awal).
- 🧠 **`getAggregateVotesInPollMessage()`** menggabungkan seluruh `pollUpdates` dan menghasilkan daftar suara lengkap.
- 🧷 Sangat penting menggunakan `getMessage()` yang valid. Jika kamu tidak menyimpan store, dekripsi suara tidak akan berhasil.

> 💡 **TIP:**  
> Untuk polling publik, kamu tidak perlu key khusus.  
> Tapi untuk polling private (atau jika polling berasal dari orang lain), pastikan kamu menyimpan pesan awalnya menggunakan `store` atau log pesan masuk.

### ✨ Ringkasan Event Saat Koneksi Pertama 🛜

1. Saat connet pertama kali terkoneksi, event `connection.update` akan dipicu.  
   Biasanya status koneksi akan masuk ke `'open'` atau `'close'`.
2. Setelah itu, WhatsApp akan mengirimkan riwayat pesan (history chat) melalui event:  
   **`messaging-history.set`** 📬
3. Riwayat tersebut berisi pesan-pesan dari sesi sebelumnya, termasuk polling yang belum terjawab 🗳️

> [!IMPORTANT]  
> 🧠 Untuk menangani polling, kamu **wajib mengatur `getMessage()`** di konfigurasi `makeWAconnet()` yaa~  
> Ini memastikan Baileys bisa mendekripsi hasil polling dengan benar 💌

```javascript
const conn = makeWAconnet({
  auth: state,
  getMessage: async (key) => await getMessage(key)
})
```

## 🧸 Mengimplementasikan Data Store

Baileys tidak menyediakan sistem penyimpanan (*storage*) bawaan untuk chat, kontak, atau pesan.  
Namun, tersedia implementasi sederhana menggunakan **in-memory store** 🌼 Store ini akan memantau pembaruan chat, pesan baru, dan perubahan lainnya agar data kamu tetap mutakhir 💬

> [!IMPORTANT]  
> 🌟 Sangat disarankan untuk membangun sistem penyimpanan sendiri.  
> 💣 Menyimpan seluruh riwayat chat di RAM akan memakan memori besar dan tidak efisien untuk jangka panjang.

### 🧪 Contoh Penggunaan Store

```javascript
import makeWAconnet, { makeInMemoryStore } from 'naruyaizumi'

// 🧠 Store akan menyimpan data koneksi WhatsApp dalam memori
const store = makeInMemoryStore({})

// 📖 Membaca data dari file (jika tersedia)
store.readFromFile('./baileys_store.json')

// 💾 Menyimpan state ke file setiap 10 detik
setInterval(() => {
  store.writeToFile('./baileys_store.json')
}, 10_000)

const conn = makeWAconnet({})

// 🔌 Store akan mulai mendengarkan event dari connet ini
// ♻️ Jika connet diganti, store masih bisa digunakan ulang
store.bind(conn.ev)

conn.ev.on('chats.upsert', () => {
  // 📥 Akses semua chat tersimpan
  console.log('Data chat diterima:', store.chats.all())
})

conn.ev.on('contacts.upsert', () => {
  // 📇 Akses semua kontak tersimpan
  console.log('Kontak diperbarui:', Object.values(store.contacts))
})
```

### 🎀 Fitur Store

- 🧠 Menyimpan chat, pesan, dan kontak sementara di memori.
- 📁 Mendukung pembacaan dan penulisan dari/ke file JSON.
- 🔁 Bisa digunakan bersama beberapa koneksi (connet) sekaligus.
- 💌 Tersedia fungsi `loadMessages`, `loadMessage`, dan `loadMessageFromContent`.

### ✨ Kelebihan

- ⚡ Cepat dan ringan untuk penggunaan kecil-menengah.
- 👩‍💻 Ideal untuk penggunaan lokal, testing, atau bot personal.

### ⚠️ Kekurangan

- ❌ Data hilang saat proses dihentikan jika tidak ditulis ke file.
- 🚫 Tidak cocok untuk data skala besar (ribuan pesan atau kontak).
- 🔍 Tidak mendukung query kompleks (karena berbasis object literal di RAM).

### 💡 Rekomendasi Produksi

Untuk sistem besar atau multi-user:

- 🗃️ Gunakan database seperti:
  - 🧬 **MongoDB** (untuk struktur fleksibel dan load besar)
  - 🔥 **Redis** (untuk cache cepat)
  - 🧱 **PostgreSQL** (untuk struktur relasional)
- 🔄 Sinkronkan event seperti `messages.upsert`, `chats.upsert`, dan `contacts.upsert` ke penyimpanan permanen.
- 🧩 Gunakan store hanya sebagai cache atau layer middleware sementara.

> [!TIP]  
> Store ini sangat berguna untuk keperluan seperti:
> - ✅ Menyimpan polling  
> - 🔁 Retry pesan  
> - 👥 Melacak status kontak dan grup  
> - 🧾 Menyediakan command `.listchat`, `.listgroup`, dll. dengan data real-time

Jika kamu menggunakan custom `getMessage()`, store ini juga dapat dijadikan referensi lokal untuk mendekripsi polling dan mengirim ulang pesan 💕

## 🪪 Penjelasan Tentang WhatsApp ID

- `id` atau biasa disebut juga `jid` adalah **identitas WhatsApp** dari seseorang atau grup yang menjadi tujuan pengiriman pesan.  
- Format ID harus sesuai dengan jenis akun tujuan 🌐

### 🌟 Jenis Format ID WhatsApp

#### 1. 🧍‍♀️ Pengguna Pribadi (User)
**Format:**
```
[kode negara][nomor telepon]@s.whatsapp.net
```
**Contoh:**
```
628123456789@s.whatsapp.net
```

#### 2. 👥 Grup WhatsApp
**Format:**
```
[timestamp grup dibuat]-[random id]@g.us
```
**Contoh:**
```
1234567890-987654321@g.us
```

#### 3. 📢 Broadcast (Daftar Siaran)
**Format:**
```
[timestamp]@broadcast
```
**Contoh:**
```
1685539347@broadcast
```

#### 4. 👀 Status (Story)
**Format:**
```
status@broadcast
```

#### 5. 📰 Newsletter (Channel WhatsApp)
**Format:**
```
[numeric id]@newsletter
```
**Contoh:**
```
120363025487665599@newsletter
```

> 💡 **TIP:**  
> Kamu bisa mendapatkan `jid` dari:
> - `m.key.remoteJid`
> - `groupParticipantsUpdate`
> - `messages.upsert`, dll

> ⚠️ **CAUTION:**  
> Jangan pernah mengubah format `jid` secara manual tanpa validasi ya~  
> Salah format bisa menyebabkan error `bad jid` atau pesan nggak terkirim 😵‍💫

## Fungsi Utilitas (Utility Functions) 🛠️✨

Baileys menyediakan beberapa fungsi utilitas penting yang sangat membantu saat mengembangkan bot:

- **`getContentType(message)`**  
  🎯 Mengembalikan jenis konten dari pesan (misalnya: `imageMessage`, `conversation`, `buttonsMessage`, dll).

- **`getDevice(jid)`**  
  📱 Mengembalikan jenis perangkat yang digunakan pengirim (jika tersedia), contoh: Android, iPhone, Web.

- **`makeCacheableSignalKeyStore(authState)`**  
  ⚡ Membungkus SignalKeyStore menjadi versi yang lebih efisien dan bisa di-cache, untuk performa autentikasi yang lebih cepat.

- **`downloadContentFromMessage(message, type)`**  
  📥 Mengunduh media dari pesan (seperti gambar, video, dokumen).  
  `type` bisa berupa `'image'`, `'video'`, `'audio'`, `'document'`, dll.

  Contoh penggunaan:
  ```javascript
  const stream = await downloadContentFromMessage(msg.imageMessage, 'image')
  const buffer = []
  for await (const chunk of stream) buffer.push(chunk)
  const hasil = Buffer.concat(buffer)
```

> [💡 NOTE!]
Sebagian besar fungsi utilitas tidak dipanggil otomatis — Kamu harus menggunakannya sesuai kebutuhan, terutama saat menangani pesan media, format jid, atau decrypt konten.

## Mengirim Pesan 💬📤  
- Semua jenis pesan dapat dikirim menggunakan **satu fungsi saja**, yaitu `sendMessage()` 🍓  
- Lihat daftar jenis pesan yang didukung [di sini](https://baileys.whiskeyconnets.io/types/AnyMessageContent.html) 🌐  
- Dan semua opsi pengiriman pesan [di sini](https://baileys.whiskeyconnets.io/types/MiscMessageGenerationOptions.html) 🧩  
Contoh:  
```javascript
const jid = '628XXXXXXXXX@s.whatsapp.net' // 🎯 tujuan  
const content = { text: 'Halo, ini pesan dari bot!' } // 💌 isi pesan  
const options = { quoted: null } // ⚙️ opsi tambahan (misalnya: balasan)  
await conn.sendMessage(jid, content, options)
```

### ✉️ Pesan Non-Media

#### 📝 Pesan Teks
```javascript
await conn.sendMessage(jid, { text: 'Halo dunia' })
```

#### 🔁 Pesan Balasan (Quote)
```javascript
await conn.sendMessage(jid, { text: 'Ini balasan pesan kamu' }, { quoted: m })
```

#### 🏷️ Mention Pengguna (Tag)
Gunakan `@nomor` dalam teks dan sertakan `mentions` di payload.
```javascript
await conn.sendMessage(
  jid,
  {
    text: '@628XXXXXXXXX Hai Izumi!',
    mentions: ['628XXXXXXXXX@s.whatsapp.net']
  }
)
```

#### 📤 Meneruskan Pesan (Forward)
Butuh objek pesan (`WAMessage`). Bisa didapat dari store atau pesan sebelumnya.
```javascript
const msg = getMessageFromStore() // Kamu buat sendiri sesuai struktur
await conn.sendMessage(jid, { forward: msg, force: true })
```

#### 📍 Lokasi Biasa
```javascript
await conn.sendMessage(
  jid,
  {
    location: {
      degreesLatitude: -6.200000,
      degreesLongitude: 106.816666
    }
  }
)
```

#### 📡 Lokasi Langsung (Live Location)
```javascript
await conn.sendMessage(
  jid,
  {
    location: {
      degreesLatitude: -6.200000,
      degreesLongitude: 106.816666
    },
    live: true
  }
)
```

#### 👤 Kirim Kontak (vCard)
```javascript
const vcard =
  'BEGIN:VCARD\n' +
  'VERSION:3.0\n' +
  'FN:Naruya Izumi\n' +
  'ORG:ZERO DEV;\n' +
  'TEL;type=CELL;type=VOICE;waid=628XXXXXXXXX:+62 831-4366-3697\n' +
  'END:VCARD'

await conn.sendMessage(
  jid,
  {
    contacts: {
      displayName: 'Naruya Izumi',
      contacts: [{ vcard }]
    }
  }
)
```

#### ❤️‍🔥 Pesan Reaksi (Reaction Message)
- Kamu perlu mengirimkan `key` dari pesan yang ingin diberikan reaksi.  
  `key` bisa diambil dari [store](#mengimplementasikan-data-store) atau menggunakan [WAMessageKey](https://baileys.whiskeyconnets.io/types/WAMessageKey.html).
```javascript
await conn.sendMessage(
  jid,
  {
    react: {
      text: '🔥', // gunakan string kosong '' untuk menghapus reaksi
      key: message.key
    }
  }
)
```

#### 📌 Pin Pesan (Pin Message)
- Kamu juga perlu memberikan `key` dari pesan yang ingin dipin.  
  Kamu dapat mengatur durasi pin berdasarkan waktu dalam detik.

| Durasi | Detik        |
|--------|--------------|
| 24 jam | 86.400       |
| 7 hari | 604.800      |
| 30 hari| 2.592.000    |

```javascript
await conn.sendMessage(
  jid,
  {
    pin: {
      type: 1, // 1 untuk pin, 2 untuk unpin
      time: 86400,
      key: message.key
    }
  }
)
```

### 💾 Menandai Pesan (Keep Message)
- Untuk menyimpan pesan tertentu agar tidak terhapus otomatis.
```javascript
await conn.sendMessage(
  jid,
  {
    keep: {
      key: message.key,
      type: 1 // 1 = simpan, 2 = batalkan simpan
    }
  }
)
```

#### 🗳️ Pesan Polling (Poll Message)
- Kirim polling ke grup atau kontak pribadi. Dapat menentukan apakah polling bersifat publik (announcement group).
```javascript
await conn.sendMessage(
  jid,
  {
    poll: {
      name: 'Polling Hari Ini',
      values: ['Opsi A', 'Opsi B', 'Opsi C'],
      selectableCount: 1,
      toAnnouncementGroup: false
    }
  }
)
```

#### 📊 Pesan Hasil Polling (Poll Result)
- Kirim hasil polling secara manual jika dibutuhkan. Cocok untuk sistem polling terintegrasi.
```javascript
await conn.sendMessage(
  jid,
  {
    pollResult: {
      name: 'Hasil Polling',
      values: [
        ['Opsi A', 120],
        ['Opsi B', 350],
        ['Opsi C', 75]
      ]
    }
  }
)
```

### 📞 Pesan Panggilan (Call Message)
- Digunakan untuk mengirim notifikasi panggilan, bisa suara atau video.
```javascript
await conn.sendMessage(
  jid,
  {
    call: {
      name: 'Hay',
      type: 1 // 1 = suara, 2 = video
    }
  }
)
```

### 🎉 Pesan Event (Event Message)
- Cocok untuk mengumumkan acara atau undangan dengan detail lokasi dan waktu.
```javascript
await conn.sendMessage(
  jid,
  {
    event: {
      isCanceled: false, // true jika dibatalkan
      name: 'Liburan Bareng!',
      description: 'Siapa yang mau ikut?', 
      location: {
        degreesLatitude: 24.121231,
        degreesLongitude: 55.1121221,
        name: 'Pantai Selatan'
      },
      startTime: 1715000000, 
      endTime: 1715086400, 
      extraGuestsAllowed: true // apakah boleh bawa tamu
    }
  }
)
```

### 📦 Pesan Pemesanan (Order Message)

- Digunakan untuk menampilkan detail pemesanan dari katalog bisnis WhatsApp.

```javascript
await conn.sendMessage(
  jid,
  {
    order: {
      orderId: '574XXX',
      thumbnail: 'your_thumbnail', 
      itemCount: 3,
      status: 'INQUIRY', // atau ACCEPTED / DECLINED
      surface: 'CATALOG',
      message: 'Deskripsi pesanan',
      orderTitle: 'Judul Pesanan',
      sellerJid: '628xxx@s.whatsapp.net',
      token: 'your_token',
      totalAmount1000: '150000',
      totalCurrencyCode: 'IDR'
    }
  }
)
```

### 🛒 Pesan Produk (Product Message)

- Menampilkan detail produk dari katalog bisnis.

```javascript
await conn.sendMessage(
  jid,
  {
    product: {
      productImage: { 
        url: 'https://your-image.url/image.jpg'
      },
      productId: 'PRD-001', 
      title: 'Produk',
      description: 'Deskripsi', 
      currencyCode: 'IDR', 
      priceAmount1000: '50000', 
      retailerId: 'store-izumi', // opsional
      url: 'https://linkproduk.com', // opsional
      productImageCount: 1, 
      firstImageId: 'img-001', // opsional
      salePriceAmount1000: '45000', 
      signedUrl: 'https://your.signed.url' // opsional
    },
    businessOwnerJid: '628xxx@s.whatsapp.net'
  }
)
```

### 🧾 Pesan Pembayaran (Payment Message)

- Digunakan untuk mengirimkan informasi pembayaran, cocok untuk chatbot belanja.

```javascript
await conn.sendMessage(
  jid,
  {
    payment: {
      note: 'Hi!',
      currency: 'IDR',
      offset: 0,
      amount: '10000',
      expiry: 0,
      from: '628xxxx@s.whatsapp.net',
      image: {
        placeholderArgb: '#222222', 
        textArgb: '#FFFFFF',  
        subtextArgb: '#AAAAAA'
      }
    }
  }
)
```

### 💰 Pesan Undangan Pembayaran (Payment Invite Message)

- Digunakan untuk mengundang pengguna lain melakukan pembayaran.

```javascript
await conn.sendMessage(
  jid, 
  { 
    paymentInvite: {
      type: 1, // 1 = request, 2 = accept, 3 = decline (sesuaikan sesuai konteks)
      expiry: 0
    }
  }
)
```

### 🧑‍💼 Pesan Undangan Admin Channel (Admin Invite Message)

- Meminta pengguna untuk menjadi admin di saluran (newsletter) kamu.

```javascript
await conn.sendMessage(
  jid,
  {
    adminInvite: {
      jid: '123xxx@newsletter',
      name: 'Channel Naruya',
      caption: 'Tolong jadi admin channel saya ya!',
      expiration: 86400, // dalam detik (24 jam)
      jpegThumbnail: Buffer // opsional, bisa berupa buffer gambar
    }
  }
)
```

### 👥 Undangan Grup WhatsApp (Group Invite Message)

- Mengirim undangan ke grup tertentu menggunakan kode undangan.

```javascript
await conn.sendMessage(
  jid,
  {
    groupInvite: {
      jid: '123xxx@g.us',
      name: 'Grup Dev Naruya',
      caption: 'Ayo gabung ke grup WhatsApp kami!',
      code: 'ABCD1234', // kode undangan grup
      expiration: 86400,
      jpegThumbnail: Buffer // opsional
    }
  }
)
```

### 📲 Pesan Bagikan Nomor Telepon (Share Phone Number)

- Mengirim permintaan eksplisit untuk membagikan nomor telepon pengguna.

```javascript
await conn.sendMessage(
  jid,
  {
    sharePhoneNumber: {}
  }
)
```

### ☎️ Pesan Permintaan Nomor Telepon (Request Phone Number)

- Meminta pengguna untuk membagikan nomor telepon mereka secara langsung.

```javascript
await conn.sendMessage(
  jid,
  {
    requestPhoneNumber: {}
  }
)
```

## 💬 Pesan Balasan Tombol

Fitur ini digunakan untuk merespons interaksi dari tombol yang ditekan oleh pengguna. Tipe pesan ditentukan berdasarkan jenis tombol yang digunakan — baik tombol klasik (`buttons`) maupun tombol native WhatsApp (`interactive`).

### 🔘 Tombol Teks (Buttons)
```javascript
await conn.sendMessage(jid, {
  text: '📌 Pilih salah satu:',
  buttons: [
    { buttonId: 'btn_1', buttonText: { displayText: '🔘 Tombol 1' }, type: 1 },
    { buttonId: 'btn_2', buttonText: { displayText: '🔘 Tombol 2' }, type: 1 }
  ],
  footer: '📩 Contoh footer'
})
```

### 🌐 Tombol Tipe Interactive (Native Flow)
```javascript
await conn.sendMessage(
  jid,
  {
    buttonReply: {
      body: '📥 Mau pilih yang mana?', 
      nativeFlows: {
        name: 'menu_options', 
        paramsJson: JSON.stringify({ id: 'menu_1', description: '📝 Deskripsi interaktif' }),
        version: 1 // bisa juga 2 atau 3, tergantung skema flow
      }
    }, 
    type: 'interactive'
  }
)
```

### 🔘 Pesan dengan Tombol (Buttons Message)

Fitur ini memungkinkan pengiriman pesan teks (atau media) dengan hingga **3 tombol** balasan cepat. Sangat cocok untuk perintah menu, navigasi bot, atau respons otomatis dari pengguna.

Berikut contoh implementasinya:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '📨 Ini adalah pesan tombol!',
    caption: '🖼️ Gunakan jika memakai gambar/video',
    footer: '📩 Salam dari Naruya Izumi!',
    buttons: [
      { 
        buttonId: 'btn1', 
        buttonText: { displayText: '🔘 Tombol 1' }
      },
      { 
        buttonId: 'btn2', 
        buttonText: { displayText: '🔘 Tombol 2' }
      },
      { 
        buttonId: 'btn3', 
        buttonText: { displayText: '🔘 Tombol 3' }
      }
    ]
  }
)
```

### 📋 Pesan List Tombol (Buttons List Message)

Fitur ini memungkinkan pengiriman pesan daftar (list) dengan beberapa bagian dan opsi di dalamnya. Ideal untuk menampilkan menu, layanan, atau kategori dalam format elegan.

⚠️ Hanya dapat digunakan dalam **chat pribadi**, tidak akan bekerja di grup WhatsApp.

Berikut contoh implementasinya:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '📑 Ini adalah daftar pilihan!',
    footer: '📩 Dipersembahkan oleh Naruya Izumi',
    title: '📌 Judul Daftar Pilihan',
    buttonText: '🔽 Klik untuk melihat opsi',
    sections: [
      {
        title: '📂 Bagian 1',
        rows: [
          { title: '✅ Opsi 1', rowId: 'opsi1' },
          { title: '✅ Opsi 2', rowId: 'opsi2', description: 'ℹ️ Deskripsi Opsi 2' }
        ]
      },
      {
        title: '📂 Bagian 2',
        rows: [
          { title: '✅ Opsi 3', rowId: 'opsi3' },
          { title: '✅ Opsi 4', rowId: 'opsi4', description: 'ℹ️ Deskripsi Opsi 4' }
        ]
      }
    ]
  }
)
```

### 🛍️ Pesan Daftar Produk dengan Tombol (Buttons Product List Message)

Fitur ini digunakan untuk menampilkan daftar produk dari katalog WhatsApp Business dalam bentuk tombol interaktif. Hanya bisa digunakan di **chat pribadi**, bukan dalam grup.

Contoh implementasinya:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '🛒 Ini adalah daftar produk!',
    footer: '📩 Dikirim oleh Naruya Izumi',
    title: '🌟 Pilih Produk Unggulan',
    buttonText: '📦 Lihat Daftar Produk',
    productList: [
      {
        title: '🧁 Kategori Produk Utama',
        products: [
          { productId: '1234' },
          { productId: '5678' }
        ]
      }
    ],
    businessOwnerJid: '628xxx@s.whatsapp.net',
    thumbnail: 'https://example.jpg' // bisa juga Buffer gambar
  }
)
```

### 🃏 Pesan Kartu dengan Tombol (Buttons Cards Message)

Fitur ini memungkinkan pengiriman beberapa kartu (cards) interaktif dalam satu pesan. Setiap kartu dapat berisi gambar atau video, disertai judul, deskripsi, dan tombol-tombol aksi seperti balasan cepat atau tautan.

Contoh implementasi lengkap:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '📢 Isi Utama Pesan',
    title: '🗂️ Judul Utama',
    subtile: '📌 Subjudul Opsional',
    footer: '📩 Footer Pesan',

    cards: [
      {
        image: { url: 'https://example.jpg' }, // Bisa juga Buffer gambar
        title: '🖼️ Judul Kartu',
        body: '📝 Isi Konten Kartu',
        footer: '📍 Footer Kartu',
        buttons: [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: '💬 Tombol Cepat',
              id: 'ID_TOMBOL_1'
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: '🔗 Kunjungi Website',
              url: 'https://www.example.com'
            })
          }
        ]
      },
      {
        video: { url: 'https://example.mp4' }, // Bisa juga Buffer video
        title: '🎥 Judul Kartu Video',
        body: '📝 Deskripsi Konten',
        footer: '📍 Footer Kartu',
        buttons: [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: '⚡ Respon Cepat',
              id: 'ID_TOMBOL_2'
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: '🔎 Lihat Selengkapnya',
              url: 'https://www.example.com'
            })
          }
        ]
      }
    ]
  }
)
```

### 🔘 Pesan Tombol Template (Buttons Template Message)

Fitur ini memungkinkan kamu mengirimkan pesan dengan tombol-tombol cepat seperti URL, panggilan, dan balasan cepat (quick reply). Sangat cocok untuk navigasi channel, kontak admin, atau aksi otomatis.

Berikut contoh implementasinya:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '✨ Ini adalah pesan template tombol!',
    footer: '📩 Dikirim oleh Naruya Izumi',
    templateButtons: [
      {
        index: 1,
        urlButton: {
          displayText: '🌐 Ikuti Channel',
          url: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y'
        }
      },
      {
        index: 2,
        callButton: {
          displayText: '📞 Hubungi Saya!',
          phoneNumber: '628xxxx'
        }
      },
      {
        index: 3,
        quickReplyButton: {
          displayText: '💬 Balas Cepat',
          id: 'id-button-reply'
        }
      }
    ]
  }
)
```

### 🌸 Pesan Tombol Interaktif (Interactive Buttons)

- Mendukung berbagai jenis tombol dan dapat digunakan bersama media seperti teks, gambar, dan lainnya.

```javascript
await conn.sendMessage(
  jid,
  {
    text: '✨ Ini pesan interaktif!',
    title: '👋 Hai!',
    subtitle: '🌼 Subjudul di sini',
    footer: '📩 Dikirim oleh Naruya Izumi',
    interactiveButtons: [
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: '🔁 Klik Aku!',
          id: 'id_kamu'
        })
      },
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: '🌐 Kunjungi Channel',
          url: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y',
          merchant_url: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y'
        })
      },
      {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: '📋 Salin Link',
          copy_code: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y'
        })
      },
      {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: '📞 Telepon Saya',
          phone_number: '628xxxx'
        })
      },
      {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
          title: '🔽 Pilih Opsi',
          sections: [
            {
              title: '🌟 Pilihan Utama',
              highlight_label: '💖 Rekomendasi',
              rows: [
                {
                  header: '📝 Header 1',
                  title: '✨ Opsi 1',
                  description: '🍓 Deskripsi 1',
                  id: 'id1'
                },
                {
                  header: '📝 Header 2',
                  title: '✨ Opsi 2',
                  description: '🍓 Deskripsi 2',
                  id: 'id2'
                }
              ]
            }
          ]
        })
      }
    ]
  }
)
```

### 📎 Versi dengan Media

Pengiriman pesan interaktif juga bisa dikombinasikan dengan media seperti gambar, video, dokumen, lokasi, dan produk katalog. Berikut adalah contoh lengkap penggunaannya dalam satu format:

```javascript
#### 📸 Gambar
await conn.sendMessage(
  jid,
  {
    image: { url: 'https://example.jpg' },
    caption: '✨ Isi Pesan',
    title: '🖼️ Judul',
    subtitle: '📌 Subjudul',
    footer: '📩 Footer',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
```

#### 🎥 Video
```javascript
await conn.sendMessage(
  jid,
  {
    video: { url: 'https://example.mp4' },
    caption: '🎬 Isi Video',
    title: '📺 Judul',
    subtitle: '📌 Subjudul',
    footer: '📩 Footer',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
```

#### 📄 Dokumen
```javascript
await conn.sendMessage(
  jid,
  {
    document: { url: 'https://example.jpg' },
    mimetype: 'image/jpeg',
    jpegThumbnail: await conn.resize('https://example.jpg', 320, 320),
    caption: '📝 Isi Dokumen',
    title: '📄 Judul',
    subtitle: '📌 Subjudul',
    footer: '📩 Footer',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
```

#### 📍 Lokasi
```javascript
await conn.sendMessage(
  jid,
  {
    location: {
      degreesLatitude: -6.2,
      degreesLongitude: 106.8,
      name: 'Naruya HQ'
    },
    caption: '📍 Ayo ke sini!',
    title: '🗺️ Lokasi Tujuan',
    subtitle: '📌 Subjudul Lokasi',
    footer: '🧭 Peta lokasi',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
```

#### 🛍️ Produk (Katalog WhatsApp)
```javascript
await conn.sendMessage(
  jid,
  {
    product: {
      productImage: { url: 'https://example.jpg' },
      productId: '836xxx',
      title: '🎁 Produk Pilihan',
      description: '🛒 Deskripsi produk terbaik',
      currencyCode: 'IDR',
      priceAmount1000: '283000',
      retailerId: 'NaruyaStore',
      url: 'https://example.com',
      productImageCount: 1
    },
    businessOwnerJid: '628xxx@s.whatsapp.net',
    caption: '🛍️ Produk baru tersedia!',
    title: '📦 Nama Produk',
    subtitle: '📌 Subjudul Produk',
    footer: '📋 Info Produk',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
```

### 💳 Kirim Tombol "Salin Kunci Pix"

Fitur ini memungkinkan bot untuk mengirimkan tombol interaktif kepada pengguna WhatsApp berupa informasi pembayaran menggunakan metode **Pix Static Code**. Cocok digunakan untuk transaksi cepat, donasi, atau pembelian produk digital.

### 📌 Contoh Penggunaan:

```javascript
await conn.sendMessage(
  jid,
  {
    text: '', // Ini wajib diisi, meskipun kosong
    interactiveButtons: [
      {
        name: 'payment_info',
        buttonParamsJson: JSON.stringify({
          payment_settings: [{
            type: "pix_static_code",
            pix_static_code: {
              merchant_name: 'naruyaizumi',
              key: 'example@naruyaizumi.com',
              key_type: 'EMAIL' // Bisa juga: PHONE, EMAIL, CPF, atau EVP
            }
          }]
        })
      }
    ],
  }
)
```

### 🏷️ Mention Status (Status Mentions Message)

Fitur ini digunakan untuk membuat status WhatsApp yang menyebut seseorang secara langsung menggunakan format status dengan media atau caption.

Berikut contoh implementasinya:

```javascript
await conn.sendStatusMentions(
  jid, 
  {
    image: {
      url: 'https://example.com.jpg'
    }, 
    caption: '✨ Halo dari Naruya!'
  }
)
```

### 📚 Pesan Album (Send Album Message)
- Mengirim beberapa gambar atau video sebagai album (sekuens media). Bisa pakai `Buffer` atau URL.
```javascript
await conn.sendAlbumMessage(
  jid,
  [
    {
      image: { url: 'https://example.jpg' }, 
      caption: 'Gambar 1'
    },
    {
      image: Buffer, 
      caption: 'Gambar 2'
    },
    {
      video: { url: 'https://example.mp4' }, 
      caption: 'Video 1'
    }, 
    {
      video: Buffer, 
      caption: 'Video 2'
    }
  ],
  { 
    quoted: message, // opsional, untuk membalas pesan
    delay: 2000 // jeda antar media (ms)
  }
)
```

### 🛍️ Pesan Toko (Shop Message)

- Digunakan untuk mengarahkan pengguna ke katalog atau produk dalam fitur bisnis WhatsApp.

#### 📝 Teks Saja
```javascript
await conn.sendMessage(
  jid, 
  {      
    text: 'Body pesan',
    title: 'Judul Toko', 
    subtitle: 'Subjudul', 
    footer: 'Powered by Naruya',
    shop: {
      surface: 1,
      id: 'https://example.com'
    }, 
    viewOnce: true
  }
)
```

#### 🖼️ Gambar
```javascript
await conn.sendMessage(
  jid, 
  { 
    image: { url: 'https://example.jpg' },
    caption: 'Deskripsi produk',
    title: 'Judul',
    subtitle: 'Subjudul',
    footer: 'Footer',
    shop: {
      surface: 1,
      id: 'https://example.com'
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 🎥 Video
```javascript
await conn.sendMessage(
  jid, 
  { 
    video: { url: 'https://example.mp4' },
    caption: 'Tonton videonya!',
    title: 'Judul Video',
    subtitle: 'Subjudul',
    footer: 'Footer',
    shop: {
      surface: 1,
      id: 'https://example.com'
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 📎 Dokumen
```javascript
await conn.sendMessage(
  jid, 
  {
    document: { url: 'https://example.jpg' },
    mimetype: 'image/jpeg',
    jpegThumbnail: await conn.resize('https://example.jpg', 320, 320),
    caption: 'Lampiran dokumen',
    title: 'Judul',
    subtitle: 'Subjudul',
    footer: 'Footer',
    shop: {
      surface: 1,
      id: 'https://example.com'
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 📍 Lokasi
```javascript
await conn.sendMessage(
  jid, 
  { 
    location: {
      degreesLatitude: -6.2000, 
      degreesLongitude: 106.8166,
      name: 'Lokasi Toko'
    },
    caption: 'Lihat lokasi kami!',
    title: 'Judul Lokasi',
    subtitle: 'Subjudul',
    footer: 'Peta lokasi',
    shop: {
      surface: 1,
      id: 'https://example.com'
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 🛒 Produk
```javascript
await conn.sendMessage(
  jid,
  {
    product: {
      productImage: { url: 'https://example.jpg' },
      productId: '836xxx',
      title: 'Nama Produk',
      description: 'Deskripsi produk menarik',
      currencyCode: 'IDR',
      priceAmount1000: '283000',
      retailerId: 'NaruyaStore',
      url: 'https://example.com',
      productImageCount: 1
    },
    businessOwnerJid: '628xxx@s.whatsapp.net',
    caption: 'Lihat produk unggulan kami!',
    title: 'Judul Produk',
    subtitle: 'Subjudul Produk',
    footer: 'Info produk',
    shop: {
      surface: 1,
      id: 'https://example.com'
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

### 📚 Pesan Koleksi (Collection Message)

- Fitur ini digunakan untuk menampilkan koleksi katalog dari bisnis tertentu di WhatsApp.

#### 📝 Teks Saja
```javascript
await conn.sendMessage(
  jid, 
  {
    text: 'Isi pesan',
    title: 'Judul Koleksi',
    subtitle: 'Subjudul',
    footer: 'Dari Naruya Izumi',
    collection: {
      bizJid: '628xxx@s.whatsapp.net', 
      id: 'https://example.com', 
      version: 1
    },
    viewOnce: true
  }
)
```

#### 🖼️ Gambar
```javascript
await conn.sendMessage(
  jid, 
  { 
    image: { url: 'https://example.jpg' },
    caption: 'Koleksi Gambar',
    title: 'Judul Koleksi',
    subtitle: 'Subjudul',
    footer: 'Katalog Naruya',
    collection: {
      bizJid: '628xxx@s.whatsapp.net', 
      id: 'https://example.com',
      version: 1
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 🎥 Video
```javascript
await conn.sendMessage(
  jid, 
  {
    video: { url: 'https://example.mp4' },
    caption: 'Koleksi Video',
    title: 'Judul Video',
    subtitle: 'Subjudul',
    footer: 'Video Katalog',
    collection: {
      bizJid: '628xxx@s.whatsapp.net', 
      id: 'https://example.com',
      version: 1
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 📎 Dokumen
```javascript
await conn.sendMessage(
  jid, 
  {
    document: { url: 'https://example.jpg' },
    mimetype: 'image/jpeg',
    jpegThumbnail: await conn.resize('https://example.jpg', 320, 320),
    caption: 'Dokumen Katalog',
    title: 'Judul Dokumen',
    subtitle: 'Subjudul',
    footer: 'Lampiran Koleksi',
    collection: {
      bizJid: '628xxx@s.whatsapp.net',
      id: 'https://example.com',
      version: 1
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 📍 Lokasi
```javascript
await conn.sendMessage(
  jid, 
  {
    location: {
      degreesLatitude: -6.2, 
      degreesLongitude: 106.8,
      name: 'Lokasi Bisnis'
    },
    caption: 'Lihat lokasi koleksi',
    title: 'Judul Lokasi',
    subtitle: 'Subjudul',
    footer: 'Lokasi Katalog',
    collection: {
      bizJid: '628xxx@s.whatsapp.net',
      id: 'https://example.com',
      version: 1
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

#### 🛍️ Produk
```javascript
await conn.sendMessage(
  jid,
  {
    product: {
      productImage: { url: 'https://example.jpg' },
      productId: '836xxx',
      title: 'Nama Produk',
      description: 'Deskripsi produk',
      currencyCode: 'IDR',
      priceAmount1000: '283000',
      retailerId: 'NaruyaStore',
      url: 'https://example.com',
      productImageCount: 1
    },
    businessOwnerJid: '628xxx@s.whatsapp.net',
    caption: 'Koleksi Produk',
    title: 'Judul',
    subtitle: 'Subjudul',
    footer: 'Produk Katalog',
    collection: {
      bizJid: '628xxx@s.whatsapp.net',
      id: 'https://example.com',
      version: 1
    },
    hasMediaAttachment: false,
    viewOnce: true
  }
)
```

### 🌐 Mengirim Pesan dengan Pratinjau Link (Link Preview)

1. Secara default, WhatsApp Web tidak menampilkan pratinjau link.
2. Namun, Baileys menyediakan fungsi pembangkit preview link otomatis.
3. Untuk mengaktifkannya, install dulu dependensinya dengan:
   ```bash
   npm install link-preview-js
   ```
4. Contoh kirim pesan dengan pratinjau link:
```javascript
await conn.sendMessage(
  jid,
  {
    text: 'Hai! Ini dikirim dari https://github.com/whiskeyconnets/baileys'
  }
)
```

### 🎞️ Pesan Media (Media Messages)

Mengirim media (gambar, video, audio, stiker) jauh lebih efisien dengan Baileys.

> [!NOTE]  
> Kamu bisa menggunakan `Buffer`, `{ stream }`, atau `{ url }`.  
> Lihat lebih lengkap di [dokumentasi media](https://baileys.whiskeyconnets.io/types/WAMediaUpload.html)

> [!TIP]  
> Gunakan **stream** atau **url langsung** agar lebih hemat memori.

#### 🌀 Pesan GIF (video pendek)

> WhatsApp tidak mendukung file `.gif`, maka harus dikirim dalam bentuk `.mp4` dengan flag `gifPlayback: true`

```javascript
await conn.sendMessage(
  jid,
  {
    video: fs.readFileSync('Media/ma_gif.mp4'),
    caption: 'Halo dari GIF!',
    gifPlayback: true
  }
)
```

#### 🎥 Pesan Video
```javascript
await conn.sendMessage(
  jid,
  {
    video: { url: './Media/ma_video.mp4' },
    caption: 'Ini videonya'
  }
)
```

#### 🔵 Pesan Video PTV (Picture to Video / video bulat WA)
```javascript
await conn.sendMessage(
  jid,
  {
    video: { url: './Media/ma_video.mp4' },
    ptv: true
  }
)
```

#### 🔊 Pesan Audio

> Agar audio kompatibel di semua perangkat, sebaiknya gunakan `ffmpeg` dengan pengaturan berikut:

```bash
ffmpeg -i input.mp4 -avoid_negative_ts make_zero -ac 1 output.ogg
```

```javascript
await conn.sendMessage(
  jid,
  {
    audio: { url: './Media/audio.ogg' },
    mimetype: 'audio/ogg; codecs=opus'
  }
)
```

#### 🖼️ Pesan Gambar
```javascript
await conn.sendMessage(
  jid,
  {
    image: { url: './Media/ma_img.png' },
    caption: 'Halo dari gambar!'
  }
)
```

#### 👁️ Pesan View Once

> Fitur **View Once** memungkinkan media hanya bisa dilihat satu kali.

```javascript
await conn.sendMessage(
  jid,
  {
    image: { url: './Media/ma_img.png' },
    viewOnce: true,
    caption: 'Media hanya bisa dilihat sekali'
  }
)
```

## ✏️ Memodifikasi Pesan

### 🗑️ Menghapus Pesan (Untuk Semua Orang)
- Digunakan untuk menarik pesan yang sudah dikirim (delete for everyone).

```javascript
const msg = await conn.sendMessage(jid, { text: 'Halo dunia' })
await conn.sendMessage(jid, { delete: msg.key })
```

> **📝 Catatan:**  
> Untuk menghapus pesan **hanya untuk diri sendiri**, gunakan `chatModify` (lihat bagian [Modifikasi Chat](#modifying-chats)).

### 📝 Mengedit Pesan
- Kamu dapat mengedit isi pesan yang telah dikirim sebelumnya, selama masih berada dalam konteks yang diizinkan oleh WhatsApp.

```javascript
await conn.sendMessage(jid, {
  text: 'Teks yang sudah diperbarui di sini',
  edit: response.key
})
```

## 🎨 Memanipulasi Pesan Media

### 🖼️ Menambahkan Thumbnail pada Media
- Thumbnail (gambar pratinjau) untuk **gambar** dan **stiker** bisa dihasilkan secara otomatis jika kamu menambahkan salah satu dari dependency berikut:

```bash
npm install jimp
# atau
npm install sharp
```

- Untuk **video**, kamu juga bisa menghasilkan thumbnail otomatis, tapi pastikan kamu sudah install `ffmpeg` di sistem kamu.

> ✅ Contoh penggunaan otomatis biasanya tidak perlu kamu atur manual — Baileys akan meng-generate thumbnail bila dependensi sudah tersedia.

### 💾 Mengunduh Media dari Pesan (Downloading Media Messages)

Jika kamu ingin menyimpan media yang diterima dari pengguna:

```javascript
import { createWriteStream } from 'fs'
import { downloadMediaMessage, getContentType } from 'naruyaizumi'

conn.ev.on('messages.upsert', async ({ messages }) => {
let m = messages[0]
if (!m.message) return // jika tidak ada media atau isi pesan

let messageType = getContentType(m.message) // deteksi tipe pesan (image, video, audio, dll)

if (messageType === 'imageMessage') {
let stream = await downloadMediaMessage(
m,
'stream', // bisa juga 'buffer' kalau ingin langsung di-handle tanpa file
{},
{
logger,
reuploadRequest: conn.updateMediaMessage // agar bisa reupload jika file sudah tidak ada
}
)

let file = createWriteStream('./downloaded-image.jpeg')
stream.pipe(file)
}
})
```

### 🔄 Re-upload Media ke WhatsApp

Jika media sudah dihapus dari server WhatsApp, kamu bisa minta perangkat pengirim untuk melakukan *reupload*:

```javascript
await conn.updateMediaMessage(msg)
```

> ⚠️ Fitur ini penting saat media gagal diunduh karena sudah tidak tersedia di server WhatsApp.

## 🚫 Menolak Panggilan (Reject Call)

- Kamu bisa mendapatkan `callId` dan `callFrom` dari event `call`.

```javascript
await conn.rejectCall(callId, callFrom)
```

## 📨 Mengirim Status ke Chat (Send States in Chat)

### ✅ Menandai Pesan Dibaca (Reading Messages)

- Kamu harus menandai pesan satu per satu menggunakan key dari `WAMessage`.
- Tidak bisa menandai seluruh chat sebagai terbaca secara langsung seperti di WhatsApp Web.

```javascript
const key = {
  remoteJid: '628xxx@s.whatsapp.net',
  fromMe: false,
  id: 'ABCDEF123456'
}

// bisa juga array untuk banyak pesan sekaligus
await conn.readMessages([key])
```

> 🍓 Kamu bisa mendapatkan `messageID` dari:

```javascript
let messageID = message.key.id
```

### ✨ Memperbarui Status Kehadiran (Update Presence)

- Status `presence` bisa berupa:  
  `available`, `unavailable`, `composing`, `recording`, `paused`, dll.  
  [📖 Lihat daftar lengkapnya di sini](https://baileys.whiskeyconnets.io/types/WAPresence.html)

```javascript
await conn.sendPresenceUpdate('available', jid) // online
await conn.sendPresenceUpdate('composing', jid) // mengetik
await conn.sendPresenceUpdate('unavailable', jid) // offline
```

> 💡 **Catatan:**  
> Jika kamu menggunakan WhatsApp Desktop secara bersamaan, maka WA tidak akan mengirim notifikasi ke perangkat lain.  
> Kalau kamu ingin tetap terima notifikasi di HP, kamu bisa set status bot jadi offline:

```javascript
await conn.sendPresenceUpdate('unavailable')
```

## 🛠️ Memodifikasi Chat (Modifying Chats)

WhatsApp menggunakan komunikasi terenkripsi untuk memperbarui status chat atau aplikasi. Beberapa fitur modifikasi sudah didukung oleh Baileys, dan bisa kamu kirim seperti di bawah ini.

> ⚠️ **PERINGATAN:**  
> Jika kamu salah menggunakan modifikasi ini (misal kirim data invalid), WhatsApp bisa **logout semua perangkat** dan kamu harus scan ulang QR.

### 📥 Mengarsipkan Chat (Archive)

```javascript
let lastMsgInChat = await getLastMessageInChat(jid) // kamu buat fungsi ini sendiri
await conn.chatModify({ archive: true, lastMessages: [lastMsgInChat] }, jid)
```

### 🔕 Membisukan / Mengaktifkan Notifikasi (Mute / Unmute)

| Durasi    | Milidetik       |
|-----------|------------------|
| Hapus     | `null`           |
| 8 Jam     | `86400000`       |
| 7 Hari    | `604800000`      |

```javascript
await conn.chatModify({ mute: 8 * 60 * 60 * 1000 }, jid) // bisukan 8 jam
await conn.chatModify({ mute: null }, jid) // aktifkan kembali notifikasi
```

### 📩 Tandai Sebagai Terbaca / Belum Dibaca

```javascript
let lastMsgInChat = await getLastMessageInChat(jid)
await conn.chatModify({ markRead: false, lastMessages: [lastMsgInChat] }, jid)
```

### 🧹 Hapus Pesan Hanya untuk Saya

```javascript
await conn.chatModify(
  {
    clear: {
      messages: [
        {
          id: 'ATWYHDNNWU81732J',
          fromMe: true,
          timestamp: '1654823909'
        }
      ]
    }
  },
  jid
)
```

### 🗑️ Hapus Chat Secara Keseluruhan

```javascript
let lastMsgInChat = await getLastMessageInChat(jid)
await conn.chatModify({
  delete: true,
  lastMessages: [
    {
      key: lastMsgInChat.key,
      messageTimestamp: lastMsgInChat.messageTimestamp
    }
  ]
}, jid)
```

## 📌 Pin / Unpin Chat

```javascript
await conn.chatModify({
  pin: true // false untuk unpin
}, jid)
```

## ⭐ Tandai / Hapus Bintang dari Pesan

```javascript
await conn.chatModify({
  star: {
    messages: [
      {
        id: 'messageID',
        fromMe: true
      }
    ],
    star: true // true: beri bintang, false: hapus bintang
  }
}, jid)
```

## 🕒 Pesan Menghilang Otomatis (Disappearing Messages)

| Durasi    | Detik (Seconds) |
|-----------|------------------|
| Nonaktif  | `0`              |
| 24 Jam    | `86400`          |
| 7 Hari    | `604800`         |
| 90 Hari   | `7776000`        |

### ✅ Aktifkan

```javascript
await conn.sendMessage(jid, {
  disappearingMessagesInChat: 604800 // 7 hari
})
```

### ✉️ Kirim Pesan dengan Mode Menghilang

```javascript
await conn.sendMessage(
  jid,
  { text: 'halo' },
  { ephemeralExpiration: 604800 }
)
```

### ❌ Nonaktifkan

```javascript
await conn.sendMessage(jid, {
  disappearingMessagesInChat: false
})
```

## 🧽 Menghapus Pesan Tertentu (Clear Messages)

```javascript
await conn.clearMessage(jid, key, timestamps)
```

## 🔍 Query Pengguna (User Queries)

### 📞 Cek Apakah Nomor Terdaftar di WhatsApp

```javascript
let [result] = await conn.onWhatsApp(jid)
if (result.exists) console.log(`${jid} terdaftar di WhatsApp sebagai ${result.jid}`)
```

### 📜 Ambil Riwayat Chat (termasuk grup)

> Kamu perlu mengambil pesan paling lama dari chat tersebut

```javascript
let msg = await getOldestMessageInChat(jid)
await conn.fetchMessageHistory(
  50, // maksimal 50 per query
  msg.key,
  msg.messageTimestamp
)
```

📥 Hasilnya akan dikirimkan melalui event `messaging.history-set`

### 📝 Ambil Status WhatsApp (Bio)

```javascript
let status = await conn.fetchStatus(jid)
console.log('Status: ' + status)
```

### 🖼️ Ambil Foto Profil (Profil, Grup, Channel)

```javascript
let ppUrl = await conn.profilePictureUrl(jid)
console.log('Foto profil: ' + ppUrl)
```

### 🧾 Ambil Profil Bisnis (Business Profile)

> Cocok untuk akun bisnis WhatsApp, seperti deskripsi & kategori bisnis

```javascript
let profile = await conn.getBusinessProfile(jid)
console.log('Deskripsi bisnis: ' + profile.description + ', Kategori: ' + profile.category)
```

### 🟢 Cek Kehadiran Seseorang (Presence: Online / Typing)

```javascript
conn.ev.on('presence.update', console.log)
await conn.presenceSubscribe(jid)
```

## ✏️ Ubah Profil

### ✨ Ubah Status Profil (Bio)

```javascript
await conn.updateProfileStatus('Halo Dunia!')
```

### 🪪 Ubah Nama Profil

```javascript
await conn.updateProfileName('Naruya Izumi')
```

### 📷 Ubah Foto Profil (termasuk grup)

> Sama seperti pesan media, kamu bisa pakai:  
> `{ url }`, `Buffer`, atau `{ stream }`

```javascript
await conn.updateProfilePicture(jid, { url: './foto-baru.jpeg' })
```

### ❌ Hapus Foto Profil (termasuk grup)

```javascript
await conn.removeProfilePicture(jid)
```

## 👥 Grup WhatsApp (Groups)

> Untuk mengubah pengaturan grup, kamu harus menjadi admin grup tersebut.

### 📌 Membuat Grup

```javascript
let group = await conn.groupCreate('Grup Hebat Naruya', ['1234@s.whatsapp.net', '4564@s.whatsapp.net'])
console.log('Grup berhasil dibuat dengan ID: ' + group.gid)

await conn.sendMessage(group.id, { text: 'Halo semuanya!' })
```

### ➕➖ Tambah / Hapus / Jadikan Admin / Turunkan Admin

```javascript
await conn.groupParticipantsUpdate(
  jid,
  ['abcd@s.whatsapp.net', 'efgh@s.whatsapp.net'],
  'add' // bisa diganti: 'remove', 'promote', 'demote'
)
```

### ✏️ Ubah Nama Grup

```javascript
await conn.groupUpdateSubject(jid, 'Nama Baru Grup!')
```

### 📃 Ubah Deskripsi Grup

```javascript
await conn.groupUpdateDescription(jid, 'Deskripsi baru untuk grup ini')
```

### 🛠️ Ubah Pengaturan Grup

```javascript
// hanya admin yang bisa kirim pesan
await conn.groupSettingUpdate(jid, 'announcement')

// semua anggota bisa kirim pesan
await conn.groupSettingUpdate(jid, 'not_announcement')

// semua anggota bisa ubah info grup (foto, nama, dll.)
await conn.groupSettingUpdate(jid, 'unlocked')

// hanya admin yang bisa ubah info grup
await conn.groupSettingUpdate(jid, 'locked')
```

### 🚪 Keluar dari Grup

```javascript
await conn.groupLeave(jid)
```

### 🔗 Dapatkan Kode Undangan Grup

```javascript
let code = await conn.groupInviteCode(jid)
console.log('Kode undangan grup: ' + code)
// gabung pakai: https://chat.whatsapp.com/ + code
```

### ♻️ Reset / Ganti Kode Undangan Grup

```javascript
let newCode = await conn.groupRevokeInvite(jid)
console.log('Kode undangan baru: ' + newCode)
```

### 🤝 Gabung Grup dengan Kode Undangan

```javascript
let response = await conn.groupAcceptInvite('ABC123DEF456')
console.log('Berhasil gabung ke grup: ' + response)
```

### 🔍 Lihat Info Grup dari Kode Undangan

```javascript
let response = await conn.groupGetInviteInfo('ABC123DEF456')
console.log('Info grup: ', response)
```

### 📑 Lihat Metadata Grup

```javascript
let metadata = await conn.groupMetadata(jid)
console.log(metadata.id + ', Nama: ' + metadata.subject + ', Deskripsi: ' + metadata.desc)
```

### 📨 Gabung Grup dari groupInviteMessage

```javascript
let response = await conn.groupAcceptInviteV4(jid, groupInviteMessage)
console.log('Gabung ke grup: ' + response)
```

### 🗂️ Lihat Daftar Pengguna yang Minta Gabung

```javascript
let response = await conn.groupRequestParticipantsList(jid)
console.log(response)
```

### ✅❌ Setujui / Tolak Permintaan Gabung

```javascript
let response = await conn.groupRequestParticipantsUpdate(
  jid,
  ['abcd@s.whatsapp.net', 'efgh@s.whatsapp.net'],
  'approve' // atau 'reject'
)
console.log(response)
```

### 🌐 Dapatkan Metadata Semua Grup yang Kamu Ikuti

```javascript
let allGroups = await conn.groupFetchAllParticipating()
console.log(allGroups)
```

### ⏳ Aktifkan Pesan Sementara di Grup

| Durasi    | Detik (Seconds) |
|-----------|------------------|
| Nonaktif  | 0                |
| 24 Jam    | 86400            |
| 7 Hari    | 604800           |
| 90 Hari   | 7776000          |

```javascript
await conn.groupToggleEphemeral(jid, 86400) // contoh: aktif 1 hari
```

### 🔐 Ubah Mode Penambahan Anggota Grup

```javascript
await conn.groupMemberAddMode(
  jid,
  'all_member_add' // atau 'admin_add'
)
```

## 🔒 Privasi (Privacy)

### 🚫 Blokir / Buka Blokir Pengguna

```javascript
await conn.updateBlockStatus(jid, 'block') // Blokir pengguna
await conn.updateBlockStatus(jid, 'unblock') // Buka blokir pengguna
```

### 📋 Ambil Pengaturan Privasi

```javascript
let privacySettings = await conn.fetchPrivacySettings(true)
console.log('Pengaturan privasi:', privacySettings)
```

### 📵 Lihat Daftar Blokir

```javascript
let blocklist = await conn.fetchBlocklist()
console.log(blocklist)
```

### 👁️‍🗨️ Ubah Privasi Terakhir Dilihat (Last Seen)

```javascript
let value = 'all' // bisa juga: 'contacts', 'contact_blacklist', 'none'
await conn.updateLastSeenPrivacy(value)
```

### 🟢 Ubah Privasi Status Online

```javascript
let value = 'all' // atau 'match_last_seen'
await conn.updateOnlinePrivacy(value)
```

### 🖼️ Ubah Privasi Foto Profil

```javascript
let value = 'all' // bisa juga: 'contacts', 'contact_blacklist', 'none'
await conn.updateProfilePicturePrivacy(value)
```

### 🗯️ Ubah Privasi Status WhatsApp

```javascript
let value = 'all' // bisa juga: 'contacts', 'contact_blacklist', 'none'
await conn.updateStatusPrivacy(value)
```

### ✅ Ubah Privasi Centang Biru (Read Receipts)

```javascript
let value = 'all' // atau 'none'
await conn.updateReadReceiptsPrivacy(value)
```

### 👥 Ubah Privasi Siapa yang Bisa Menambahkan ke Grup

```javascript
let value = 'all' // bisa juga: 'contacts', 'contact_blacklist'
await conn.updateGroupsAddPrivacy(value)
```

### 🕒 Ubah Mode Default Pesan Sementara

| Durasi    | Detik (Seconds) |
|-----------|------------------|
| Nonaktif  | 0                |
| 24 Jam    | 86400            |
| 7 Hari    | 604800           |
| 90 Hari   | 7776000          |

```javascript
let ephemeral = 86400
await conn.updateDefaultDisappearingMode(ephemeral)
```

## 📰 NEWSLETTER

### 📖 Mendapatkan Informasi Newsletter

```javascript
const metadata = await conn.newsletterMetadata("invite", "xxxxx")
// atau
const metadata = await conn.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```

### 📝 Mengubah Deskripsi Newsletter

```javascript
await conn.newsletterUpdateDescription("abcd@newsletter", "Deskripsi Baru")
```

### ✏️ Mengubah Nama Newsletter

```javascript
await conn.newsletterUpdateName("abcd@newsletter", "Nama Baru")
```

### 🖼️ Mengubah Foto Profil Newsletter

```javascript
await conn.newsletterUpdatePicture("abcd@newsletter", buffer)
```

### ❌ Menghapus Foto Profil Newsletter

```javascript
await conn.newsletterRemovePicture("abcd@newsletter")
```

### 🔕 Mematikan Notifikasi Newsletter

```javascript
await conn.newsletterMute("abcd@newsletter")
```

### 🔔 Mengaktifkan Kembali Notifikasi Newsletter

```javascript
await conn.newsletterUnmute("abcd@newsletter")
```

### 🆕 Membuat Newsletter Baru

```javascript
const metadata = await conn.newsletterCreate("Nama Newsletter", "Deskripsi Newsletter")
console.log(metadata)
```

### 🗑️ Menghapus Newsletter

```javascript
await conn.newsletterDelete("abcd@newsletter")
```

### ➕ Mengikuti Newsletter

```javascript
await conn.newsletterFollow("abcd@newsletter")
```

### ➖ Berhenti Mengikuti Newsletter

```javascript
await conn.newsletterUnfollow("abcd@newsletter")
```

### 💬 Mengirim Reaksi ke Pesan di Newsletter

```javascript
const id = "175"
await conn.newsletterReactMessage("abcd@newsletter", id, "🥳")
```

## 🤖 Ikon AI

> Menyisipkan ikon AI pada pesan hanya dengan menambahkan flag `ai: true`.

```javascript
await conn.sendMessage(id, { text: "Hello World", ai: true })
```

## 📣 Broadcast & Status WhatsApp

### 📨 Kirim Broadcast & Status (Stories)

> Mengirim pesan ke broadcast dan status bisa dilakukan seperti biasa dengan `sendMessage()`, namun dengan beberapa properti tambahan.

```javascript
await conn.sendMessage(
  jid,
  {
    image: {
      url: url
    },
    caption: 'Halo dari broadcast!'
  },
  {
    backgroundColor: '#ffffff', // opsional (untuk status)
    font: 'default', // opsional (untuk status)
    statusJidList: ['628xxx@s.whatsapp.net'], // daftar penerima status (WA Story)
    broadcast: true // aktifkan mode broadcast
  }
)
```

> Konten pesan dapat berupa:  
> `extendedTextMessage`, `imageMessage`, `videoMessage`, `voiceMessage`, dll.

🔗 [Lihat semua tipe konten pesan](https://baileys.whiskeyconnets.io/types/AnyRegularMessageContent.html)  
🔧 [Lihat semua opsi kirim pesan](https://baileys.whiskeyconnets.io/types/MiscMessageGenerationOptions.html)

🆔 Format ID broadcast: `12345678@broadcast`

### 🔍 Ambil Info Daftar Broadcast

```javascript
let bList = await conn.getBroadcastListInfo('1234@broadcast')
console.log(`Nama list: ${bList.name}, Penerima: ${bList.recipients}`)
```

## 🛠️ Menulis Fungsionalitas Kustom (Custom Functionality)

Baileys dirancang dengan arsitektur fleksibel dan dapat diperluas.  
Kamu **tidak perlu memodifikasi core** untuk membuat fitur baru — cukup tulis kode kamu dan gunakan API public yang tersedia.

Contoh:
```javascript
function kirimNotifikasiKeGrupSemua(grupList, pesan) {
  for (const jid of grupList) {
    conn.sendMessage(jid, { text: pesan })
  }
}
```

> 💡 Tips:
> Gunakan event `conn.ev.on()` untuk menangkap semua event penting seperti `messages.upsert`, `contacts.update`, `group-participants.update`, dll.

## 🐞 Mengaktifkan Log Debug WhatsApp

### 🔧 Cara Aktifkan Log `debug`

Untuk melihat log mentah dari WebSocket WhatsApp, kamu bisa aktifkan logger saat inisialisasi koneksi:

```javascript
import P from 'pino'

const conn = makeWAconnet({
  logger: P({ level: 'debug' }) // aktifkan level debug
})
```

> ⚠️ **Peringatan:**  
> Output `debug` sangat banyak! Gunakan hanya saat perlu troubleshooting atau eksplorasi fitur tersembunyi.

## 📡 Bagaimana WhatsApp Berkomunikasi Dengan Kita

> 💡 WhatsApp menggunakan enkripsi E2E yang kompleks. Untuk mengerti alurnya, kamu harus pelajari:  
> - [LibSignal Protocol](https://signal.org/docs/)  
> - [Noise Protocol](https://noiseprotocol.org/)  
> - Serialisasi berbasis protobuf dan format `WAMessage`.

### 📊 Contoh Kasus: Tracking Baterai Perangkat

Kalau kamu sudah mengaktifkan log `debug`, maka kamu akan bisa melihat traffic internal seperti ini:

```json
{
  "level": 10,
  "fromMe": false,
  "frame": {
    "tag": "ib",
    "attrs": {
      "from": "@s.whatsapp.net"
    },
    "content": [
      {
        "tag": "edge_routing",
        "attrs": {},
        "content": [
          {
            "tag": "routing_info",
            "attrs": {},
            "content": {
              "type": "Buffer",
              "data": [8, 2, 8, 5]
            }
          }
        ]
      }
    ]
  },
  "msg": "communication"
}
```

- Biasanya pesan-pesan `tag: ib` adalah **internal beacon** dari perangkat atau server.
- Kamu bisa meng-capture dan **parse buffer `data[]`** untuk melihat apakah itu info baterai, sinyal, perangkat, dll.

### 🧩 Struktur `frame` pada Pesan WhatsApp

Setiap pesan yang dikirim atau diterima via WebSocket WhatsApp menggunakan **struktur frame** yang terdiri dari tiga bagian utama:

| Komponen | Deskripsi |
|----------|-----------|
| `tag` | Menandakan jenis isi atau tujuan dari pesan, misal: `'message'`, `'iq'`, `'presence'`, `'call'`, `'receipt'` |
| `attrs` | Objek berisi pasangan key-value (atribut metadata) seperti ID, waktu, device, atau session info |
| `content` | Isi utama dari pesan, bisa berupa array node lain, buffer, atau objek data |

### ⚙️ Menangani Event `webconnet` / Low-Level CB Handler

Jika kamu ingin **intersep pesan mentah** dari WebSocket, gunakan callback `conn.ws.on()`:

```javascript
// semua pesan dengan tag 'edge_routing'
conn.ws.on('CB:edge_routing', (node) => {
  console.log(node)
})

// pesan dengan tag 'edge_routing' & id = abcd
conn.ws.on('CB:edge_routing,id:abcd', (node) => {
  console.log('Filter ID = abcd:', node)
})

// pesan dengan tag 'edge_routing', id = abcd, dan isi node pertama adalah 'routing_info'
conn.ws.on('CB:edge_routing,id:abcd,routing_info', (node) => {
  console.log('Match isi routing_info:', node)
})
```

> 🧠 Semua tag, atribut, dan isi `node` dikirim dalam format **WABinaryNode**.  
> Format node bisa kamu deskripsikan lewat `util.inspect(node, false, null, true)` kalau mau log dengan warna.

### 📡 Contoh Penggunaan Lanjutan

Misal kamu ingin memantau perubahan jaringan, edge routing, atau sinkronisasi status:

```javascript
conn.ws.on('CB:edge_routing', ({ tag, attrs, content }) => {
  if (content?.[0]?.tag === 'routing_info') {
    console.log('Routing Info Diterima:', content[0])
  }
})
```

Ini bisa berguna buat fitur:
- Status baterai perangkat
- Koneksi multi-device
- Debug distribusi trafik dan socket fallback

## 🌸 Arigatou ne~!

Kamu udah sampai di akhir dokumentasi~  
Semoga semua fitur dan fungsi yang kamu baca bisa bermanfaat buat project-mu~  
Kalau masih ada yang bikin bingung, langsung aja gabung ke grup WhatsApp buat tanya-tanya~ 🫶🏻✨

> 📖 Dokumentasi ini disusun karena gabut, semangat ngoding, dan jangan lupa makan 🍓

**💌 Kontak & Bantuan:**  
🧠 [GitHub](github.com/naruyaizumi)
📱 [Gabung grup WA](https://chat.whatsapp.com/J9DANHhVooxDslMY6Emjhi)

✨ Powered by: `Baileys` 🦄