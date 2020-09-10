import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        title='the lean startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                   /> 
                    <Product 
                        title='Peanut Butter'
                        price={4.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41VKuCmTIfL._AC_SY200_.jpg"
                        rating={3}
                   /> 
                    <Product 
                        title='Acer Aspire 7 Prosumer, 15.6” Full HD, Ci5 8300H'
                        price={849.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/81OvJrSnnTL._AC_SL1500_.jpg'
                        rating={3}
                   />
                </div>
                <div className="home__row">
                    <Product
                        title="Coconut Oil stuff"
                        price={14.99}
                        image="https://m.media-amazon.com/images/I/41FnoPFb5fL._AC_SL260_.jpg"
                        rating={3}
                    />
                   <Product 
                        title='Tuna cans'
                        price={1.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/41uatnuXWAL._AC_SY200_.jpg'
                        rating={4}
                   />
                </div>
                <div className="home__row">
                   <Product 
                        title='AUKEY USB C Charger Omnia 65W 2-Port Foldable Type C Wall Charger with GaNFast Tech & Dynamic Detect Compatible with iPhone 11 Pro Max SE, MacBook Pro...'
                        price={49.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51X58ZgtnOL._AC_SL1500_.jpg'
                        rating={2}
                   />
                </div>
            </div>
            
        </div>
    )
}

export default Home