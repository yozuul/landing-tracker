import { Sequelize } from 'sequelize';
import { db } from '../config/config.default'

const connect = [db.database, db.user, db.password]

const sequelize = new Sequelize(...connect, {
  host: db.host,
  port: db.port,
  dialect: db.dialect
})

try {
  await sequelize.authenticate();
  console.log('Connect 2 DB');
} catch (error) {
  console.error('Error connecting 2 DB:', error);
}

export { sequelize }
