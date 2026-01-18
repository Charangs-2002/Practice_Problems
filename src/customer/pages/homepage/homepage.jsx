import React from "react";
import Maincerousel from '../../components/homecerousel/maincerousel';
import HomeSectionCerousel from '../../components/HomeSectioncerousel/HomeSectioncerousel';
import MensShoes from "../../../Data/MensShoes";

const homepage = () => {
    return (
        <div>
            <Maincerousel/> 

            <div className="space-y-8 py-8 flex flex-col justify-center px-5 ig:px-10">
                <HomeSectionCerousel data={MensShoes} sectionName={"Men's Shoes"}/>
                <HomeSectionCerousel data={MensShoes} sectionName={"Women's Shoes"}/>
                <HomeSectionCerousel data={MensShoes} sectionName={"Kids' Shoes"}/>
                <HomeSectionCerousel data={MensShoes} sectionName={"Sports Shoes"}/>  
                <HomeSectionCerousel data={MensShoes} sectionName={"Casual Shoes"}/>
            </div>
        </div>
    );
}   
export default homepage;
