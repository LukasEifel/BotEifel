const avatar = require(`./avatar`);

module.exports = {
    name: 'user-info',
    description: '',
    execute(msg, args) {
        avatar.execute(msg, args);
        if(!msg.mentions.users.size) {
            msg.channel.send(`Username: ${msg.author.username}\n` +
            `Nickname: ${msg.author}\n` +
            `Tag: ${msg.author.tag}\n` +
            `ID: ${msg.author.id}`);
        } else {
            msg.channel.send(`Username: ${msg.mentions.members.first().user.username}\n` +
            `Nickname: ${msg.mentions.members.first()}\n` +
            `Tag: ${msg.mentions.members.first().user.tag}\n` +
            `ID: ${msg.mentions.members.first().id}`);
        }
    },
};