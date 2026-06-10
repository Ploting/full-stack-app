import { type FormEvent, useEffect, useState } from 'react';
import { createItem, getItems } from '../services/itemApi';
import type { Item } from '../types/item';
import ItemList from './ItemList';
function ItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listError, setListError] = useState('');

  async function fetchItems() {
    try {
      setIsLoading(true);
      setListError('');

      const data = await getItems();
      setItems(data);
    } catch {
      setListError('Cannot load items');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setFormError('Name is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setFormError('');

      await createItem({
        name: name.trim(),
        description: description.trim() || undefined,
      });

      setName('');
      setDescription('');

      // กด Save สำเร็จแล้ว fetch list ใหม่
      await fetchItems();
    } catch {
      setFormError('Cannot create item');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Item Management</h1>

      <div>
        <div>
          <h2>Add New Item</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div>
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter item name"
                style={{
                  width: '100%',
                  marginTop: 4,
                  padding: 8,
                }}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter item description"
                style={{
                  width: '100%',
                  marginTop: 4,
                  padding: 8,
                  minHeight: 80,
                }}
              />
            </div>

            {formError && (
              <p style={{ color: 'red', margin: 0 }}>
                {formError}
              </p>
            )}

            <div style={{ display: 'flex', gap: 8 }}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setName('');
                  setDescription('');
                  setFormError('');
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div style={{ flex: 1 }}>
          <ItemList
            items={items}
            isLoading={isLoading}
            error={listError}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemForm;