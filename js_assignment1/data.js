let username='Ram';
let age=20;
let active=true;
let hobbies=["coding","cricket"];
let detail={city:"Mathura", college:"GLA University"};
let score=null;
let extradata;

let datasummary=[
    {label:"User Name", value:username,type: typeof username},
    {label:"Age",value:age,type:typeof age},
    { label: "Active", value: active, type: typeof active },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "User Details", value: detail, type: typeof detail },
    { label: "Score", value: score, type: typeof score },
    { label: "Extra Data", value: extradata, type: typeof extradata }
];
console.table(datasummary);
