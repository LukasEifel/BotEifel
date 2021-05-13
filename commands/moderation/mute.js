module.exports = {
    name: 'mute',
    permissions: 'MANAGE_GUILD',
    asliases: ['m'],
    usage: '[mention]',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to mute them!`);
        }

        let role = message.guild.roles.cache.find(role => role.name === 'Talkrecht');
        let taggedUser = message.mentions.users.first();

        if(taggedUser.roles.cache.some(role => role.name === 'Talkrecht')) {
            taggedUser.roles.remove(role.id);
        } else {
            message.reply(`${taggeduser.username} is already muted!`);
        }

        message.channel.send(`You wanted to mute: ${taggeduser.username}`);
    },
};
