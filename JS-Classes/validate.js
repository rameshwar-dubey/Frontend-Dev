function validateName(n){ return /^[A-Za-z ]+$/.test(n); }
function validateEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validateSeats(s){ return /^(10|[1-9])$/.test(s); }
function bookTicket(name,email,seats){
  if(validateName(name) && validateEmail(email) && validateSeats(seats)){
    const booking={name,email,seats};
    console.log("Ticket:",booking);
  } else console.log("Invalid input");
}
