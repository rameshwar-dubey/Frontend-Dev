let count=0;

function increment(){
    function inner(){ count++; console.log(count);}
    inner();
}
function decrement(){
    function inner(){ count--; console.log(count);}
    inner();
}

increment();
increment();
decrement();
