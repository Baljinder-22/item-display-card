import React from "react";

function ItemCard(props) {
  const { name, price, category, inStock } = props;

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><b>Category:</b> {category}</p>
      <p><b>Price:</b> ₹{price}</p>

      <p style={{
        color: inStock ? "green" : "red",
        fontWeight: "bold"
      }}>
        {inStock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

const styles = {
  card: {
    width: "260px",
    padding: "15px",
    margin: "15px",
    borderRadius: "10px",
    backgroundColor: "#fefefe",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  name: {
    color: "#34495e"
  }
};

export default ItemCard;
