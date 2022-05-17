const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Interaction } = require('discord.js');
const { MessageEmbed, MessageMentions: { USERS_PATTERN } } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar-URL of a user!'),
    async execute(client, interaction) {

        function getUserFromMention(mention) {
            const matches = mention.matchAll(USERS_PATTERN).next().value;
        
            if (!matches) return;
        
            const id = matches[1];
            return client.users.cache.get(id);
        }


        const embed = new MessageEmbed();
        if(!interaction.mentions.user) {
            embed.setTitle(msg.author.tag);
            embed.setImage(msg.author.displayAvatarURL({ format: 'png', dynamic: true }));
            embed.setURL(msg.author.displayAvatarURL({ format: 'png', dynamic: true }));
        } else {
            interaction.mentions.users.map(user => {
                embed.setTitle(user.tag);
                embed.setImage(user.displayAvatarURL({ format: 'png', dynamic: true}));
                embed.setURL(user.displayAvatarURL({ format: 'png', dynamic: true}));
            });
        }
        await interaction.reply({ embed: [embed] });
    },
};