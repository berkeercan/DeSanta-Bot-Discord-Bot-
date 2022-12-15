module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');
        setInterval(client.Presence, 10* 1000);
        
        
    },
};