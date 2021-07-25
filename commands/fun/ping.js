module.exports = {
    name: 'ping',
    description: 'returns ping',
    args: false,
    permissions: 'SEND_MESSAGE',
    guildOnly: false,
    usage: '[]',
    execute(message, args) {
        message.channel.send(`pong`);
    },
};