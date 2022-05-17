const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        let isBotOwner = msg.author.id === '416248905450389507';

        if (!isBotOwner) return msg.reply('you are not my developer.');

        msg.channel.send('**[BOT] STATUS: OFFLINE**')
            .then(m => {
                client.destroy();
            });
    },
};