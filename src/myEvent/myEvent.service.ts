import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyEvent } from './myEvent.entity';

@Injectable()
export class MyEventService {
  constructor(
    @InjectRepository(MyEvent)
    private myEventRepository: Repository<MyEvent>,
  ) {}

  findAll(): Promise<MyEvent[]> {
    return this.myEventRepository.find();
  }
}
