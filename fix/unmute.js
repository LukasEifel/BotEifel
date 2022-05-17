const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unmute')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        let reason = args.slice(1).join(' ');
        let user = msg.mentions.users.first();

        if (msg.mentions.users.size < 1) return msg.reply('you must mention someone to unmute them.');

        msg.guild.members.cache.get(user.id).voice.setMute(false);
        
        const embed = new Discord.MessageEmbed()
            .setColor(0x00FF00)
            .setTimestamp()
            .addField('Action:', 'Unmute')
            .addField('User:', `${user.tag} (${user.id})`)
            .addField('Moderator:', `${msg.author.tag}`);
        if (reason) {
            embed.addField('Reason:', reason);
        }
        msg.channel.send(embed);
    },
};