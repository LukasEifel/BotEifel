module.exports = {
    name: 'disturb',
    permissions: 'MUTE_MEMBERS',
    execute(msg, args) {
        let amount = parseInt(args[0]);
        let user = msg.mentions.users.first();

        if (msg.mentions.users.size < 1) return msg.reply('you must mention someone to disturb them.');

        if (user.id === '416248905450389507') return msg.reply('i cannot disturb my developer.');

        msg.channel.send(`**${user.tag}, möge der Spaß beginnen!**`);

        for (i = 0; i < amount; i++) {
            var number = Math.floor(Math.random() * 4) + 1;

            console.log("[DEBUG] " + number);
            if (number === 1) msg.guild.members.cache.get(user.id).voice.setMute(false);
            if (number === 2) msg.guild.members.cache.get(user.id).voice.setMute(true);
            if (number === 3) msg.guild.members.cache.get(user.id).voice.setDeaf(false);
            if (number === 4) msg.guild.members.cache.get(user.id).voice.setDeaf(true);
        }

        msg.guild.members.cache.get(user.id).voice.setMute(false);
        msg.guild.members.cache.get(user.id).voice.setDeaf(false);
    },
};