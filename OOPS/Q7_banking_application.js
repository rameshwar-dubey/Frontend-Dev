// Q7 – Banking Application with Private Fields

class BankAccount {
  #balance = 0;

  deposit(amount){
    this.#balance += amount;
    console.log("Deposited:", amount);
  }

  withdraw(amount){
    if(amount > this.#balance){
      throw new Error("Insufficient balance!");
    }
    this.#balance -= amount;
    console.log("Withdrawn:", amount);
  }

  getBalance(){
    return this.#balance;
  }
}

// Test
const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());

try {
  acc.withdraw(2000);
} catch(err){
  console.error("Bank Error:", err.message);
}
