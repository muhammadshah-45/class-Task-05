
var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click",()=>{
  console.log("button");

  var inputDate = new Date(document.getElementById("dataInput").value)
  var todayDate = new Date();
  console.log(inputDate)
  // console.log(inputDate.getDate())
  // console.log(todayDate)
  
  if(inputDate >  todayDate){
    alert("Please Select your birth date");

    return;
  }
  
  
  
  // Years 
  var years = todayDate.getFullYear() - inputDate.getFullYear();
  console.log(years)
  
  //Months 
  var months = todayDate.getMonth() - inputDate.getMonth();
  console.log("months",months)
  
  // Days
  var days = todayDate.getDate() - inputDate.getDate();
  console.log(days)
  
  
  if(days < 0 ){
    months--;
    days = days + new Date(todayDate.getFullYear(), todayDate.getMonth()).getDate();
  }
  if (months < 0) {  
    years--;  
    months += 12;  
  }  
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
})