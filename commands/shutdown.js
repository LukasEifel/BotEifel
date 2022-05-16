const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown'),
    async execute(msg, args) {
        let isBotOwner = msg.author.id === '416248905450389507';

        if (!isBotOwner) return msg.reply('you are not my developer.');

        msg.channel.send('**[BOT] STATUS: OFFLINE**')
            .then(m => {
                client.destroy();
            });
    },
};