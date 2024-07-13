import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝚈𝚊𝚕𝚕𝚒𝚌𝚘 𝙱𝚘𝚝 🇦🇱', body: '𝚈𝚊𝚕𝚕𝚒𝚌𝚘 𝙱𝚘𝚝 🇦🇱', sourceUrl: `https://instagram.com/yallico.owner`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
