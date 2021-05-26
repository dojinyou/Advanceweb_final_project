const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emp_proj', {
    EP_ID: {
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
      }
    },
    PRO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'PRO_ID'
      }
    },
    ROLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'ROLE_ID'
      }
    },
    EP_START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    EP_END_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emp_proj',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EP_ID" },
        ]
      },
      {
        name: "FK_EMP_PROJ_EMP",
        using: "BTREE",
        fields: [
          { name: "EMP_ID" },
        ]
      },
      {
        name: "FK_EMP_PROJ_PROJ",
        using: "BTREE",
        fields: [
          { name: "PRO_ID" },
        ]
      },
      {
        name: "FK_EMP_PROJ_ROLE",
        using: "BTREE",
        fields: [
          { name: "ROLE_ID" },
        ]
      },
    ]
  });
};
