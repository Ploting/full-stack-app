import { ItemsService } from './items.service';
import type { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Item[];
    create(createItemDto: CreateItemDto): Item;
}
