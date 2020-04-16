const Dev = require('../model/Dev');

module.exports = {
    async index(req, res) {
        // Filtrar por Estado
        // Filtrar por Tecnologia

        const { techs, state } = req.query;

        const techsArray = techs.split(',').map(tech => tech.trim());
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            state: {
                $in: state,
            }
        
        });

        return res.json({ devs });
    }
}