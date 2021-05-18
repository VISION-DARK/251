let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [0885618376962]
╰────

╭─「 Donasi • Non Pulsa 」
│ • OVO, Dana [0895618376962]
│ • https://saweria.co/Fakhrul251
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
