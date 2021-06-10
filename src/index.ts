import 'reflect-metadata';
// import { ApolloServer } from 'apollo-server-koa';
// import { buildSchema } from 'type-graphql';
// import redis from 'redis';
// import connectRedis from 'connect-redis';
// import { HelloResolver } from './resolvers/hello';
import Mongoose from 'mongoose';
import Koa from 'koa';
import Router from '@koa/router';
const { foreach } = require('@frankycty/ramda-extra');
const CONFIG = require('config');

const main = async () => {
  const app = new Koa();

  // ============= Connect with Redis =========================

  // const RedisStore = connectRedis(session);
  // const redisClient = redis.createClient();

  // ============= Connect with MongoDB =======================
  const connectionOpts = {
    promiseLibrary: global.Promise,
    poolSize: 25,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };

  await Mongoose.connect(CONFIG.db.uri, connectionOpts);

  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [HelloResolver],
  //     validate: false,
  //   }),
  //   context: ({ req, res }) => ({
  //     req,
  //     res,
  //   }),
  // });
  // apolloServer.applyMiddleware({
  //   app,
  //   cors: false,
  // });

  const koaRouter = new Router();

  const routes = [
    {
      method: 'get',
      path: '/',
      handler: (ctx: Koa.Context, _: any) => {
        ctx.body = {
          status: 'success',
        };
      },
    },
  ];

  interface Route {
    method: string;
    path: string;
    middlewares?: Array<Router.Middleware<any, {}>>;
    handler: Router.Middleware;
  }

  const registerKoaRoutes = (koaRouter: any, routes: any) => {
    foreach(({ method, path, handler }: Route) => {
      koaRouter[method].call(koaRouter, path, handler);
    }, routes);
  };

  registerKoaRoutes(koaRouter, routes);

  app.use(koaRouter.routes());

  app.listen(CONFIG.server.port, () => {
    console.log(`server started on localhost: ${CONFIG.server.port}`);
  });
};

main();
