const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'png'],
    execute(message, args) {
        const Discord = require('./../../index.js').varToExport;

        const embed = new Discord.MessageEmbed();
        if(!message.mentions.users.size) {
            embed.setTitle(message.author.tag);
            embed.setImage(message.author.displayAvatarURL({ format: `png`, dynamic: true }));
            embed.setURL(message.author.displayAvatarURL({ format: `png`, dynamic: true }));
        } else {
            message.mentions.users.map(user => {
                embed.setTitle(user.tag);
                embed.setImage(user.displayAvatarURL({ format: 'png', dynamic: true}));
                embed.setURL(user.displayAvatarURL({ format: 'png', dynamic: true}));
            });
        }
        message.channel.send(embed);
    },
};