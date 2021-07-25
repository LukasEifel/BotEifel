const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'png'],
    execute(message, args) {
        const Discord = require('./../../index.js').varToExport;

        const embed = new Discord.MessageEmbed();
        if(!message.mentions.users.size) {
            embed.setImage(message.author.displayAvatarURL({ format: `png`, dynamic: true }));
        }
        const avatarList = message.mentions.users.map(user => {
            embed.setImage(user.displayAvatarURL({ format: 'png', dynamic: true}));
        });
        message.channel.send(embed);
        message.channel.send(avatarList);
    },
};