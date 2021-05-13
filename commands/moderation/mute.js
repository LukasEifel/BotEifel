module.exports = {
    name: 'mute',
    permissions: 'MANAGE_GUILD',
    asliases: ['m'],
    usage: '[mention]',
    async execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to mute them!`);
        }

        let role = message.guild.roles.cache.get('842002290478284810');
        let target = message.mentions.users.first();

        //if (target.roles.cache.has(role.id)) {
        await target.roles.remove(role);
        //} else {
        //  return message.reply(`you cannot mute a muted user!`);
        //}

        message.channel.send(`You wanted to mute: ${target.username}`);
    },
};
