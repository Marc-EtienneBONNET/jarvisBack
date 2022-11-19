import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEventService } from './myEvent.service';
import { MyEventControler } from './myEvent.controler';
import { MyEvent } from './myEvent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyEvent])],
  providers: [MyEventService],
  controllers: [MyEventControler],
})
export class MyEventModule {}
