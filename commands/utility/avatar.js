module.exports = {
    name: 'avatar',
    description: 'send avatar-URL',
    aliases: ['icon', 'png'],
    execute(msg, args) {
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