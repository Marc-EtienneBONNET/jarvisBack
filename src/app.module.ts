import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEvent } from './myEvent/myEvent.entity';
import { MyProfile } from './profile/myProfile.entity';
import {
  profile,
  formations,
  competances,
  portfolio,
} from './myProfile/myProfile.entity';
import { MyEventModule } from './myEvent/myEvent.module';
import { MyProfileModule } from './profile/myProfile.module';
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
      entities: [
        MyEvent,
        MyProfile,
        profile,
        formations,
        competances,
        portfolio,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    MyEventModule,
    MyProfileModule,
    ProfileModule,
    MyProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
