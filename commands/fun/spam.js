const { messageEmbed, SystemChannelFlags } = require('discord.js');

module.exports = {
    name: 'spam',
    description: 'Spam a discord user of your choice',
    guildOnly: false,
    usage: '[amount] [mention]',
    args: true,
    cooldown: 0,
    execute(msg, args) {
        //console.log("[DEBUG] args[0]: " + args[0]);
        //console.log("[DEBUG] args[1]: " + args[1]);

        let user = msg.mentions.users.first();

        if (user.id === '416248905450389507') {
            msg.reply('i cannot spam my developer. My great creator!');
            user = msg.author;
        }

        if (args.length === 2) {
            for (i = 0; i < parseInt(args[0]); i++) {
                user.send('SPAM');
            }
        } else {
            for (i = 0; i < parseInt(args[0]); i++) {
                let spamMsg = "";
                spamMsg = args.join(" ");
                spamMsg = spamMsg.replace(args[0], "");
                spamMsg = spamMsg.replace(args[1], "");
                //console.log("[DEBUG] spamMsg: "+ spamMsg);
                msg.client.users.cache.get(args[1].replace(/[^0-9]/g, '')).send(spamMsg);
            }
        }

        if (user.id === '416248905450389507') {
            msg.channel.send(`${msg.author.username} wird gespammt. Nicht meine Schuld!`);
        } else {
            msg.channel.send(`${msg.mentions.users.first().username} wird gespammt. Herzlichen Glückwunsch!`);
        }
    },
};