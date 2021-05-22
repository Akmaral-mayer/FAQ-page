import React from "react";
import "./Footer.css";
import logo2 from "../../images/logo2.png";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo2} alt="" />
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Blog</li>
        </ul>
        <p>
          Utorg OÜ Roosikrantsi tn 2-1068, Kesklinna district, Tallinn, Harju
          county, 10119, Estonia
        </p>
        <p>
          Wallets in FIAT currencies (as USD, EUR or other) can be used only for
          short-term storage of funds for cryptocurrencies purchase
        </p>
        <ul>
          <li>© Utorg 2020. All Rights Reserved</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>KYC/AML Policy</li>
        </ul>
      </div>
      <div>
        <div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>USD to BTC</li>
              <li>EUR to BTC</li>
              <li>RUB to BTC</li>
              <li>UAH to BTC</li>
            </ul>
            <ul>
              <li>USD to BTC</li>
              <li>EUR to BTC</li>
              <li>RUB to BTC</li>
              <li>UAH to BTC</li>
            </ul>
          </div>
          <div>
            <h4>LEARN</h4>
            <ul>
              <li>How It Works</li>
              <li>Account</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li>Reviews</li>
              <li>Certified</li>
              <li>Our partners</li>
            </ul>
          </div>
        </div>
        <div>support@utorg.pro</div>
      </div>
    </footer>
  );
};
