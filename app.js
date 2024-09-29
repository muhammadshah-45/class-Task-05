
var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click",()=>{
  console.log("button");

  var inputDate = new Date(document.getElementById("dataInput").value)
  var todayDate = new Date();
  // console.log(inputDate.getDate())
  // console.log(todayDate)
  
  if(inputDate >  todayDate){
    alert("Please Select your birth date");

    return;
  }
  
  
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
  


})