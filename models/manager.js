const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manager', {
    MGR_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'EMP_ID'
      },
      unique: "FK_MGR_EMP"
    },
    START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'manager',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MGR_ID" },
        ]
      },
      {
        name: "EMP_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMP_ID" },
        ]
      },
    ]
  });
};
