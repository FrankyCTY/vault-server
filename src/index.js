// import redis from 'redis';
// import connectRedis from 'connect-redis';
import Mongoose from 'mongoose'
import { Server } from '@frankycty/node-framework'
import CONFIG from 'config'

const main = async () => {
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
  }

  await Mongoose.connect(CONFIG.db.uri, connectionOpts)

  const routes = [
    {
      method: 'get',
      path: '/',
      handler: (ctx, _) => {
        ctx.body = {
          status: 'success',
        }
      },
    },
  ]

  await Server.start(routes, [], { port: CONFIG.server.port })
}

main()
