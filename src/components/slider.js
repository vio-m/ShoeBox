import './slider.css'
import styled from "styled-components";
import { useState } from 'react';
//import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
//import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const Slider = (props) => {
    const products = props.products.filter((key)=> key.sale==true)
    const [currentIndex, setCurrentIndex] = useState(0);
    //console.log(">>>", products)


    const Wrapper = styled.div`
        width: 100%;
        height: 80%;
        overflow: hidden;
    `
    const Slider = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 5s ease;
    `
    const Slide = styled.div`
        min-width: 100%;
        display: flex;
        transform: translateX(-${currentIndex * 100}%);
        transition: transform 5s ease-in-out;
    `

    const handleUpdate = () => {
        props.onStateUpdate(1);
    };
    const sendId = (id) => {
        props.onSendId(id);
    }


    function handleArrowClick(direction, currentIndex, setCurrentIndex, numSlides) {
        if(direction==="left") {
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : numSlides - 1);
        }else{
            setCurrentIndex(currentIndex < numSlides - 1 ? currentIndex + 1 : 0);
        }
    }


    return (

        <div className='slider-container'>

            <div className='slider-title'>SHOP AND SAVE</div>

            <div className='slider-arrow left-slider' onClick={(()=> handleArrowClick("left", currentIndex, setCurrentIndex, products.length))}>
                <ArrowBackIosIcon />
            </div>

            <Wrapper >
                <Slider >
                    {products.map((item, index)=> {
                        const discountPercentage = item.percent
                        const discountedPrice = (item.price * (1 - discountPercentage / 100)).toFixed(2);
                        const reducedPrice = (item.price - discountedPrice).toFixed(2);

                        return (
                            <Slide  key={index}  >
                                <div className='slider-image-container'>
                                    <img className='slider-image' src={item.image}></img>
                                </div>
                                <div className='slider-info-container'>
                                    <div className='slider-announcement'>{item.tag}</div>
                                    <div className='slider-fullprice'> Was ${item.price}</div>
                                    <div className='slider-discountedprice'> Now only $ {discountedPrice}</div>
                                    <button onClick={()=> {handleUpdate(); sendId(item.id)}} className='slider-button'>SHOP NOW</button>
                                </div>
                            </Slide>
                        );
                    })}
                </Slider>
            </Wrapper>

            <div className='slider-arrow right-slider' onClick={(()=> handleArrowClick("right", currentIndex, setCurrentIndex, products.length))}>
                <ArrowForwardIosIcon />
            </div>
            
        </div>
        
  )
}


/*
slideIndex={slideIndex}

    function handleArrowClick(direction) {
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
            console.log("si < :", slideIndex)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
            console.log("si > :", slideIndex)
        }
    }


--------------------------------------------------

<button className='slider-button'> SHOP NOW </button>

------------------------------------------------
    "Don't Miss Out!"
    "Limited Time Offer!"
    "Sale on Shoes!"
    "Shop Now and Save!"
    "New Styles, Discounted"

style={{width: "100% !important"}}
*/