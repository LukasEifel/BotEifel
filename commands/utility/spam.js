const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'spam',
    guildOnly: false,
    execute(message, args) {
        const client = require('../../index.js').client;

        if (!args[0]) return message.channel.send('**Enter a amount of spam messages to spam!**');
        if (!args[1]) return message.channel.send('**Enter a user to spam!**');

        message.channel.send(`${parseInt(args[1])} wird gespammt!`);

        console.log('[DEBUG] ' + parseInt(args[0]));
        console.log('[DEBUG] ' + args[1]);

        for (i = 0; i < parseInt(args[0]); i++) {
            client.users.cache.get(args[1]).send('I spam you!');
        }
    },
};