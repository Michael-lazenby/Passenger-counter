const incrementBtn = document.querySelector("#increment-btn")
const decreaseBtn = document.querySelector("#decrement-btn")
const count = document.querySelector("#count-el")

let increase = 0


incrementBtn.addEventListener('click', function() {
    increase++
    count.innerHTML = increase
})

decreaseBtn.addEventListener('click', function(){
    increase--
    count.innerHTML = increase
})
