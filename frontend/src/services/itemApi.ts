import type { CreateItemInput, Item } from '../types/item';

const API_URL = 'http://localhost:3000/items';

export async function getItems(): Promise<Item[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }

  return response.json();
}

export async function createItem(data: CreateItemInput): Promise<Item> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create item');
  }

  return response.json();
}