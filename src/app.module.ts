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
      host: 'jarvisdb.cc05dxgjtcjh.eu-west-3.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Cestmoib244',
      database: 'jarvis_db',
      entities: [MyEvent, profile, formations, competances, portfolio],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
      subscribers: [],
      migrations: [],
    }),
    MyEventModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
