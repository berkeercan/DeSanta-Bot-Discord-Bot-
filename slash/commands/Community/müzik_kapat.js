const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('kapat')
    .setDescription('Çalan müziği tamamen Kapatır!'),
    
    
    async execute(interaction, client) {
        client.guilds.cache.forEach(guild => {

            console.log(`${guild.name} | ${guild.id} | ${guild}`);
          })
        const player = await client.manager.players.get(interaction.guild.id);
        const pls_play = new EmbedBuilder()
           .setTitle(`**:no_entry_sign: | UYARI** Şu anda herhangi bir müzik çalmıyor! :notes:`)
           .setColor(0x074361)
        const cls = new EmbedBuilder()
           .setTitle(`**:warning: | UYARI** Müzik Durduruldu Liste Silindi`)
           .setColor(0x074361)

           if(!player) return interaction.reply({embeds: [pls_play]});
           if(player.paused) return player.destroy(true)
           player.destroy(true)
           interaction.reply({embeds: [cls]});
           
       
       
        

        
        
        
           

    },
};