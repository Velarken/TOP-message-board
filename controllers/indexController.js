const db = require('../db/queries');
const { Client } = require('pg');

async function addMessagePost(req,res) {
    const client = new Client({
        connectionString: `postgresql://neondb_owner:npg_ya7MghjXlk9P@ep-winter-art-ah86drya-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
    })
    const SQL = `SELECT`
}