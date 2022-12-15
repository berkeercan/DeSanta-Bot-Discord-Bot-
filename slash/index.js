const { Client, GatewayIntentBits, Collection } = require(`discord.js`);
const {REST,Routes} = require(`discord.js`);
const {Manager}= require("erela.js");
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildMessages] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./commands");
//music manager start

client.manager = new Manager({
    nodes: [
      
      {
        host: "node1.kartadharta.xyz",
        password: "kdlavalink",
        port:443,
        secure:true
      },
    ],
     
    send(id, payload) {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    },
    
  })
  
  .on("nodeConnect", node => console.log(`Node ${node.options.identifier} connected`))
  .on("nodeError", (node, error) => console.log(`Node ${node.options.identifier} had an error: ${error.message}`))
  .on("trackStart", (player, track) => {
    client.channels.cache
      .get(player.textChannel)
  })
  
  client.once("ready", () => {
    console.log(client.guilds.cache.get('id'));
    

    client.manager.init(client.user.id);
  });
  
  client.on("raw", (d) => client.manager.updateVoiceState(d));
  client.on("guildCreate", (g) => {
    
   
  });

//music manager end
(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(process.env.token)
})();

