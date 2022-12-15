const {SlashCommandBuilder, EmbedBuilder,PermissionFlagsBits, PermissionsBitField } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        
        .setName('temizle')
        .setDescription('Seçilen sayı kadar mesaj temizler')
        .addIntegerOption( option =>
            option.setName("sayı")
                .setDescription("Sayı giriniz.")
                 .setRequired(true)

            )
            .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
        
    
    async execute(interaction, client) {

        const sayı = await interaction.options.getInteger("sayı");
        const embed = new EmbedBuilder()
            .setTitle(`${sayı} Mesaj silindi :round_pushpin:`)
            .setColor(0x074361)
        
         const error = new EmbedBuilder()
            .setTitle(`Mesaj Silinemedi`)
            .setColor(0x074361)
        interaction.channel.bulkDelete(sayı).then(() =>{
            
             interaction.reply({
                embeds: [embed], ephemeral: true
            }) 
        }).catch(err =>{
            interaction.reply({
                
                embeds: [error], ephemeral: true
            })
            
        })
    },
};