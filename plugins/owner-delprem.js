let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π»π° πΏπ΄πππΎπ½π° πππ΄ π³π΄ππ΄π΄ π΄π»πΈπΌπΈπ½π°π π³π΄ π»πΎπ ππππ°ππΈπΎπ πΏππ΄πΌπΈππΌ*`
if (!global.prems.includes(who.split`@`[0])) throw '*[βππππβ] π΄π» ππππ°ππΈπΎ πΈπ½πΆππ΄ππ°π³πΎ π½πΎ π΄π ππππ°ππΈπΎ πΏππ΄πΌπΈππΌ*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
let user = db.data.users[who]
user.premium = false
let textdelprem = `*[βππππβ] @${who.split`@`[0]} π°π·πΎππ° ππ° π½πΎ π΅πΎππΌπ° πΏπ°πππ΄ π³π΄ π»πΎπ ππππ°ππΈπΎπ πΏππ΄πΌπΈππΌ*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
