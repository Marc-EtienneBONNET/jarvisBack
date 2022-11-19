import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEvent } from './myEvent/myEvent.entity';
import { MyEventModule } from './myEvent/myEvent.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'root',
      database: 'jarvisDev',
      entities: [MyEvent],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MyEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
