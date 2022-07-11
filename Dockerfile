# syntax=docker/dockerfile:1

# 当前镜像继承node:12.18.1镜像的所有功能
FROM node:12.18.1

# 环境变量
ENV NODE_ENV=production

# 创建一个工作目录，也是接下来的命令的basepath，接下来的命令可以使用相对路径
WORKDIR /app

# 拷贝项目依赖到working directory /app
COPY ["package.json", "package-lock.json*", "./"]

# 执行安装依赖包到镜像里的node_modules目录下
RUN npm install --production

# 拷贝源码到镜像
COPY . .

# 镜像在容器运行时需要执行的命令
CMD [ "node", "server.js" ]


