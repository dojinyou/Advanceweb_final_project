const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proj_plan', {
    PP_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PRO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'PRO_ID'
      }
    },
    PLAN_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    END_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    PERIOD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEPENDENCY: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proj_plan',
        key: 'PP_ID'
      }
    },
    STATUS: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proj_plan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PP_ID" },
        ]
      },
      {
        name: "FK_PROJ_PLAN_PROJ",
        using: "BTREE",
        fields: [
          { name: "PRO_ID" },
        ]
      },
      {
        name: "FK_SELF_PROJ_PLAN",
        using: "BTREE",
        fields: [
          { name: "DEPENDENCY" },
        ]
      },
    ]
  });
};
