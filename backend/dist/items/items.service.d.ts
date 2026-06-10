import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';
export declare class ItemsService {
    private items;
    private nextId;
    findAll(): Item[];
    create(createItemDto: CreateItemDto): Item;
}
