const {SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Yardım komutlarını görüntüleyebileceğiniz bir komut!'),
    
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
           .setTitle(`Yardım`)
           .setDescription(`Yardımcı komutlar :`)
           .setColor(0x074361)
           .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag

           })
           .addFields([
            {
                name: `/yardımmüzik ${client.guilds.cache}`,
                value: `Müzik komutlarını görüntüleyebileceğiniz bir komut.`,
                inline : true
            },
            {
                name: `/eklenecek`,
                value: `eklenecek.`,
                inline : true
            }
           
		
		])
       
        .addFields([
            {
                name: `/eklenecek`,
                value: `eklenecek.`,
                inline : true
            },
            {
                name: `/eklenecek`,
                value: `eklenecek.`,
                inline : true
            }
           
		
		]);
        await interaction.reply({
            embeds: [embed]
        })
           

    },
};