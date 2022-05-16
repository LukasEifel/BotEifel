const client = require('../../index').client;

module.exports = {
    name: 'shutdown',
    execute(msg, args) {
        let isBotOwner = msg.author.id === '416248905450389507';

        if (!isBotOwner) return msg.reply('you are not my developer.');

        msg.channel.send('**[BOT] STATUS: OFFLINE**')
            .then(m => {
                client.destroy();
            });
    },
};