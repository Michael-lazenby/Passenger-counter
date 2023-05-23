const incrementBtn = document.querySelector("#increment-btn")
const save = document.querySelector("#save-btn")
const count = document.querySelector("#count-el")

let increase = 0


incrementBtn.addEventListener('click', function() {
    increase++
    count.innerHTML = increase
})


function saveInfo(){
    console.log(increase)
}
save.addEventListener('click',saveInfo)

