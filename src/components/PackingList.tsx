import { useState } from "react";
import Item from "./Item";

type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

type PackingListProps = {
  items: ItemType[];
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
  onClearItems: () => void;
};

const PackingList: React.FC<PackingListProps> = ({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemType[];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems!.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
