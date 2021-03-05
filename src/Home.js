import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1231"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={14.99}
          rating={4}
          img="https://www.amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Product
          id="123112"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={124.91}
          rating={5}
          img="https://www.amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
        />
        
      </div>
      <div className="home__row">
        <Product
          id="13124"
          title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
          price={599}
          rating={3}
          img="https://www.amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
        />
        <Product
          id="16345"
          title="Apple iPhone 11 Pro (64GB, Midnight Green) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/Month Amazon Gift Card Credit)"
          price={1099.9}
          rating={5}
          img="https://www.amazon.com/images/I/81mxun+6pEL.jpg"
        />
        <Product
          id="6765465"
          title="Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray (4th Generation)"
          price={1643.27}
          rating={2}
          img="https://www.amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
              id="123112"
              title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
              price={124.91}
              rating={5}
              img="https://www.amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
            />
      </div>
    </div>
  );
}

export default Home;
