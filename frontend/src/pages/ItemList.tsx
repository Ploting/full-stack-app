import type { Item } from "../types/item";

type ItemListProps = {
  items: Item[];
  isLoading: boolean;
  error: string;
};

function ItemList({ items, isLoading, error }: ItemListProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginTop:"20px"
        }}
      >
        Items
      </div>

      {isLoading && <p>Loading items...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && !error && items.length === 0 && <p>No items found.</p>}

      {!isLoading && !error && items.length > 0 && (
        <ul style={{ paddingLeft: 20, display:"flex", flexDirection: "column" , gap: "20px"}}>
          {items.map((item) => (
            <li key={item.id} style={{display:"flex", flexDirection: "column", gap: "5px"}}>
              <span>
                - Product Name : <strong>{item.name}</strong>
              </span>

              {item.description && (
                <p>- Description : {item.description}</p>
              )}

              <small>
                - Created at: {new Date(item.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
