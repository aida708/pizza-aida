import React from "react";
import { pizzaData } from "../components/Data";
import PizaPage from "../components/PizaPage";

export default function Menu(props) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* //TERNARY OPERATOR */}
      {pizzaData ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <PizaPage
              key={pizza.name}
              name={pizza.name}
              price={pizza.price}
              photoName={pizza.photoName}
              ingredients={pizza.ingredients}
            />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later :) </p>
      )}
    </main>
  );
}
