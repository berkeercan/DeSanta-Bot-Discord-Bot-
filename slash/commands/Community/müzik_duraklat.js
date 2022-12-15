const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('duraklat')
    .setDescription('Çalan müziği duraklatabilirsiniz!'),
    
    
    async execute(interaction, client) {
        
        const player = await client.manager.players.get(interaction.guild.id);
        const pls_join = new EmbedBuilder()
           .setTitle(`**:no_entry_sign: | UYARI** Şu anda herhangi bir müzik çalmıyor!`)
           .setColor(0x074361)
           
        const alrd_stp = new EmbedBuilder()
           .setTitle(`**:warning: | UYARI** Müziği zaten duraklattım!`)
           .setColor(0x074361)
        const pause = new EmbedBuilder()
           .setTitle(`**:warning: | UYARI** Müzik Duraklatıldı`)
           .setColor(0x074361)

           if(!player) return interaction.reply({embeds: [pls_join]});
           if(!player.playing) return interaction.reply({embeds: [alrd_stp]});
           player.pause(true)
           interaction.reply({embeds: [pause]});
           
       
       
        

        
        
        
           

    },
};