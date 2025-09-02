const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 18) {
console.error(
`\n❌ Oops! Versi Node.js kamu terlalu lawas...\n` +
`   Diperlukan: Node.js v18 atau lebih tinggi\n` +
`   Saat ini: v${process.versions.node}\n\n` +
`   🚀 Ayo upgrade sekarang biar gak ketinggalan zaman!\n`
)
process.exit(1)
}
