const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'kick',
    description: 'returns boop',
    guildOnly: true,
    permissions: 'ADMINISTRATOR',
    usage: '[mention]',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**You do not have permissions to kick members! - [KICK_MEMBERS]**');
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('**I do not have permissions to kick members! - [KICK_MEMBERS]**');

        if (!args[0]) return message.channel.send('**Enter a user to kick!**');

        var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!kickMember) return message.channel.send('**User is not on the server!**');

        if (kickMember.id === message.member.id) return message.channel.send('**You cannot kick yourself! IDIOT!**');

        if (kickMember.user.bot) return message.channel.send('**Cannot kick a bot! This is my FAMILY!**');
        if (!kickMember.kickable) return message.channel.send('**Cannot kick this user!**');

        var reason = args.slice(1).join(' ');
        try {
          const sembed2 = new MessageEmbed()
            .setColor('RED')
            .setField('**You habe been kicked from ${message.guild.name}**')
            .setFooter(message.guild.name, message.guild.iconURL());
          kickMember.send(sembed2).then(() =>
            kickMember.kick()).catch(() => null);
          } catch {
            kickMember.kick();
          }
          if (reason) {
            var sembed = new MessageEmbed()
              .setColor('GREEN')
              .setDescription('**${kickMember.user.username}** has been kicked for ${reason}!');
            message.channel.send(sembed);
          } else {
            var sembed2 = new MessageEmbed()
              .setColor('GREEN')
              .setDescription('**${kickMember.user.username}** has been kicked!');
            message.channel.send(sembed2);
          }
    },
};
