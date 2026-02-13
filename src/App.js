import React from "react";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛍 Item Display</h1>

      <div style={styles.row}>
        <ItemCard
          name="Wireless Mouse"
          price={799}
          category="Electronics"
          inStock={true}
        />

        <ItemCard
          name="Notebook"
          price={120}
          category="Stationery"
          inStock={false}
        />

        <ItemCard
          name="Water Bottle"
          price={299}
          category="Daily Use"
          inStock={true}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#eef2f7",
    minHeight: "100vh",
    padding: "20px"
  },
  heading: {
    color: "#2c3e50"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

export default App;
