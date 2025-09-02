# 🌌 zerobail - Baileys Mod by Zero-StarX  

![Anime Banner](https://e0.pxfuel.com/wallpapers/739/185/desktop-wallpaper-anime-knight-girl-sword-feathers-armor-long.jpg)  

<p align="center">
  <a href="https://github.com/Zero-StarX/baileys-new"><img src="https://img.shields.io/badge/GitHub-Zero--StarX-black?logo=github&style=for-the-badge" /></a>
  <a href="https://www.npmjs.com/package/zerobail"><img src="https://img.shields.io/npm/v/zerobail?color=red&logo=npm&style=for-the-badge" /></a>
  <a href="https://www.whatsapp.com"><img src="https://img.shields.io/badge/WhatsApp-Bot-green?logo=whatsapp&style=for-the-badge" /></a>
</p>

---

## ✨ ZeroBail?
**ZeroBail** adalah library modifikasi dari [whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys)  
yang udah di-upgrade sama **ZeroStarX** biar lebih gampang bikin WhatsApp Bot full fitur.  

🚀 Fitur utama:
- ✅ Buttons (type 1, list, reply, reply list section)  
- ✅ Kirim media (gambar, video, audio, ptt)  
- ✅ Newsletter (add, follow, delete)  
- ✅ Dibangun di atas `whiskeysockets/baileys` versi terbaru  

## Install

Install in package.json:
```json
"dependencies": {
    "baileys": "npm:zerostarx/zerobail"
}
```
or install in terminal:
```
npm install baileys@npm:zerostarx/zerobail
```

Then import the default function in your code:
```ts 
// type esm
import makeWASocket from 'baileys'
```

```js
// type cjs
const { default: makeWASocket } = require("baileys")
```

## ✨ Fitur Tambahan & Peningkatan

<details>
  <summary>📌 Klik untuk lihat daftar fitur</summary>

| Fitur                                | Deskripsi                                                                                                     |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| 💬 **Kirim Pesan ke Channel**        | Mendukung pengiriman teks & media langsung ke channel WhatsApp.                                                |
| 🔘 **Tombol & Pesan Interaktif**     | Support button message & pesan interaktif di WhatsApp Messenger & WhatsApp Business.                           |
| 🖼️ **Kirim Album (Grouped Media)**  | Bisa kirim banyak gambar sekaligus dalam bentuk album, lebih rapi & keren.                                     |
| 👥 **Group dengan LID Support**      | Dukungan penuh untuk group `@lid`, kompatibel dengan format terbaru WhatsApp.                                  |
| 🤖 **Ikon AI di Pesan**              | Bisa custom tampilan pesan dengan ikon AI biar lebih modern.                                                   |
| 🖼️ **Foto Profil Full-Size**         | Upload foto profil tanpa crop, kualitas full & lebih bagus.                                                    |
| 🔑 **Custom Pairing Code**           | Bisa bikin pairing code custom sesuai keinginan, lebih praktis & aman.                                         |
| 🛠️ **Perbaikan Libsignal**           | Log lebih bersih & informatif, bikin proses development lebih nyaman.                                          |

</details>

ℹ️ Fitur lain akan terus ditambahkan di update berikutnya 🚀

### 📢 Newsletter Management

<details>
<summary>📌 Klik untuk lihat contoh kode</summary>

- **Ambil info newsletter**
```ts
const metadata = await sock.newsletterMetadata("invite", "xxxxx")
// atau
const metadata = await sock.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```
- **Update deskripsi newsletter**
```ts
await sock.newsletterUpdateDescription("abcd@newsletter", "Deskripsi Baru")
```
- **Update nama newsletter**
```ts
await sock.newsletterUpdateName("abcd@newsletter", "Nama Baru")
```
- **Update foto profil newsletter**
```ts
await sock.newsletterUpdatePicture("abcd@newsletter", buffer)
```
- **Hapus foto profil newsletter**
```ts
await sock.newsletterRemovePicture("abcd@newsletter")
```
- **Unmute notifikasi newsletter**
```ts
await sock.newsletterUnmute("abcd@newsletter")
```
- **Mute notifikasi newsletter**
```ts
await sock.newsletterMute("abcd@newsletter")
```
- **Buat newsletter baru**
```ts
const metadata = await sock.newsletterCreate("Nama Newsletter")
console.log(metadata)
```
- **Hapus newsletter**
```ts
await sock.newsletterDelete("abcd@newsletter")
```
- **Follow newsletter**
```ts
await sock.newsletterFollow("abcd@newsletter")
```
- **Unfollow newsletter**
```ts
await sock.newsletterUnfollow("abcd@newsletter")
Kirim reaction ke pesan newsletter
```
```ts
// jid, id pesan & emoticon
// Cara dapat ID: copy URL pesan dari channel
// Contoh: https://whatsapp.com/channel/xxxxx/175
// Angka terakhir adalah ID
const id = "175"
await sock.newsletterReactMessage("abcd@newsletter", id, "🥳")
```
</details>

### Button and Interactive Message Management

<details>
<summary style="font-weight: bold; cursor: pointer; padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 5px;">Show Examples</summary>
<div style="padding: 10px 15px; background: #f9f9f9; border: 1px solid #eee; border-top: none; border-radius: 0 0 5px 5px;">

- **To send button with text**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```
- **To send button with image**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "Hi it's button message with image",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })

```
- **To send button with video**
```ts
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "Hi it's button message with video",
    footer: 'Hello World',
    buttons,
    headerType: 1
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

- **To send interactive message**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with image**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send interactive message with video**
```ts
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "this is the caption",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```
- **To send list interactive**
```ts
const interactiveButtons = [
  {
    name: "single_select",
    buttonParamsJson: JSON.stringify({
      title: "message",
      sections: [
        {
          title: "title",
          highlight_label: "label",
          rows: [
            {
              header: "HEADER",
              title: "TITLE",
              description: "DESCRIPTION",
              id: "YOUR ID"
            },
            {
              header: "HEADER",
              title: "TITLE",
              description: "DESCRIPTION",
              id: "YOUR ID"
            }
          ]
        }
      ]
    })
  }
];

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
};

await sock.sendMessage(id, interactiveMessage, { quoted: null });
```

</div>
</details>

### 📸 Send Album Message
Kirim banyak media (foto/video) sekaligus dalam 1 pesan (album).

<details>
<summary>📌 Klik untuk lihat contoh kode</summary>

```ts
// Media bisa berupa URL, buffer, atau path lokal
const media = [
  {
    image: { url: "https://example.com/image.jpg" }
  },
  {
    image: await getBuffer("https://example.com/image.jpg")
  },
  {
    video: { url: "https://example.com/video.mp4" }
  }
]

await sock.sendMessage(id, { album: media, caption: "testing send album" }, { quoted: null })
```
</details>

- **🤖 AI Message Icon Customization**
Tambah ikon AI di pesan WhatsApp untuk bikin tampilan lebih modern.

<details>
<summary>📌 Klik untuk lihat contoh kode</summary>

```ts
// Aktifkan ikon AI cukup dengan menambahkan parameter "ai: true"
await sock.sendMessage(id, { text: "Hello World", ai: true });
```

</details>

- **🔑 Custom Pairing Code Generation**
Bikin pairing code WhatsApp sesuai keinginan (misalnya 8 digit alfanumerik)

<details>
<summary>📌 Klik untuk lihat contoh kode</summary>

```ts
if (usePairingCode && !sock.authState.creds.registered) {
    const phoneNumber = await question('Please enter your mobile phone number:\n');
    // Definisikan pairing code custom (contoh: 8 karakter)
    const customPairingCode = "ZEROSTR";
    const code = await sock.requestPairingCode(phoneNumber, customPairingCode);
    console.log(`Your Pairing Code: ${code?.match(/.{1,4}/g)?.join('-') || code}`);
}
```

</details>

## 🐛 Melaporkan Masalah
Kalau kamu nemu bug atau kendala saat menggunakan repository ini, silakan langsung buka [issue baru](https://github.com/nstar-y/Bail/issues) di sini ya. 🙏

## 📝 Catatan
Selain modifikasi yang udah disebutkan di atas, semua fitur lainnya masih sama persis dengan repository original.  
Cek repo asli di sini 👉 [WhiskeySockets](https://github.com/WhiskeySockets/Baileys)


**__Created By Zero - StarX ✨__**
