const {SlashCommandBuilder, EmbedBuilder} = require('@discordjs/builders');
module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('yardımmüzik')
    .setDescription('Müzik komutlarını görüntüleyebileceğiniz bir komut!'),
    
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
           .setTitle(`Müzik Yardım`)
           .setDescription(`Müzik çalıştırma komutları :`)
           .setColor(0x074361)
           .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag

           })
           .addFields([
            {
                name: `/çal`,
                value: `Müzik çaldırabileceğiniz bir komut.`,
                inline : true
            },
            {
                name: `/oynat`,
                value: `Duraklatılan müziği oynatır.`,
                inline : true
            }
           
		
		])
       
        .addFields([
            {
                name: `/duraklat`,
                value: `Çalan müziği duraklatabilirsiniz.`,
                inline : true
            },
            {
                name: `/geç`,
                value: `Müziği geçebilirsiniz.`,
                inline : true
            },
            {
                name: `/kapat`,
                value: `Çalan müziği tamamen Kapatır.`,
                inline : true
            }
           
		
		]);
        await interaction.reply({
            embeds: [embed]
        })
           

    },
};