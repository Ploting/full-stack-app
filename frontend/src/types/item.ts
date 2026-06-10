export interface Item {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface CreateItemInput {
  name: string;
  description?: string;
}