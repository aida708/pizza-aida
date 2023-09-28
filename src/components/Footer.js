function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if (hour >= open && hour <= closeHour) alert("we are open!!!");
  //else alert("sorry we are closed");

  console.log(hour);

  if (!isOpen)
    return (
      <p>
        We are happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    );

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Open until {closeHour}:00. Come and visit us or order online </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
export default Footer;
