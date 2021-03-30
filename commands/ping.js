const Discord = require("discord.js");

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const m = await message.channel.send(`  `)
    
const embedUP = new Discord.MessageEmbed()
    .setTitle('PING')
    .setColor('#f7931e')
    .setDescription(`:ping_pong: **|** ${message.author}\n:satellite: **|** **API Ping:** \`${m.createdTimestamp - message.createdTimestamp}ms\``)
    .setImage('https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/o-que-e-html.png')
    .setFooter('STATUS DO DISCORD')

    message.channel.send(embedUP)
    m.delete();

    

}