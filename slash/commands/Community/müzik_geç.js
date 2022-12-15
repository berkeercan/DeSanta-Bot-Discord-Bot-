const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const {Manager}= require("erela.js");
module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('geç')
    .setDescription('Müziği geçebilirsiniz!'),
    
    
    async execute(interaction, client) {
       
        const player = await client.manager.players.get(interaction.guild.id);
        const gerek_msc = new EmbedBuilder()
                    .setTitle(`**:no_entry_sign: | UYARI** Şu anda herhangi bir müzik çalmıyor!`)
                    .setColor(0x074361)
            if(!player){
                
                interaction.reply({embeds: [gerek_msc]});
            
             }
            else if(player.playing){
                const skp = new EmbedBuilder()
                    .setTitle(`**:droplet: | Geçiliyor**  ${player.queue.current.title}  **:notes:** **${interaction.user.username}** `)
                    .setColor(0x074361)
                interaction.reply({embeds: [skp]});
                player.stop();
                console.log(interaction)
            } else
            {
               
                interaction.reply({embeds: [gerek_msc]});
            }
             
    },
};