const {Model, DataTypes} = require('sequelize');
const Club = require('./club');

class Player extends Model {
    
    static init(sequelize) {
        Player.init(
            {
                player_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                long_name: DataTypes.STRING,
                age: DataTypes.INTEGER,

        }, {
            sequelize,
            modelName: 'player',
        }    )
    }
}
/*
Player.belongsTo(Club, {
    constraints: true,
    foreignKey: 'club_team_id'
})
*/
module.exports = Player;