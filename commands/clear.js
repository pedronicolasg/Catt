const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const embedErro = new Discord.MessageEmbed()
    .setTitle('PERMISSÃO')
    .setColor('#FF0000')
    .setDescription(`VOCÊ NÃO TEM PERMISSÃO PARA USAR ESTE COMANDO!`)
    .setFooter('**SOMENTE USUÁRIOS QUE PODEM MANUSEAR MENSAGENS!**')
  

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(embedErro);

  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.reply("Forneça um número de até 99 mesagens a serem excluídas");

  const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1 });

  message.channel
    .bulkDelete(fetched)

    const embedmsg = new Discord.MessageEmbed()
    .setTitle('LIMPO')
    .setColor('#00FF19')
    .setDescription(`${args[0]} mensagens limpas no chat`)
    
  message.channel.send(embedmsg)
    .catch(error => concole.log(`Não foi possível deletar mensagens devido a: ${error}`))

}