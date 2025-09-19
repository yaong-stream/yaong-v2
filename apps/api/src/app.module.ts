import {
  Module,
} from "@nestjs/common";
import {
  ConfigRegister,
} from "./configures";

@Module({
  imports: [
    ConfigRegister,
  ],
})
export class AppModule { }
