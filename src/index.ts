import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

bootstrap(config)
    .then(app => {
        console.log('Vendure Server started successfully');
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
