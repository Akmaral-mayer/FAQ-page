import React from "react";
import { FooterWrapper } from "./Footer.components.jsx";
import logo2 from "../../images/logo2.png";
import { SubBlock } from "./Footer.components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <img src={logo2} alt="" />
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Blog</li>
        </ul>
        <p>
          Utorg OÜ <br /> Roosikrantsi tn 2-1068, Kesklinna district, Tallinn,
          Harju <br /> county, 10119, Estonia
        </p>
        <p>
          Wallets in FIAT currencies (as USD, EUR or other) can be used only{" "}
          <br /> for short-term storage of funds for cryptocurrencies purchase
        </p>
        <ul className="terms-links">
          <li>© Utorg 2020. All Rights Reserved</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>KYC/AML Policy</li>
        </ul>
      </div>
      <div>
        <SubBlock>
          <div className="list-block">
            <ul>
              <li>
                <h4>Services</h4>
              </li>
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
          <div className="list-block">
            <ul>
              <li>
                <h4>LEARN</h4>
              </li>
              <li>How It Works</li>
              <li>Account</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
            <ul>
              <li>
                <h4>About us</h4>
              </li>
              <li>Reviews</li>
              <li>Certified</li>
              <li>Our partners</li>
            </ul>
          </div>
        </SubBlock>
      </div>
    </FooterWrapper>
  );
};
