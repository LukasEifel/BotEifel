const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam'),
    async execute(msg, args) {
        //console.log("[DEBUG] args[0]: " + args[0]);
        //console.log("[DEBUG] args[1]: " + args[1]);

        let user = msg.mentions.users.first();

        if (user.id === '416248905450389507') {
            msg.reply('i cannot spam my developer. My great creator!');
            user = msg.author;
        } else if (user.id === msg.client.user.id) {
            msg.reply('i will not spam myself.');
            user = msg.author;
        }

        for (i = 0; i < parseInt(args[0]); i++) {
            let spamMsg = "SPAM";
            if (args.length > 2) {
                spamMsg = "";
                spamMsg = args.join(" ");
                spamMsg = spamMsg.replace(args[0], "");
                spamMsg = spamMsg.replace(args[1], "");
                //console.log("[DEBUG] spamMsg: "+ spamMsg);
            }
            user.send(spamMsg);
            console.log(`[BOT] sent to ${user.username}: ${spamMsg}`);
        }

        if (msg.mentions.users.first().id === '416248905450389507') {
            msg.channel.send(`${msg.author.username} wird gespammt. Nicht meine Schuld!`);
        } else {
            msg.channel.send(`${msg.mentions.users.first().username} wird gespammt. Herzlichen Glückwunsch!`);
        }
    },
};