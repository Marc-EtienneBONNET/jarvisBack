import { DataSource } from 'typeorm';

let AppDataSource;
export default AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'root',
  database: 'tmp',
  entities: [],
  synchronize: true,
  logging: false,
});
