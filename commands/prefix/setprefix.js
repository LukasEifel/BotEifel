const prefix = require('discord-prefix');

module.exports = {
    name: 'setprefix',
    guildOnly: true,
    args: true,
    permissions: 'ADMINISTRATOR',
    execute(msg, args) {
        try {
            const guildId = msg.guild.id;
            const guildPrefix = args[0];

            prefix.setPrefix(guildPrefix, guildId);

            msg.reply(`the prefix for this bot is now ${guildPrefix}`);
        } finally {
            
        }
    },
};