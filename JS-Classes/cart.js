class Cart{
  constructor(){ this.items=[]; }
  addItem(name,price,qty){ this.items.push({name,price,qty}); }
  getTotal(){ return this.items.reduce((s,i)=>s+i.price*i.qty,0); }
  applyCoupon(code){
    if(/^(SAVE|DISC)\d{2}$/.test(code)){
      const disc=parseInt(code.match(/\d+/)[0]);
      return this.getTotal()*(1-disc/100);
    }
    return this.getTotal();
  }
}
