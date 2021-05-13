module.exports = {
    name: 'kick',
    description: 'returns boop',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to kick them!`);
        }
        const member = message.mentions.users.first();
        if (member.id != 416248905450389507) {
            message.guild.members.kick(member);
            return message.channel.send(`You wanted to kick: ${member.username}`);
        } else {
            console.reply(`you can't kick the developer of this bot!`);
        }
    },
};