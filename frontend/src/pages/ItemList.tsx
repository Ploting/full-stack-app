import type { Item } from '../types/item';

type ItemListProps = {
  items: Item[];
  isLoading: boolean;
  error: string;
};

function ItemList({ items, isLoading, error }: ItemListProps) {
  return (
    <div>
      <div>
        <h2>Items</h2>
      </div>

      {isLoading && <p>Loading items...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && items.length === 0 && (
        <p>No items found.</p>
      )}

      {!isLoading && !error && items.length > 0 && (
        <ul style={{ paddingLeft: 20 }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.name}</strong>

              {item.description && (
                <p style={{ margin: '4px 0' }}>{item.description}</p>
              )}

              <small>
                Created at: {new Date(item.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;