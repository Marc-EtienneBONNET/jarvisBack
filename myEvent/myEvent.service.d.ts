import { Repository } from 'typeorm';
import { MyEvent } from './myEvent.entity';
export declare class MyEventService {
    private myEventRepository;
    constructor(myEventRepository: Repository<MyEvent>);
    getEventTakeAll(): Promise<MyEvent[]>;
    getEventTakeAllForOneUser(user: any): Promise<MyEvent[]>;
    getEventTakeById(id: number): Promise<MyEvent>;
    getEventRemoveById(id: number): Promise<void>;
    postNewEvent(data: any): void;
}
