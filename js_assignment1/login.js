let username="Ram";
let curr_hr= new Date().getHours();
if(curr_hr<12){
    console.log("Good Morning",username);
}
else if(curr_hr>12 && curr_hr<17){
    console.log("Good Afetrnoon",username);
}
else{
    console.log("Good Evening",username);
}