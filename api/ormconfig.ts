import { DataSource } from "typeorm";

const connectionSource = new DataSource({
    type : "sqlite",
    database: "./src/database/database.sqlite",
    migrations: ["src/database/migrations/**/*{.ts,.js}"],
    migrationsRun: true,
})

connectionSource.initialize()
    .then(()=>{
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
})

export default connectionSource;
