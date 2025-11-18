function validateUser(u){ return /^.{5,}$/.test(u); }
function validatePass(p){ return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(p); }
function login(u,p){
  if(!validateUser(u)) return console.log("Invalid Username");
  if(!validatePass(p)) return console.log("Invalid Password");
  console.log("Login Success");
}
