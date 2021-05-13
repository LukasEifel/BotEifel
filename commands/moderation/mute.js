const db = require('quick.db');

module.exports = {
    name: 'mute',
    permissions: 'MANAGE_GUILD',
    asliases: ['m'],
    usage: '[mention]',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply(`you need to tag a user in order to mute them!`);
        }

        let muterole;
        dbmute = db.fetch('muterole_${message.guild.id}');
        let role = message.guild.roles.cache.find(role => role.name === 'Talkrecht');
        let taggedUser = message.mentions.users.first();

        if (!message.guild.roles.cache.has(dbmute)) {
          muterole = role;
        } else {
          muterole = message.guild.roles.cache.has(dbmute);
        }

        if (!muterole) {
              try {
                  muterole = message.guild.roles.create({
                      data: {
                          name: "Talkrecht",
                          color: "#514f48",
                          permissions: []
                      }
                  })
                  message.guild.channels.cache.forEach(async (channel) => {
                      await channel.createOverwrite(muterole, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false,
                          SPEAK: false,
                          CONNECT: false,
                      })
                  })
              } catch (e) {
                  console.log(e);
              }
        };

        if(taggedUser.roles.cache.some(role => role.name === 'Talkrecht')) {
            taggedUser.roles.remove(role.id);
        } else {
            message.reply(`${taggeduser.username} is already muted!`);
        }

        message.channel.send(`You wanted to mute: ${taggeduser.username}`);
    },
};
