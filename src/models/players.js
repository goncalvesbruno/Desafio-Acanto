const {Model, DataTypes, UUID, UUIDV4, UUIDV1 } = require('sequelize');
const Club = require('./clubs');

class players extends Model {
    static init(sequelize){
        super.init(
            {
                player_id: {
                    type: DataTypes.UUID,
                    autoIncrement: true,
                    primaryKey: true,
                    autoIncrementIdentity: true,
                    unique: true,
                    defaultValue:UUIDV1
                                     
                },
                long_name: DataTypes.STRING,
                age: DataTypes.INTEGER,
                nationality_name: DataTypes.STRING,  
                club_name: DataTypes.STRING, 
                player_position: DataTypes.STRING, 

        }, {
            sequelize,
            freezeTableName: true
        }    )
    }
}

/*
Player.belongsTo(Club, {
    constraints: true,
    foreignKey: 'club_team_id'
})
*/
module.exports = players;