import { join } from 'node:path';

export const dbConfig = () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: join(__dirname + '/../**/*.entity{.ts,.js}'),
  synchronize: true,
  autoLoadEntities: true,
});
