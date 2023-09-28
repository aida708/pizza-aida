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
export default Footer;
