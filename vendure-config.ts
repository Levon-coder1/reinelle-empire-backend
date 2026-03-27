import { bootstrap, VendureConfig } from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';

export const config: VendureConfig = {
  authOptions: {
    cookieOptions: {
      secret: 'REINELLE_SECRET_123', // Change this later!
    },
  },
  dbConnectionOptions: {
    type: 'mysql',
    synchronize: true, // This creates the tables for you automatically
    host: 'localhost',
    port: 3306,
    username: 'u123456789_user', // Get this from your Hostinger MySQL section
    password: 'Your_DB_Password', 
    database: 'u123456789_vendure',
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  plugins: [
    AdminUiPlugin.init({
      route: 'admin',
      port: 3002,
      app: {
        path: path.join(__dirname, '__admin-ui'),
      },
    }),
  ],
};
