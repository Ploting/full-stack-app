import { ItemsService } from './items.service';
import type { Item } from './item.entity';
import { CreateItemDto } from './create-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    create(createItemDto: CreateItemDto): Promise<Item>;
}
