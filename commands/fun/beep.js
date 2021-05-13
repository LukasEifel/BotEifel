module.exports = {
    name: 'beep',
    description: 'returns boop',
    execute(message, args) {
        message.channel.send(`boop`)
    },
};