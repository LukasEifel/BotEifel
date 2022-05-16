const client = require('../../index').client;

module.exports = {
    name: 'restart',
    execute(msg, args) {
        let isBotOwner = msg.author.id === '416248905450389507';

        if (!isBotOwner) return msg.reply('you are not my developer.');

        //console.log('[DEBUG] restart executed');

        msg.channel.send('**[BOT] STATUS: OFFLINE**');
        process.exit();
    },
};