/*
 * @Author: wangyunbo
 * @Date: 2022-07-11 09:04:23
 * @LastEditors: wangyunbo
 * @LastEditTime: 2022-07-11 15:55:32
 * @FilePath: \node-docker\server.js
 * @Description: file content
 */

const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const database = require("ronin-database")

const server = ronin.server();

database.connect(process.env.CONNECTIONSTRING)

server.use('/', mocks.server(server.Router(), false, false))

server.use('/foo', (req, res) => {
  return res.json({"foo": "bar>github->docker"})
})
server.start();