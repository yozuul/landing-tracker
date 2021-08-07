import DataTypes from 'sequelize'
import { sequelize } from '../utils'
import { tables } from '../config/config.default'

const { INTEGER, STRING, DATE } = DataTypes

const Visit = sequelize.define(tables.visits.name, {
   [tables.visits.fields.id]: {
      type: INTEGER,
      autoincrement: true,
      primaryKey: true,
      allowNull: true
   },
   [tables.visits.fields.referer]: {
      type: STRING,
      allowNull: false
   },
   [tables.visits.fields.ip]: {
      type: STRING,
      allowNull: false
   },
   [tables.visits.fields.date]: {
      type: DATE,
      defaultValue: new Date(),
      allowNull: true
   },
}, {
   tableName: tables.visits.name,
   timestamps: false
});

export { Visit }