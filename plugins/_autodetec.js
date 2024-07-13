let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀́ 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘼:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙃𝘼𝙎 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼𝙎 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🇦🇱 𝘼𝙃𝙊𝙍𝘼 *${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎' : '𝙏𝙊𝘿𝙊𝙎'}* 𝙋𝙐𝙀𝘿𝙀 𝙀𝘿𝙄𝙏𝘼𝙍 𝙇𝘼 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 *${m.messageStubParameters[0] == 'on' ? '𝙀𝙎𝙏𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 🇦🇱' : '𝙀𝙎𝙏𝘼 𝘼𝘽𝙄𝙀𝙍𝙏𝙊 🇦🇱'}*\n ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍' : '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎'} 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `𝙶𝚕𝚘𝚌𝚌𝚔 𝙱𝚘𝚝 𝙰𝚗𝚞𝚗𝚌𝚒𝚊 𝚄𝚗 𝙽𝚞𝚎𝚟𝚘 𝙰𝚍𝚖𝚒𝚗 𝙴𝚗 𝙴𝚕 𝙶𝚛𝚞𝚙𝚘 🇦🇱\n\n𝙽𝚞𝚎𝚟𝚘 𝙰𝚍𝚖𝚒𝚗 : @${m.messageStubParameters[0].split`@`[0]}𝙻𝚎 𝙾𝚝𝚘𝚛𝚐𝚘 𝙰𝚍𝚖𝚒𝚗 : ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `𝙶𝚕𝚘𝚌𝚌𝚔 𝙱𝚘𝚝 𝙰𝚗𝚞𝚗𝚌𝚒𝚊 𝚄𝚗 𝙰𝚍𝚖𝚒𝚗 𝙼𝚎𝚗𝚘𝚜 𝙴𝚗 𝙴𝚕 𝙶𝚛𝚞𝚙𝚘 🇦🇱\n\n𝙰𝚍𝚖𝚒𝚗 𝙼𝚎𝚗𝚘𝚜 : @${m.messageStubParameters[0].split`@`[0]} 𝙻𝚎 𝚀𝚞𝚒𝚝𝚘 𝙰𝚍𝚖𝚒𝚗 : ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘾𝘼𝙈𝘽𝙄𝙊 𝙇𝘼𝙎 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙀𝙎 𝘼 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝙊́* 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇.`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
