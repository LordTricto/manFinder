let sliderImages = document.querySelectorAll('.slider'),
leftBtn = document.querySelector('#leftBtn'),
rightBtn = document.querySelector('#rightBtn'),
slideState=0;



Reset = ()=>{
    //this function does exactly what it called
    //it sets all the images to display:none;
    //u will see why in a bit
    sliderImages.forEach(ele=>{
        //for each image set them to none
        ele.style.display='none'        
    })
}

startSlide = ()=>{
    Reset()
    sliderImages[0].style.display='block' 
}


/*
now is the play when the page load we call startslide to show users the first image

when we press the left button- it rest() the pics and shows the current index

*/
slideLeft = ()=>{
    sliderImages[slideState-1].style.display='block' 
    slideState--;
}

slideRight = ()=>{
    sliderImages[slideState+1].style.display='block' ;
    slideState++;
}
leftBtn.addEventListener('click',()=>{
    Reset()
    //if slide state is zero set it to the lenght of the array so it wont run into index error
    if(slideState===0){
        slideState = sliderImages.length;
    }
    
    slideLeft()

})

rightBtn.addEventListener('click',()=>{
    Reset()
    // console.log(slideState)
    if(slideState === sliderImages.length-1){
        slideState = -1
    }

    slideRight()
})



startSlide()