module.exports = {
    name: 'ping',
    description: 'returns ping',
    args: false,
    permissions: 'SEND_MESSAGE',
    guildOnly: false,
    execute(message, args) {
        const delay = -(Date.now() - message.createdAt)
        message.channel.send(`**pong** *(DELAY: ${delay}ms)*`);
    },
};