import React from "react";
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectioncerousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselRef = React.useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };
    
    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };    

    const syncActiveIndex = (e) => setActiveIndex(e.item)

    const items = data.slice(0,20).map((item, index) => <HomeSectionCard key={index} product={item}/>);
    return (
        <div className="relative">
            <h1 className="text-xl font-bold mb-4">{sectionName}</h1>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    infinite
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
            </div>

            {activeIndex < items.length-5 && <Button variant="contained" className="z-50 bg-white" onClick={slideNext} sx={{
                position: 'absolute', top: '8rem',
                right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white",
            }} aria-label="Next">
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
            </Button>}
            {activeIndex !== 0 && <Button variant="contained" className="z-50 bg-white" onClick={slidePrev} sx={{
                position: 'absolute', top: '8rem',
                left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white",
            }} aria-label="Next">
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
            </Button>}

        </div>
    );
}

export default HomeSectioncerousel;