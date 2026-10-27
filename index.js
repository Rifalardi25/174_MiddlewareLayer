import express from 'express'
import pg from 'pg'
import joi from 'joi'

const app = express()
const port = 3000
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'mustofa25',
    port: 5432,
})

