module.exports = {
    name: 'server',
    execute(message, args) {
        message.channel.send(`This server´s name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};