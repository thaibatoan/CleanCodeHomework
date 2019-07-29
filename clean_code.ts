class Account {
    credit: number | null;
    debit: number | null;
    accountNumber: number;
    constructor(_credit: number | null, _debit: number | null, _accountNumber: number) {
        this.credit = _credit;
        this.debit = _debit;
        this.accountNumber = _accountNumber;
    }

    getType(): string {
        if (this.credit != null)
            return "credit";
        if (this.debit != null)
            return "debit";
        return "other";
    }
}

function compareAccountNumber(a: Account, b: Account): number {
    if (a.accountNumber < b.accountNumber)
        return -1;
    if (a.accountNumber > b.accountNumber)
        return 1;
    return 0;
}

function sort(accounts: Account[]): Account[] {
    var accountType: { [id: string]: Account[] } = {"credit": [], "debit": [], "other": [] };

    accounts.forEach(account => {
        accountType[account.getType()].push(account);
    });

    return accountType["credit"].sort(compareAccountNumber)
        .concat(accountType["debit"].sort(compareAccountNumber))
        .concat(accountType["other"].sort(compareAccountNumber));
}

function randomInt(max: number = 9999, min: number = 1000): number {
    return Math.floor(Math.random() * (max - min) + min);
}

let accounts: Account[] = [
    new Account(randomInt(), null, randomInt(99, 10)),
    new Account(randomInt(), randomInt(), randomInt(99, 10)),
    new Account(null, randomInt(), randomInt(99, 10)),
    new Account(null, null, randomInt(99, 10)),
    new Account(randomInt(), null, randomInt(99, 10)),
    new Account(randomInt(), randomInt(), randomInt(99, 10)),
    new Account(null, randomInt(), randomInt(99, 10)),
    new Account(null, null, randomInt(99, 10)),
    new Account(randomInt(), null, randomInt(99, 10)),
    new Account(randomInt(), randomInt(), randomInt(99, 10)),
    new Account(null, randomInt(), randomInt(99, 10)),
    new Account(null, null, randomInt(99, 10)),
]

accounts = sort(accounts);
console.log(accounts)