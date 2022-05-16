const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('send avatar-URL'),
    async execute(msg, args) {
        const Discord = require(`discord.js`);

        const embed = new Discord.MessageEmbed();
        if(!msg.mentions.users.size) {
            embed.setTitle(msg.author.tag);
            embed.setImage(msg.author.displayAvatarURL({ format: `png`, dynamic: true }));
            embed.setURL(msg.author.displayAvatarURL({ format: `png`, dynamic: true }));
        } else {
            msg.mentions.users.map(user => {
                embed.setTitle(user.tag);
                embed.setImage(user.displayAvatarURL({ format: `png`, dynamic: true}));
                embed.setURL(user.displayAvatarURL({ format: `png`, dynamic: true}));
            });
        }
        msg.channel.send(embed);
    },
};