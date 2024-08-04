const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@*Dilan R.*${pesan}\n`;
  let teks = `*𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 𝗣uto manco 𝗗𝗲 𝗠𝗿𝗱*\n\n${oi}\n`;
  for (const mem of participants) {
    teks += `ִ໋ღ ➤ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n Dilan 𝙱𝚘𝚝 🇦🇱`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
