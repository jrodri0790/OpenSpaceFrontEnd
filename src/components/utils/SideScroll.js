import React, {Component} from 'react'

const SideScroll = (direction) => {
  const speed = 25
  const distance = 100
  const step = 400
  const element = document.getElementById('scroll-horizontal')
  let scrollAmount = 0;
  const slideTimer = setInterval(function(){
    if(direction === 'left'){
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if(scrollAmount >= distance){
      window.clearInterval(slideTimer);
    }
  }, speed);
}

export default SideScroll
