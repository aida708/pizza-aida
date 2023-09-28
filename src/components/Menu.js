import React from "react";
import { pizzaData } from "../components/Data";
import PizaPage from "../components/PizaPage";

export default function Menu(props) {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* //TERNARY OPERATOR */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stoneooven, all organic and delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <PizaPage pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :) </p>
      )}
    </main>
  );
}
