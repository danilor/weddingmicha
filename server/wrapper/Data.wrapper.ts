import knex from "knex";

const host: string = process.env.DB_HOST || "localhost";
const port: number = parseInt(process.env.DB_PORT || "3306");
const user: string = process.env.DB_USER || "root";
const password: string = process.env.DB_PASSWORD || "";
const database: string = process.env.DB_NAME || "event";

const db = knex({
    client: "mysql",
    connection: {
        host,
        port,
        user,
        password,
        database
    }
});



const DataWrapper = {
    getUserByUUID(uuid: string) {

        return new Promise((resolve, reject) => {
/*
            const c = db
                .select("*")
                .from("guests")
                .where("uuid", uuid)
                .first().toQuery();
            console.log('==QUERY==', c);
            resolve(undefined);*/



            db
                .select("name",'email','phone','rsvp',"guests")
                .from("guests")
                .where("uuid", uuid)
                .first()

                .then((user) => {
                    resolve(user);
                }).catch((error) => {
                    reject(error);
            });

        });

    },
};

export default DataWrapper;