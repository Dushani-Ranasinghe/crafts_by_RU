import React from "react";
import "../Styles/Content.css";
import BgImg from "../Resources/content-bg.png";
import GiftBox from "../Resources/Products/giftbox.png";
import ExpBox from "../Resources/Products/explosionbox.png";
import GiftJar from "../Resources/Products/giftjar.png";
import GiftCard from "../Resources/Products/giftcard.png"
import GiftBasket from "../Resources/Products/giftbasket.png"
import Party from "../Resources/Products/party.png"

function Content() {
  return (
    <div>
      <div className="parent">
        <img
          src={BgImg}
          alt="background"
          className="image2"
          width={200}
          height={261}
        />
          <img
          src={BgImg}
          alt="background"
          className="image3"
          width={200}
          height={261}
        />
        <div className="row1">
          <div className="card">
            <img
              src={GiftBox}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>GIFT BOXES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>

          <div className="card">
            <img
              src={ExpBox}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>EXPLOSION BOXES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>

          <div className="card">
            <img
              src={GiftJar}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>GIFT JARS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>
        </div>
        <div className="row1">
          <div className="card">
            <img
              src={GiftCard}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>GIFT CARDS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>

          <div className="card">
            <img
              src={GiftBasket}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>GIFT BASKETS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>

          <div className="card">
            <img
              src={Party}
              alt="giftbox"
              className="image1"
              width={200}
              height={261}
            />
            <h1>EVENT PLANNING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              vitae amet aliquet diam.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Content;
