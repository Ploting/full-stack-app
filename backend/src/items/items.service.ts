import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      id: '1',
      name: 'Laptop',
      description: 'A portable computer',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Mouse',
      description: 'A wireless mouse',
      createdAt: new Date(),
    },
  ];

  private nextId = 3;

  findAll(): Item[] {
    return this.items;
  }

  create(createItemDto: CreateItemDto): Item {
    const newItem: Item = {
      id: String(this.nextId),
      name: createItemDto.name,
      description: createItemDto.description,
      createdAt: new Date(),
    };

    this.items.push(newItem);
    this.nextId++;

    return newItem;
  }
}
