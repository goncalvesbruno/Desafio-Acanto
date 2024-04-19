const {Model, DataTypes, UUID, UUIDV4, UUIDV1 } = require('sequelize');
const Players = require('./players');

class clubs extends Model {
    static init(sequelize){
        super.init(
            {
                team_id: {
                    type: DataTypes.UUID,
                    autoIncrement: true,
                    primaryKey: true,
                    autoIncrementIdentity: true,
                    unique: true,
                    defaultValue:UUIDV1
                                     
                },
                team_name: DataTypes.STRING,
                short_name: DataTypes.STRING,
                league_name: DataTypes.STRING,

        }, {
            sequelize,
            freezeTableName: true
        }    )
    }
}

module.exports = clubs