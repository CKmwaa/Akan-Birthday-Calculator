function myname(){
    let mydate= document.getElementById("date")
    let mymonth= document.getElementById("month")
    let myyear= document.getElementById("year")
    let mymale= document.getElementById("male")
    let myfemale= document.getElementById("female")
    let week = ( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7 ).toFixed()
    let CC = parseInt(myyear.value.slice(0,2))
    let YY = parseInt(myyear.value.slice(2,4))
    let MM = parseInt(mymonth.value)
    let DD = parseInt(mydate.value)
    let malenames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
}