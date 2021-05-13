module.exports = {
    name: 'kick',
    description: 'returns boop',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to kick them!`);
        }
        const target = message.guild.member(message.mentions.users.first());
        let kReason = args.join(' ').slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS"))
          return message.reply('you don\'t have the permission to kick members!');
        let kickEmbed = new Discord.MessageEmbed()
          .setDescription('Kick');
          .setColor('#ff750c');
          .setThumbnail(target.user.avatarURL());
          .setField(`User: ${target.username}, ID: ${target.id}`);
        message.guild.member(target).kick('FORCE!');
        message.delete();
        message.channel.send(kickEmbed);
    },
};
