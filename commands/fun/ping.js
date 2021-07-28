module.exports = {
    name: 'ping',
    description: 'returns ping',
    args: false,
    permissions: 'SEND_MESSAGE',
    guildOnly: false,
    execute(message, args) {
        message.channel.send(`pong`);
    },
};