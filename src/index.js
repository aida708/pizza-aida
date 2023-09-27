import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pizza from "./assets/pizza.jpg";

// const pizzaData = [];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza CO.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizzaa
        name="spinachi"
        ingredients="tomato, mozarella, cheese"
        photoName="pizza.jpg"
        price={10}
      />

      <Pizzaa name="4stinet" ingredients="mushrooms, cheese, ton" price={20} />
    </main>
  );
}

function Pizzaa(props) {
  console.log(props);
  return (
    <div>
      <img src={Pizza} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>{props.price}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const closeHour = 22;

  //if (hour >= open && hour <= closeHour) alert("we are open!!!");
  //else alert("sorry we are closed");

  console.log(hour);
  return (
    <div>
      <footer>{new Date().toLocaleTimeString()}WE ARE OPEN NOW</footer>
      {hour}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
