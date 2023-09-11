/*const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { MessageEmbed } = require('discord.js');
const { owners_id, prefix } = require('../../config.json')



//exports.run = async (client, message, args, color) => {
  module.exports={
    name: 'help',
    description : 'bot-help',
    execute(message, args) {
let prefix = '!';
const version= '1.0.0';
const author = 'Doodle';
  if (!args[0]) {
    //let module = client.helps.array();
    //if(!owners_id.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new MessageEmbed()
    .setColor('#990045')
    .setAuthor(author + ' Commands List', `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`  )
    .setDescription(`\nTo check the command usage, type \`${prefix}help <commands>\`\n`)
    .setFooter(`Don't include <> or [], it's mean <> is required and [] is optional | ${author}, v${version}`)
    /*for (const mod of module) {
      embed.addField(`**${mod.name}**`, mod.cmds.map(x => `\`${x}\``).join(', '));
    }*/
/*    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = `${command.help.name}`;
      let desc = command.help.description;
      let aliases = command.conf.aliases;
      let usage = `${prefix}${command.help.usage}`;

      let embed = new MessageEmbed()
      .setThumbnail('https://twemoji.maxcdn.com/2/72x72/2753.png') 
      .setTitle(`Command: ${name}`) 
      .addField('📝 | Description', desc)
      .addField('✂️ | Aliases', aliases[0] ? `${aliases.join(`, `)}` : `No aliases`)
      .addField('🔑 | Usage', usage)
      .addField('📰 | Remind', `Hooks such as [] or <> are not to be used when using commands.`) 
      .setColor(color).setFooter(`Request by: ${message.author.tag} | Doodle v 1.0.0`) 
      return message.channel.send(embed);
    }
    if (!client.commands.has(cmd) || !client.commands.get(client.aliases.get(cmd))) {
			const xembed = new MessageEmbed()
			.setColor('#FF1000')
			.setTitle('I don\'t have command like this');
			const search = client.commands.keyArray().filter(x => x.includes(args[0])).map(x => `▫ __**${x}**__`);
			search.length > 0 ? xembed.setDescription('**Are you looking for this? :**\n' + search.join('\n')) : undefined;
			return message.channel.send(xembed);
    } 
    
  }
}

}
*//*
exports.conf = {
    aliases: ['h', 'cmds', 'cmdlist'],
    cooldown: "5"
}

exports.help = {
    name: 'help',
    description: 'Show all command list',
    usage: 'help [command]'
}*/