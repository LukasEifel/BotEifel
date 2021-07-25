module.exports = {
    name: 'beep',
    description: 'returns boop',
    args: false,
    permissions: 'SEND_MESSAGE',
    guildOnly: false,
    usage: '[]',
    execute(message, args) {
        message.channel.send(`boop`)
    },
};