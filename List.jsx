

// Reusable List component
function List({ items, renderItem }) {
  // Check for empty list
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        // Use the custom renderItem function passed from parent
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;