const db = require('quick.db');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick'),
    async execute(msg, args) {
      let reason = args.slice(1).join(' ');
      let user = msg.mentions.users.first();

      if (msg.mentions.users.size < 1) return msg.reply('you must mention someone to kick them.');

      if (!user) return msg.channel.send('**User is not on the server.**');

      if (user.id === msg.client.user.id) return msg.channel.send('**You cannot kick me. Why should I kick myself?**');
      if (user.id === msg.author.id) return msg.channel.send('**You cannot kick yourself. IDIOT!**');

      if (user.bot) return msg.channel.send('**Cannot kick a bot! This is my FAMILY!**');
      if (!user.kickable) return msg.channel.send('**Cannot kick this user.**');

      user.kick();

      const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .addField('Action:', 'Kick')
            .addField('User:', `${user.tag} (${user.id})`)
            .addField('Moderator:', `${msg.author.tag}`);
        if (reason) {
          embed.addField('Reason:', reason);
        }

      const dmEmbed = new msgEmbed()
        .setColor(0xFF0000)
        .setField('**You habe been kicked from ${msg.guild.name}**')
        .setFooter(msg.guild.name, msg.guild.iconURL());

      const welcomeChannel = msg.client.channels.cache.find(channel => channel.name === 'willkommen' || channel.name === 'welcome');
      msg.channel.send(embed);
      user.send(dmEmbed);
    },
};