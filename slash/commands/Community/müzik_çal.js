const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
   
    data: new SlashCommandBuilder()
    .setName('çal')
    .setDescription('Müzik çaldırabileceğiniz bir komut! ')
    .addStringOption(option => option.setName("müzik_adı") .setDescription("İstediğin Müziğin Adını Yaz !") .setRequired(true)),
    
    async execute(interaction, client) {
        
        
        //tanımlama
        const müzikadı = interaction.options.getString("müzik_adı")
        const songs = await client.manager.search(müzikadı)
        
        //mesajlar
        const start = new EmbedBuilder()
           .setTitle( ` ${songs.tracks[0].title} **adlı müzik sıraya eklendi!  :notes:** `)
           .setColor(0x074361) 
        const pls_join = new EmbedBuilder()
           .setTitle( ` **:no_entry_sign: | UYARI** Herhangi bir kanalda değilsin !`)
           .setColor(0x074361)  
        //durumlar
       
        if(!interaction.member.voice.channel)
        {
            interaction.reply({embeds: [pls_join]})
        }
        else
        {
            let player = client.manager.players.get(interaction.guild.id);
            if(!player) player = client.manager.create({
                guild: interaction.guild.id,
                voiceChannel: interaction.member.voice.channel.id,
                textChannel: interaction.channel.id,
            })
            
            player.connect();
            
            console.log(player);
            if(!player.playing && !player.paused && !player.queue.size ) {
                console.log(songs.tracks);
                player.queue.add(songs.tracks[0])
                interaction.reply({embeds: [start]})
                player.play();
            
            }
            else if(player.playing) {
                console.log(songs.tracks);
                player.queue.add(songs.tracks[0])
                interaction.reply({embeds: [start]})

            }
            else if(player.destroyed) 
            {
                console.log(songs.tracks);
                interaction.reply({embeds: [start]})
                player.play();
                
            }
        }
    },
};