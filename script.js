let range = document.getElementsByClassName("liner")[0]
let Value = document.getElementsByClassName("liner")[0].value
let bill = document.getElementById("bill")
let button = document.getElementById("main-button")
let btnCircle = document.getElementById("btn-circle")
let mounthYear = document.getElementById("month-year")
let pageviews = document.getElementsByClassName("pageviews")[0]

acount = 1
function acounting() {
    if (range.value == 0) {
        bill.innerText = `$${(8.00*acount).toFixed(2)}`;
        pageviews.innerText = "10K PAGEVIEWS"
        range.style.background = "linear-gradient(to right, #7aeadf 0%, #ecf0fb 0% 100%)";
    
    } 
    if (range.value == 25) {
        bill.innerText = `$${(12.00*acount).toFixed(2)}`
        pageviews.innerText = "50K PAGEVIEWS"
        range.style.background = "linear-gradient(to right, #7aeadf 25%, #ecf0fb 25% 100%)";
    }

    if (range.value == 50) {
        bill.innerText = `$${(16.00*acount).toFixed(2)}`
        pageviews.innerText = "100K PAGEVIEWS"
        range.style.background = "linear-gradient(to right, #7aeadf 50%, #ecf0fb 50% 100%)";
    }

    if (range.value == 75) {
        bill.innerText = `$${(24.00*acount).toFixed(2)}`
        pageviews.innerText = "500K PAGEVIEWS"
        range.style.background = "linear-gradient(to right, #7aeadf 75%, #ecf0fb 75% 100%)";
    }

    if (range.value == 100) {
        bill.innerText = `$${(36.00*acount).toFixed(2)}`
        pageviews.innerText = "1M PAGEVIEWS"
        range.style.background = "linear-gradient(to right, #7aeadf 100%, #ecf0fb 100% 100%)";
    }

}

range.addEventListener("input", ()=>{
    acounting ()
})

button.addEventListener("click", ()=>{
    if (acount == 1){
        button.style.backgroundColor = "#7aeadf";
        btnCircle.style.left = "120px"
        mounthYear.innerText = "/ year"
        acount=0.75*12
      
    } else {
        acount = 1
        button.style.backgroundColor = "#cfd8ef";
        btnCircle.style.left = "100px"
        mounthYear.innerText = "/ month"
    }
    acounting()
    })

   
   


    


        
        
        

        

    
    






