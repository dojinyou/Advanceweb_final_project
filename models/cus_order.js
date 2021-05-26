const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cus_order', {
    ORDER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CUS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'CUS_ID'
      }
    },
    ORDER_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ORDER_COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cus_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
        ]
      },
      {
        name: "FK_ORDER_CUSTOMER",
        using: "BTREE",
        fields: [
          { name: "CUS_ID" },
        ]
      },
    ]
  });
};
