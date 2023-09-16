# tg-bot-backend

## Prerequisites
以下方式二选一：  
1. 本地安装 docker，并拉取 MySQL 最新 image  
2. 本地命令行直接安装 mysql

## Run
1. (通过 Docker 运行 MySQL 的话) 先运行起 docker；在当前目录下 docker-compose up
2. (通过 Docker 运行 MySQL 的话) 数据库的 Root 密码和暴露的端口在 docker-compose.yaml 里设置或查看
3. 进入 mysql
4. 创建数据库 game_db
5. 创建所有需要的数据表
6. 回到本项目根目录:
运行以下指令
```bash
npm install
nohup node index.js &
```
顺利的话可以看到 
```
Server started on port 3030
```
