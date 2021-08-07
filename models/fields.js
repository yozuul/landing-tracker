import DataTypes from 'sequelize'
import { sequelize } from '../utils'
import { tables } from '../config/config.default'

const { INTEGER, STRING } = DataTypes

const Field = sequelize.define(tables.fields.name, {
   [tables.fields.fields.id]: {
      type: INTEGER,
      autoincrement: true,
      primaryKey: true,
      allowNull: true
   },
   [tables.fields.fields.form_id]: {
      type: INTEGER,
      allowNull: false
   },
   [tables.fields.fields.name]: {
      type: STRING,
      allowNull: false
   },
   [tables.fields.fields.value]: {
      type: STRING,
      allowNull: false
   },
}, {
   tableName: 'ps_form_click_field',
   timestamps: false
});

export { Field }