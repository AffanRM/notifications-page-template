const mark = document.getElementById("mark-read");
mark.addEventListener("click", function(){
    
    const nots_num = document.getElementsByClassName("notifications-number");
    for (let i = 0; i < nots_num.length; i++) {
        nots_num[i].innerText = 0; // Correctly access each element in the collection
    }

    const not_boxes = document.getElementsByClassName("not-box-1");
    for (let i = 0; i < not_boxes.length; i++) {
        not_boxes[i].style.backgroundColor = "white";
    }

    const not_circles = document.getElementsByClassName("not-circle");
    for(let i=0; i<not_circles.length; i++){
        not_circles[i].style.visibility = "hidden";
    }

})