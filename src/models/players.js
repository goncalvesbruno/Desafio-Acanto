const { Model, DataTypes, UUIDV1 } = require('sequelize');
const Club = require('./clubs');

class players extends Model {
    static init(sequelize){
        super.init(
            {
                player_id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    defaultValue: UUIDV1,
                    unique: true
                },                 
                long_name: DataTypes.STRING,
                age: DataTypes.INTEGER,
                nationality_name: DataTypes.STRING,  
                club_name: DataTypes.STRING, 
                player_position: DataTypes.STRING
            }, 
            {
                sequelize,
                freezeTableName: true
            }
        );
    }

    // Associação 1 para muitos, 1 clube tem muitos jogadores, 1 jogador tem 1 clube
    static associate(models) {
        this.belongsTo(models.Club, {
            foreignKey: 'club_team_id',
        });
        this.hasOne(Club);
        Club.hasMany(this);
    }
    

}

module.exports = players;