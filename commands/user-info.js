const avatar = require(`./avatar`);
const moment = require('moment');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info'),
    async execute(msg, args) {
        avatar.execute(msg, args);
        
        let user;
        if (msg.mentions.users.first()) {
            user = msg.mentions.users.first();
        } else {
            user = msg.author;
        }
        const member = msg.guild.member(user);

        msg.channel.send(`Username: ${user.username}\n` +
        `Nickname: ${member.nickname}\n` +
        `Tag: ${user.tag}\n` +
        `ID: ${user.id}\n` +
        `Joined at: ${moment.utc(user.joinedAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}\n` +
        `Account created on: ${moment.utc(user.createdAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}\n` +
        `Roles: ${user.roles ? user.roles.map(r => `${r}`).join(' | ') : ""}`);
    },
};