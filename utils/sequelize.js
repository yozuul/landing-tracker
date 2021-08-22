import { Sequelize } from 'sequelize';
import { db } from '../config/config.default'
console.log(db);
const connect = [db.database, db.user, db.password]

const sequelize = new Sequelize(...connect, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  logging: false
})

try {
  await sequelize.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error('Database error connecting:', error);
}

export { sequelize }