let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya sudah takdir nya ','Mungkin lu salah dia ga gitu','Mungkin ga benar deh','F for respect','Lah mana saya tau kok nanya ke saya','Saya ga tau','hmm iyakah ? Gw aj baru tau','nipu lu ya'])}
`.trim(), m)
}
handler.help = ['mengapa <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^mengapa$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
