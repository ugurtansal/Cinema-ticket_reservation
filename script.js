const container=document.querySelector(".container");

container.addEventListener('click',function(e){

    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
    {
        
        e.target.classList.toggle("selected"); //Toggle process deletes if there is selected in the class, otherwise it adds it. 
        

        let selectedSeatCount=container.querySelectorAll(".seat.selected").length;
        let count=document.getElementById("count");
        count.innerText=selectedSeatCount;

        let totalFee=selectedSeatCount*20;
        document.getElementById("total").innerText=totalFee;
    }
});




