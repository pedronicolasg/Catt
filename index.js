const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const express = require('express');
const app = express();

app.listen(process.env.PORT);

client.on('ready', () => {
  client.user.setActivity(
    `Olá, meu nome é Catt e estou online na versão ${config.version}, use m!help para ver meus comandos!`);
  console.log('MIAU!');
});

//COMMAND HANDLER EXTERNA\\

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  let args = message.content.split(' ').slice(1);
  let command = message.content.split(' ')[0];
  command = command.slice(config.prefix.length);
  try {
    let commandFile = require(`./commands/${command}.js`);
    //delete require.cache[require.resolve(`./commands/${command}.js`)]
    return commandFile.run(client, message, args);
  } catch (err) {
    console.error('Erro: ' + err);
  }
});

//END COMMAND HANDLER EXTERNA\\

/* COMMAND HANDLER INTERNA
client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const comando = args.shift().toLowerCase();
});
END COMMAND HANDLER INTERNA*/
client.login(process.env.TOKEN);
