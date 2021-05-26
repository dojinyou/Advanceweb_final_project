const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_pe', {
    EMP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'EMP_ID'
      }
    },
    YEAR: {
      type: "YEAR",
      allowNull: false,
      primaryKey: true
    },
    PERFORMANCE_EVALUATION: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emp_pe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMP_ID" },
          { name: "YEAR" },
        ]
      },
    ]
  });
};
