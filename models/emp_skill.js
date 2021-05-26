const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_skill', {
    SKILL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'skill',
        key: 'SKILL_ID'
      }
    },
    EMP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'EMP_ID'
      }
    },
    ACQUIRE_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'emp_skill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SKILL_ID" },
          { name: "EMP_ID" },
        ]
      },
      {
        name: "FK_EMP_EMPSKILL",
        using: "BTREE",
        fields: [
          { name: "EMP_ID" },
        ]
      },
    ]
  });
};
