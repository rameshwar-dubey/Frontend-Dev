let isDoorLocked=true, isWindowClosed=true, isAlarmOn=true, isOwnerInside=true;

if(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside){
    console.log("Secure");
}else{
    console.log("Unsafe");
}
