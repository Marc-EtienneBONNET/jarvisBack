import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEvent } from './myEvent/myEvent.entity';
import {
  profile,
  formations,
  competances,
  portfolio,
} from './myProfile/myProfile.entity';
import { MyEventModule } from './myEvent/myEvent.module';
import { ProfileModule } from './myProfile/myProfile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'root',
      database: 'jarvisDev',
      entities: [MyEvent, profile, formations, competances, portfolio],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    MyEventModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
