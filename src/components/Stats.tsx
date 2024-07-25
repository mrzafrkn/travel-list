interface itemType {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}
type itemsType = {
  items: itemType[];
};
const Stats = ({ items }: itemsType) => {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>Start adding some items to your packinglist 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percantage = Math.round((100 * numPacked) / numItems);
  return (
    <footer className="stats">
      <em>
        {percantage === 100 ? (
          <>You got everything. Ready to go ✈️</>
        ) : (
          <>
            {" "}
            👜 You have {numItems} items on your list, and you already picked{" "}
            {numPacked} ({percantage}%)
          </>
        )}
      </em>
    </footer>
  );
};

export default Stats;
