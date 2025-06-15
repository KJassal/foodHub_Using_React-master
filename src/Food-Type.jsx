import React from "react";
import rollLogo from "./products/images/logoimg//roll_icon.jpg";
import briyaniLogo from "./products/images/logoimg/briyaniicon.jpg";
import momoLogo from "./products/images/logoimg/momoicon.jpg";
import dimsumLogo from "./products/images/logoimg/dimsumicon1.jpg";
import burgerLogo from "./products/images/logoimg/burgericon.jfif";
import pizzaLogo from "./products/images/logoimg/pizzaicon.jpg";
import bakeryLogo from "./products/images/logoimg/bakery.jpg";
import { Link } from "react-router-dom";

export default function FoodType() {
  return (
    <div className="contain">
      <div className="box">
        <Link to={"/rollPage"}>
          <img src={rollLogo} alt="" id="roll" className="icon" />
          <h1>Roll</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/briyanipage"}>
          <img src={briyaniLogo} alt="" id="briyani" className="icon" />
          <h1>Briyani</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/momopage"}>
          <img src={momoLogo} alt="" id="momo" className="icon" />
          <h1>Momo</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/dimsumpage"} >
          <img src={dimsumLogo} alt="" id="dimsum" className="icon" />
          <h1>Dim Sum</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/burgerpage"}>
          <img src={burgerLogo} alt="" id="Burger" className="icon" />
          <h1>Burger</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/pizzapage"}>
          <img src={pizzaLogo} alt="" id="pizza" className="icon" />
          <h1>Pizza</h1>
        </Link>
      </div>
      <div className="box">
        <Link to={"/bakreypage"}>
          <img src={bakeryLogo} alt="" id="bakery" className="icon" />
          <h1>Bakery</h1>
        </Link>
      </div>
    </div>
  );
}
