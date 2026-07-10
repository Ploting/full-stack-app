import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './create-item.dto';
export declare class ItemsService {
    private readonly itemsRepository;
    constructor(itemsRepository: Repository<Item>);
    findAll(): Promise<Item[]>;
    create(createItemDto: CreateItemDto): Promise<Item>;
}
