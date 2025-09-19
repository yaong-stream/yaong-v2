import {
  ConfigModule,
} from "@nestjs/config";

const enviroments = () => ({
  port: parseInt(process.env.PORT ?? "4000", 10),
});

export const ConfigRegister = ConfigModule.forRoot({
  isGlobal: true,
  load: [
    enviroments,
  ],
});
