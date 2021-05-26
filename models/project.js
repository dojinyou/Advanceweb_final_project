const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    PRO_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cus_order',
        key: 'ORDER_ID'
      }
    },
    PRO_TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PRO_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PRO_START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    PRO_END_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'project',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRO_ID" },
        ]
      },
      {
        name: "FK_PROJ_ORDER",
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
        ]
      },
    ]
  });
};
