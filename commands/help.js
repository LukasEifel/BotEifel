const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Interaction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Some help to user!'),
    async execute(interaction) {
        try {
            await interaction.deferReply().catch((_) => {});

            const dirs = [...new Set(client.commands.map((c) => c.directory))];

            const helpArray = dirs.map((d) => {
                const getCmd = client.commands
                    .filter((c) => c.directory === d)
                    .map((c) => {
                        return {
                            name: c.name || 'Undefined',
                            description: c.description || 'Undefined',
                        };
                    });
                return {
                    name: d,
                    commands: getCmd,
                };
            });

            let pageNo = 1;

            const embed = new MessageEmbed()
                .setColor("WHITE")
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
                .setAuthor(`Help Command!`)
                .setTimestamp()
                .setFooter(`Page ${pageNo}/${helpArray.length}`);

            const getButtons = (pageNo) => {
                return new MessageActionRow().addComponents(
                    new MessageButton()
                        .setLabel("Previous")
                        .setCustomId("prev")
                        .setStyle("SUCCESS")
                        .setDisabled(pageNo <= 1),
                    new MessageButton()
                        .setLabel("Next")
                        .setCustomId("next")
                        .setStyle("SUCCESS")
                        .setDisabled(!(pageNo < helpArray.length)),
                );
            };

            embed.setDescription(`**${helpArray[pageNo - 1].name}**`).addFields(
                helpArray[pageNo - 1].commands.map(({ name, description }) => {
                    return {
                        name: `\`${name}\``,
                        value: `${description}`,
                        inline: true,
                    };
                }),
            );

            const intrMsg = await interaction.editReply({ embeds: [embed], components: [getButtons(pageNo)], fetchReply: true });

            const collector = intrMsg.createMessageComponentCollector({ time: 600000, componentType: "BUTTON" });

            collector.on("collect", async (i) => {
                if (i.customId === "next") {
                    pageNo++;
                } else if (i.customId === "prev") {
                    pageNo--;
                }

            const categ = helpArray[pageNo - 1];

            embed.fields = [];
                embed.setDescription(`**${categ.name}**`).addFields(
                    categ.commands.map(({ name, description }) => {
                        return {
                            name: `\`${name}\``,
                            value: `${description}`,
                            inline: true,
                        };
                    }),
                ).setFooter(`Page ${pageNo}/${helpArray.length}`);

                await i.update({ embeds: [embed], components: [getButtons(pageNo)], fetchReply: true });
            });
        } catch (err) {
            console.log("Something Went Wrong => ", err);
        }
    },
};