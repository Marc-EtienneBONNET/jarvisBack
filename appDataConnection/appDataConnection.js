"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let AppDataSource;
exports.default = AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5431,
    username: 'postgres',
    password: 'root',
    database: 'jarvisDev',
    entities: [],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=appDataConnection.js.map