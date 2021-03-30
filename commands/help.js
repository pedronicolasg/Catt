const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const embedUP = new Discord.MessageEmbed()
    .setTitle('HELP')
    .setColor('#4eae57')
    .setDescription(
      `

      m!clear (NUMBER) - Limpa mensagens no chat, limite: 99

      m!ping - Mostra o ping da API do discord

      m!uptime - Mostra o tempo que o bot esta ligado


      `
    )
    .setFooter('=help')

    message.channel.send(embedUP)
}