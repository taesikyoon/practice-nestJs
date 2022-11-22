import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVICE_PORT = process.env.SERVICE_PORT;
  await app.listen(SERVICE_PORT, () => {
    console.log(`listen t0 ${SERVICE_PORT}`);
  });
}
bootstrap();
