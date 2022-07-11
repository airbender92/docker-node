/*
 * @Author: wangyunbo
 * @Date: 2022-07-11 09:04:23
 * @LastEditors: wangyunbo
 * @LastEditTime: 2022-07-11 15:49:24
 * @FilePath: \node-docker\server.js
 * @Description: file content
 */

const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const database = require("ronin-database")

const server = ronin.server();

database.connect(process.env.CONNECTIONSTRING)

server.use('/foo', (req, res) => {
  return res.json({"foo": "bar>github->docker"})
})

server.use('/', mocks.server(server.Router(), false, false))
server.start();