import {
  NestFactory,
} from "@nestjs/core";
import {
  ConsoleLogger,
} from "@nestjs/common";
import {
  ConfigService,
} from "@nestjs/config";
import {
  NestExpressApplication,
} from "@nestjs/platform-express";
import {
  AppModule,
} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: false,
    }),
  });

  const configService = app.get(ConfigService);

  const port = configService.getOrThrow<number>("port");
  await app.listen(port);
}

void bootstrap();
