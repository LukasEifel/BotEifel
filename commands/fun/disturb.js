const mute = require("../moderation/mute");
const unmute = require("../moderation/unmute");

module.exports = {
    name: 'disturb',
    guildOnly: true,
    permissions: 'MANAGE_ROLES',
    execute(message, args, client) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to disturb them!`);
        }
        const taggedUser = message.mentions.users.first();

        while (client.running) {
            mute(message, args);
            setTimeout(() => {
                unmute(message, args)}, 2000)
        }

        message.channel.send(`You wanted to disturb: ${taggeduser.username}`);
    },
};