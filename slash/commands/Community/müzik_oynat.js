const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('oynat')
    .setDescription('Duraklatılan müziği oynatır!'),
    
    
    async execute(interaction, client) {
        
        const player = await client.manager.players.get(interaction.guild.id);
       
        const pls_play = new EmbedBuilder()
           .setTitle(`**:no_entry_sign: | UYARI** Şu anda herhangi bir müzik çalmıyor!`)
           .setColor(0x074361)
           
        const rsm = new EmbedBuilder()
           .setTitle(`**:warning: | UYARI** Müzik oynatıldı!`)
           .setColor(0x074361)

        const pln = new EmbedBuilder()
           .setTitle(`**:warning: | UYARI** Müzik zaten çalıyor!`)
           .setColor(0x074361)

         if(!player) 
         {
            interaction.reply({embeds: [pls_play]});

         }else if(player.paused) {

            player.play()
            interaction.reply({embeds: [rsm]});

         }else if(player.playing) {
            
            interaction.reply({embeds: [pln]});

         } else 
         {
            
            interaction.reply({embeds: [pls_play]});

         } 
           
           
       
       
        

        
        
        
           

    },
};