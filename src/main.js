const fastify = require("fastify");
const cors = require("@fastify/cors");
const process = require("process");

async function bootstrap() {
  const app = fastify();

  await app.register(cors, { origin: "*" });

  app.get("/hello", (request) => {
    return {
      timestamp: Date.now(),
      name: process.env.INSTANCE_NAME,
    };
  });

  const url = await app.listen({ port: 7000, host: "0.0.0.0" });
  console.log(url);
}

bootstrap();
