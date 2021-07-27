const { Console } = require('console');
const { messageEmbed, SystemChannelFlags } = require('discord.js');

module.exports = {
    name: 'spam',
    guildOnly: false,
    usage: '[amount] [mention]',
    args: true,
    cooldown: 0,
    execute(msg, args) {
        const client = require('../../bot').client;

        //console.log("[DEBUG] amount: " + args[0]);
        //console.log("[DEBUG] id: " + args[1]);

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
                //console.log(spamMsg);
                client.users.cache.get(args[1].replace(/[^0-9]/g, '')).send(spamMsg);
            }
        }
        msg.channel.send(msg.mentions.users.first().name + ` wird gespammt! Herzlichen Glückwunsch!`);
    },
};