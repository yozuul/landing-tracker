import DataTypes from 'sequelize';
import { sequelize } from '../utils';
import { tables } from '../config/config.default';

const { INTEGER, STRING, DATE } = DataTypes

const Click = sequelize.define(tables.clicks.name, {
   [tables.clicks.fields.id]: {
      type: INTEGER,
      autoincrement: true,
      primaryKey: true,
      allowNull: true
   },
   [tables.clicks.fields.referer]: {
      type: STRING,
      allowNull: false
   },
   [tables.clicks.fields.ip]: {
      type: STRING,
      allowNull: false
   },
   [tables.clicks.fields.date]: {
      type: DATE,
      defaultValue: new Date(),
      allowNull: true
   },
}, {
   tableName: tables.clicks.name,
   timestamps: false
});

export { Click }