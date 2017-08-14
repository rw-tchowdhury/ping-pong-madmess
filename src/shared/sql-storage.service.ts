import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';

@Injectable()
export class SqlStorage {
    //private db: SQLite; 
    private sql: SQLiteObject

    constructor(private db: SQLite) {             
        console.log(this.sql); 
    }

    getAll(){
        return this.sql.executeSql('SELECT key, value FROM kv', []).then(data => {
            let results = [];
            for (let i = 0; i < data.rows.length; i++) {
                results.push(JSON.parse(data.rows.item(i).value));
            }
            return results;
        });
    }

    get(key: string){
        return this.sql.executeSql('select key, value from kv where key = ? limit 1', [key]).then(data => {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    }

    remove(key: string){
        return this.sql.executeSql('delete from kv where key = ?', [key]);
    }

    set(key: string, value: string){
        return this.sql.executeSql('insert or replace into kv(key, value) values (?, ?)', [key, value]).then(data => {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    }
    
    /**
     * Should be called after deviceready event is fired
     */
    initializeDatabase(){
        this.db = new SQLite();

        return this.db.create({
                name: DATABASE_FILE_NAME,
                location: 'default'
            }).then((sql: SQLiteObject) => {
                
                    this.sql = sql;

                    return sql.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)', []).then(data => {

                        console.log('**after CREATE TABLE check...', data);

                        // sql.executeSql('SELECT * from kv', []).then(data => {
                        //     console.log('**executing query: SELECT * from kv ', data);                        
                        // });

                    });

                });


    }
}