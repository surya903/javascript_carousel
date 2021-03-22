(function(){
    let getItems = document.querySelectorAll(".s_carousel .item");
    let prevItem = document.querySelector(".s_carousel .prev");
    let nextItem = document.querySelector(".s_carousel .next");

    

    prevItem.addEventListener('click', function(){
        
    });
    nextItem.addEventListener('click', function(){
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
        
    });
    
})();