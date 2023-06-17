import React from "react";
import Nav from "./navbar.jsx";
import Body from "./body.jsx";
import data from "./data.jsx";

function App() {
  const Cards = data.map((item) => {
    return <Body key={item.title} item={item} />;
  });

  return (
    <>
      <Nav />
      <section className="main-section">{Cards}</section>
    </>
  );
}

export default App;
