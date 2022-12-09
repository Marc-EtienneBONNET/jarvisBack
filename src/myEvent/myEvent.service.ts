import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Repository } from 'typeorm';
import { MyEvent } from './myEvent.entity';

@Injectable()
export class MyEventService {
  constructor(
    @InjectRepository(MyEvent)
    private myEventRepository: Repository<MyEvent>,
  ) {}

  async getEventTakeAll(): Promise<MyEvent[]> {
    return await this.myEventRepository.find();
  }
  getEventTakeById(id: number): Promise<MyEvent> {
    return this.myEventRepository.findOneBy({
      id: id,
    });
  }

  async getEventRemoveById(id: number) {
    const tmp = await this.myEventRepository.findOneBy({
      id: id,
    });
    this.myEventRepository.remove(tmp);
  }
  postNewEvent(data) {
    const tmp = new MyEvent();
    tmp.type = data.type;
    tmp.alarmType = data.alarmType;
    tmp.titre = data.titre;
    tmp.detail = data.detail;
    tmp.debut = data.debut;
    tmp.fin = data.fin;
    tmp.recurance = data.recurance;
    tmp.argent = data.argent;
    tmp.argentType = data.argentType;
    this.myEventRepository.save(tmp);
  }
}
