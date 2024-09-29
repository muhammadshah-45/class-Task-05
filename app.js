
var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click",()=>{
  console.log("button");

  var inputDate = new Date(document.getElementById("dataInput").value)
  var todayDate = new Date();
  console.log(inputDate)
  console.log(todayDate)
  if(inputDate === NaN){
    alert("Please select the date!");
    return
  }
  if(inputDate >  todayDate){
    alert("Please Select your birth date");

    return;
  }
  
  // Years 
  var years = todayDate.getFullYear() - inputDate.getFullYear();
  // console.log(years)

  //Months 
  var months = todayDate.getMonth() - inputDate.getMonth();

  // Days
  var days = todayDate.getDate() - inputDate.getDate();


  if(days < 0 ){
    months--;
    days = days + new Date(todayDate.getFullYear(), todayDate.getMonth(),0).getDate();
  }
  if (months < 0) {  
    years--;  
    months += 12;  
}  



  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;

})