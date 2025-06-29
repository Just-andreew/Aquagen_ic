import { PrismaClient as PostgresClient } from '../generated/postgres/index.js';
const pgClient = new PostgresClient();
export default pgClient;
