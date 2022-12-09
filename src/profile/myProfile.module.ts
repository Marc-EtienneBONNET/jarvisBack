import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyProfileService } from './myProfile.service';
import { MyProfileControler } from './myProfile.controler';
import { MyProfile } from './myProfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyProfile])],
  providers: [MyProfileService],
  controllers: [MyProfileControler],
})
export class MyProfileModule {}
