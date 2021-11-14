function myname(){
    let malenames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let mydate= document.getElementById("date")
    if (mydate.value<=0 || mydate.value>31){
        alert ("wrong date")
    }
   

    let myyear= document.getElementById("year")
    let mymale= document.getElementById("male")
    let myfemale= document.getElementById("female")
    let CC = parseInt(myyear.value.slice(0,2))
    let YY = parseInt(myyear.value.slice(2,4))
    let MM = parseInt(mymonth.value)
    let DD = parseInt(mydate.value)
    let week = ( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7 ).toFixed()
    var general = "";
    if(week == 0){
     general = 6   
    }
    else{
        general = week -1
    }
  if(mymale.checked)
  {
  document.getElementById("culture").innerHTML="Akan name is "+malenames[general]+" born on "+days[general]
}
else if(myfemale.checked)
{
  document.getElementById("culture").innerHTML="Akan name is "+femalenames[general]+" born on "+days[general]
    
}
}