let range = document.getElementsByClassName("liner")[0]
let Value = document.getElementsByClassName("liner")[0].value
let bill = document.getElementById("bill")
let button = document.getElementById("main-button")
let btnCircle = document.getElementById("btn-circle")
let mounthYear = document.getElementById("month-year")
let pageviews = document.getElementsByClassName("pageviews")[0]
console.log(pageviews)


function month() {

range.addEventListener('input', function(){
    
    if (range.value == 0) {
        bill.innerText = "$8.00";
        pageviews.innerText = "10K PAGEVIEWS"
        // range.slyle.backgroundColor = "linear-radient(to right, #7aeadf 0%, #ecf0fb 0% 100%)";
    
    } 
    if (range.value == 25) {
        bill.innerText = "$12.00"
        pageviews.innerText = "50K PAGEVIEWS"
        // range.slyle.background = "linear-radient(to right, #7aeadf 25%, #ecf0fb 25% 100%)";
    }

    if (range.value == 50) {
        bill.innerText = "$16.00"
        pageviews.innerText = "100K PAGEVIEWS"
        // range.slyle.background = "linear-radient(to right, #7aeadf 50%, #ecf0fb 50% 100%)";
    }

    if (range.value == 75) {
        bill.innerText = "$24.00"
        pageviews.innerText = "500K PAGEVIEWS"
        // range.slyle.background = "linear-radient(to right, #7aeadf 75%, #ecf0fb 75% 100%)";
    }

    if (range.value == 100) {
        bill.innerText = "$36.00"
        pageviews.innerText = "1M PAGEVIEWS"
        // range.slyle.background = "to right, #7aeadf 100%, #ecf0fb 100% 100%)";
    }
})
}

function year() {
    range.addEventListener('input', ()=>{
        
        if (range.value == 0) {
            bill.innerText = "$72.00";
            pageviews.innerText = "10K PAGEVIEWS"
            range.slyle.background = "linear-radient(to right, #7aeadf 0%, #ecf0fb 0% 100%)";
        } 
        if (range.value == 25) {
            bill.innerText = "$108.00"
            pageviews.innerText = "50K PAGEVIEWS"
            // range.slyle.background = "linear-radient(to right, #7aeadf 25%, #ecf0fb 25% 100%)";
        }
    
        if (range.value == 50) {
            bill.innerText = "$144.00"
            pageviews.innerText = "100K PAGEVIEWS"
            // range.slyle.background = "linear-radient(to right, #7aeadf 50%, #ecf0fb 50% 100%)";
        }
    
        if (range.value == 75) {
            bill.innerText = "$216.00"
            pageviews.innerText = "500K PAGEVIEWS"
            // range.slyle.background = "linear-radient(to right, #7aeadf 75%, #ecf0fb 75% 100%)";
        }
    
        if (range.value == 100) {
            bill.innerText = "$324.00"
            pageviews.innerText = "1M PAGEVIEWS"
            // range.slyle.background = "to right, #7aeadf 100%, #ecf0fb 100% 100%)";
        }
    })
}

let active = 0

month()

button.addEventListener("click", ()=>{
    if (active == 0){
    button.style.backgroundColor = "#7aeadf";
    btnCircle.style.left = "120px"
    mounthYear.innerText = "/ year"
    range.value = 50
    bill.innerText = "$144.00"
    pageviews.innerText = "100K PAGEVIEWS"
    active = 1
    } else if (active = 1) {
        button.style.backgroundColor = "#cfd8ef";
        btnCircle.style.left = "100px"
        mounthYear.innerText = "/ month"
        range.value = 50
        bill.innerText = "$16.00"
        pageviews.innerText = "100K PAGEVIEWS"
        active = 0
    }


    if (active == 0){
        month()
    } else {
        year()
    }
    })





    


        
        
        

        

    
    






