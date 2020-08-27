import React, { Component } from "react";
import "./footer.css";

const data = [
  {
    title: "Get to know us",
    content: ["About Us", "Contact Us", "FAQ"],
  },
  {
    title: "Connect with us",
    content: ["Facebook", "Instagram", "VIT"],
  },
  {
    title: "Services",
    content: [
      "Return Refund and Cancel",
      "Privacy Policy",
      "Terms and Conditions",
    ],
  },
  {
    title: "Partners",
    content: ["Shakti", "Darling", "Neelkesh"],
  },
];

const getUpperMenu = (items) => {
  return items.map((item, key) => {
    return (
      <div key={key} className="upper-menu-container-main">
        <div className="upper-menu-container-head">{item.title}</div>
        <div className="upper-menu-container-body">
          {item.content.map((val, key) => {
            return (
              <div key={key} className="body-text">
                {val}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-upper">
          {getUpperMenu(data)}
          <div className="secure-payment">
            <div className="secure-payment-grid">
              <div className="upper-menu-container-head-secure">
                Secure payment
              </div>
              <img
                className="secure-payment-grid-images"
                src="./images/foot-row2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-lower-image-text">Food Park</div>
          <div className="footer-lower-text">
            © karenpinto-foodpark.netlify.app, private lim.
          </div>
        </div>
      </div>
    );
  }
}
