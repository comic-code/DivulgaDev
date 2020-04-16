const axios = require('axios');
const Dev = require('../model/Dev');

// Index, Show, Store, Update, Destroy

module.exports = {

    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res) {
        // Desestruturando
        const { email, github_username, techs, state, city } = req.body;

        // Verificando se usuário já existe
        let dev = await Dev.findOne({ github_username });
    
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio, html_url} = apiResponse.data;
        
            // Separando tecnologias por vírgula e em seguida tirando espaços
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            // Cadastrando dev no BD
            dev = await Dev.create({
                email,
                github_username,
                name,
                avatar_url,
                bio,
                html_url,
                techs: techsArray,
                state,
                city
            });
        }
       
        
        return res.json(dev);
    
    }
}