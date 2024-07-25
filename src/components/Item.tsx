type itemType = {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
};
const Item = ({ item, onDeleteItems, onToggleItems }: itemType) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed.toString()}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;
