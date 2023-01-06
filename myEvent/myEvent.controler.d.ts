import { MyEventService } from './myEvent.service';
export declare class MyEventControler {
    private readonly myEventService;
    constructor(myEventService: MyEventService);
    getEventTakeAll(): Promise<import("./myEvent.entity").MyEvent[]>;
    postEventTakeAllForOneUser(body: any): Promise<import("./myEvent.entity").MyEvent[]>;
    getEventTakeById(id: any): Promise<import("./myEvent.entity").MyEvent>;
    getEventRemoveById(body: any): Promise<void>;
    postAddNewEvent(body: any): Promise<void>;
    postModifEvent(body: any): Promise<void>;
}
