const { token } = require('../../config.json');
const client = require('../../index').client;

module.exports = {
    name: 'restart',
    run: async (client, msg, args) => {
        let isBotOwner = msg.author.id === '416248905450389507';

        if (!isBotOwner) return msg.reply('you are not my developer.');

        //console.log('[DEBUG] restart executed');

        await msg.channel.send('**[BOT] STATUS: OFFLINE**');
        process.exit();
    },
};