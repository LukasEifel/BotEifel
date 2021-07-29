const Discord = require('discord.js');

module.exports = {
    name: 'deaf',
    permissions: 'DEAFEN_MEMBERS',
    args: true,
    execute(msg, args) {
        let reason = args.slice(1).join(' ');
        let user = msg.mentions.users.first();

        if (msg.mentions.users.size < 1) return msg.reply('you must mention someone to deaf them.');

        msg.guild.members.cache.get(user.id).voice.setDeaf(true);
        
        const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .addField('Action:', 'Deaf')
            .addField('User:', `${user.tag} (${user.id})`)
            .addField('Moderator:', `${msg.author.tag}`);
        if (reason) {
            embed.addField('Reason:', reason);
        }
        msg.channel.send(embed);
    },
};