
## MySQL Setup
Simple MySQL install and config

```
# Install mysql
sudo apt install mysql-server
systemctl status mysql.service

# Adjusting User Authentication 
sudo mysql
mysql > SELECT user,authentication_string,plugin,host FROM mysql.user;
mysql > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

# Create a database for Campus_ToDo
mysql > CREATE DATABASE tomato_work

# Later you can login to mysql via
mysql -u root -p
```

## Build Setup
启动项目之前请配置数据库信息  config/config.default.js

``` bash

# Install
pnpm i

# Port: 7003
npm run dev

# Build start
npm run start
```
