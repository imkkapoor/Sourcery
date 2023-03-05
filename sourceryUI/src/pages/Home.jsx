import React from "react";
import NavigationBar from "../componenets/nav-bar/NavigationBar";
import FrontView from "../componenets/front-page/FrontView";
import Announcement from "../componenets/announcement-top/Announcement";
import Featured from "../componenets/featured/Featured";
import BestSellers from "../componenets/best-sellers/BestSellers";
import Newsletter from "../componenets/news-letter/Newsletter";
import Footer from "../componenets/footer/Footer";
import CategoryBar from "../componenets/category-bar/CategoryBar";



export default function Home() {
    return (
        <>
            <Announcement />
            <NavigationBar />
            <CategoryBar/>
            <FrontView />
            <Featured />
            <BestSellers cat="shoes" type={{categories:"best-seller"}}  infoObject = {{header:"Best Sellers",link:"EXPLORE ALL BEST SELLERS"}}/>
            <BestSellers cat="apparel" type={{categories:"best-seller"}}  infoObject = {{header:"Apparel",link:"SHOP ALL THE APPAREL"}}/>
            <Newsletter />
            <Footer />
        </>
    );
}
