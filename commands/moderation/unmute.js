module.exports = {
    name: 'unmute',
    permissions: 'MANAGE_GUILD',
    asliases: ['um'],
    usage: '[mention]',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to unmute them!`);
        }

        let role = message.guild.roles.cache.find(role => role.name === 'Talkrecht');
        let taggedUser = message.mentions.users.first();

        if(!taggedUser.roles.cache.some(role => role.name === 'Talkrecht')) {
            taggedUser.roles.add(role);
        } else {
            message.reply(`${taggeduser.username} is already unmuted!`);
        }

        message.channel.send(`You wanted to unmute: ${taggeduser.username}`);
    },
};
