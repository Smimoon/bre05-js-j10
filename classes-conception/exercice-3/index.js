class BankAccount {
    accountNumber;
    accountSold;
    opList;
    depositAmount;
    withdrawalAmount
    
    constructor(accountNumber, accountSold, opList, depositAmount, withdrawalAmount) {
        this.accountNumber = accountNumber;
        this.accountSold = accountSold;
        this.opList = opList;
        this.depositAmount = depositAmount;
        this.withdrawalAmount = withdrawalAmount;
    }
    
    moneyDeposit() {
        let sold = this.accountSold;
        let amount = this.depositAmount;
        
        sold = sold + amount;
        return sold;
    }
    
    moneyWithdrawal() {
        let sold = this.accountSold;
        let amount = this.withdrawalAmount;
        
        sold = sold - amount;
        return sold;
    }
    
    showOpList() {
        let list = this.opList;
        
        for(let op of list) {
            console.log(op);
        }
    }
}


let bank1 = new BankAccount (12344321, 70, ['Retrait de 150€', 'Virement "loyer" de 920€', 'Paiment carte bancaire 18.54€'], 1070.87, 80);

console.log(bank1.showOpList());
console.log(bank1.moneyDeposit());
console.log(bank1.moneyWithdrawal());