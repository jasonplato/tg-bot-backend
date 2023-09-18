CREATE DATABASE game_db;
use game_db;

CREATE TABLE IF NOT EXISTS users (
        tg_id VARCHAR(16) PRIMARY KEY NOT NULL,
        tg_name VARCHAR(64), 
        wallet_connected BOOLEAN,
        wallet_addr VARCHAR(64),
        first_time DATE,
)ENGINE=InnoDB DEFAULT CHARSET=utf8;