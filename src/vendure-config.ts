import { VendureConfig } from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';

export const config: VendureConfig = {
    apiOptions: {
        port: Number(process.env.PORT) || 3000,
        adminApiPath: 'admin-api',
        shopApiPath: 'shop-api',
    },
    dbConnectionOptions: {
        type: 'mysql',
        synchronize: true, // Auto-creates tables on first run
        host: 'localhost',
        port: 3306,
        username: 'u942445425_dhllogisticsan',
        password: 'HCAP@ssw0rd2021',
        database: 'u942445425_venduretrial',
    },
    authOptions: {
        cookieOptions: { secret: 'reinelle-secret-key' },
    },
    plugins: [
        AdminUiPlugin.init({
            route: 'admin',
            port: Number(process.env.PORT) || 3000, // Use the SAME port as the API
            app: {
                // This tells it to build into the dist folder
                path: path.join(__dirname, '../admin-ui'),
            },
        }),
    ],
};
