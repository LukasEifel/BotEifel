const { Console } = require('console');
const { messageEmbed, SystemChannelFlags } = require('discord.js');

module.exports = {
    name: 'spam',
    description: 'Spam a discord user of your choice',
    guildOnly: false,
    usage: '[amount] [mention]',
    args: true,
    cooldown: 0,
    execute(msg, args) {
        const client = require('../../bot').client;

        //console.log("[DEBUG] args[0]: " + args[0]);
        //console.log("[DEBUG] args[1]: " + args[1]);

        if (args.length === 2) {
            for (i = 0; i < parseInt(args[0]); i++) {
                client.users.cache.get(args[1].replace(/[^0-9]/g, '')).send('SPAM');
            }
        } else {
            for (i = 0; i < parseInt(args[0]); i++) {
                let spamMsg = "";
                spamMsg = args.join(" ");
                spamMsg = spamMsg.replace(args[0], "");
                spamMsg = spamMsg.replace(args[1], "");
                //console.log("[DEBUG] spamMsg: "+ spamMsg);
                client.users.cache.get(args[1].replace(/[^0-9]/g, '')).send(spamMsg);
            }
        }
        msg.channel.send(`${msg.mentions.users.first().username} wird gespammt. Herzlichen Glückwunsch!`);
    },
};