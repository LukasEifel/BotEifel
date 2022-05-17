const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        let amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return msg.reply('that doesn\'t seem to be a valid number.');
        } else if (amount < 2 || amount > 100) {
            return msg.reply('you need to input a number between 2 and 100.');
        }

        msg.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msg.channel.send('there was an error trying to clear messages in this channel.');
        });
    },
};