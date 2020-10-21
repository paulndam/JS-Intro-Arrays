for(var i = 1; i <=5; i++){
    console.log('sup rico');
}

// constructor function for a checking account

function checking(amount){
    this.balance = amount; //property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function 

}



function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.amaount) {
        this.balance -= amount;
    }

    if (amount > this.balance) {
        console.log("inSufficient Funds");
    }
}

function toString() {
    return "Balance" + " ", this.balance;
}


var account = new checking(300);
account.deposit(1000);
console.log(account.toString() + " " , "Deposited");
account.withdraw(550);
console.log(account.toString() + " " , "withdrawn");
account.withdraw(1500);
console.log(account.toString() + " ", "insufficient");


var n = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8,];
console.log(n.length);


var numbers = [];

for (var i = 0; i < 100; i++) {
    numbers[i] = i + 1;

    console.log(numbers);
}


var x = [ 2, 34, 67, 89, 3, 5, 7, 90,];
var sum = 0;
for (var i = 0; i < x.length; i++){
    sum += x[i];
}

console.log(sum);