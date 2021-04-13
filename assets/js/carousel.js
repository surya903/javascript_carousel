(function(){
    let getItems = document.querySelectorAll(".s_carousel .item");
    let prevItem = document.querySelector(".s_carousel .prev");
    let nextItem = document.querySelector(".s_carousel .next");
    let timer = 0;
    const autoplay = false;
    if(autoplay){
        setInterval(()=>{
            next();
        },1000);
    }

    const prev =  () => {
   
        //store the current active element in variable
        const currentActive = document.querySelector(".s_carousel .active");
        //remove the active class for the element
        currentActive.classList.remove("active");
        //check if the current active element has previous element 
        // if it has previous element add the active class to the previous element 
        // or add the active class to the last element
        if(currentActive.previousElementSibling){
            currentActive.previousElementSibling.classList.add("active");
        }else{
            getItems[getItems.length-1].classList.add("active");
        }
            
    }
     
    const next = ()=>{
        //store the current active element in variable
        const currentActive = document.querySelector(".s_carousel .active");
        //remove the active class for the element
        currentActive.classList.remove('active');
        //check if the current active element has next element 
        // if it has next element add the active class to the next element 
        // or add the active class to the first element
        if(currentActive.nextElementSibling){
            currentActive.nextElementSibling.classList.add('active');
        } else{
            getItems[0].classList.add('active');
        }

    }


    prevItem.addEventListener('click',  prev);
    nextItem.addEventListener('click', next);
    
})();