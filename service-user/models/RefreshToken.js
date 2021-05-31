module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            types: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        token: {
            types: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            types: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            field: 'created_at'
            types: DataTypes.DATE
        },
        updated_at: {
            field: 'updated_at'
            types: DataTypes.DATE
        }    
    }, {
        tableName: 'refresh_tokens'
        timestamps: true
    });
    return RefreshToken;
}