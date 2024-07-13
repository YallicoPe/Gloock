const handler = async (m, {conn}) => {
  m.reply(global.Donar);
};
handler.command = /^(Donar)$/i;
export default handler;
global.Donar = `
𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗼𝘁 🐉

*Deseas Donar Al Staff De Dragon Bot 🐉?*

> Puedes Hacerlo Desde Paypal :
https://www.paypal.me/YallicoPe

> Puedes Hacerlo Desde Yape Peru :
+51 981 983 121

> Cristhofer Rojas / Titular
`;