import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
interface itemType {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}
function App() {
  const [items, setItems] = useState<itemType[]>([]);

  function handleAddItems(item: itemType) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
