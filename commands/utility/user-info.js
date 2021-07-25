const avatar = require("./avatar");

module.exports = {
    name: 'user-info',
    description: '',
    execute(message, args) {
        avatar.execute(message, args);
        if(!message.mentions.users.size) {
            message.channel.send(`Username: ${message.author.username}\n` +
            `Nickname: ${message.author}\n` +
            `Tag: ${message.author.tag}\n` +
            `ID: ${message.author.id}`);
        } else {
            message.channel.send(`Username: ${message.mentions.members.first().user.username}\n` +
            `Nickname: ${message.mentions.members.first()}\n` +
            `Tag: ${message.mentions.members.first().user.tag}\n` +
            `ID: ${message.mentions.members.first().id}`);
        }
    },
};