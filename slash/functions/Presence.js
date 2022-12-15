const {ActivityType} = require('discord.js');

module.exports = (client) => {
    client.Presence = async () => {
        //type listening,watching,playing 
        // status idle,online,dnd
        const Guilds = client.guilds.cache.map(guild => guild.id);
        const sanane = "+"+ Guilds.length + " Sunucu!";
        const options = [
            {
                 type: ActivityType.Listening,
                 text: sanane,
                 status:"idle"
            },
            {
                type: ActivityType.Identifying,
                text:"/yardım",
                status:"idle"
            },
            {
                type: ActivityType.Listening,
                text: sanane,
                status:"idle"
           },
            {
                type: ActivityType.Playing,
                text:"Geliyor!",
                status:"idle"
            }
        ];
        const option = Math.floor(Math.random() * options.length);
         client.user.setPresence({
         activities: [
                {
                    name: options[option].text,
                    type: options[option].type,
                },
         ],
        status: options[option].status
    });
    

    };
};