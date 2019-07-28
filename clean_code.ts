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
    var accountType: { [id: string]: Account[] } = {
        "credit": [],
        "debit": [],
        "other": [],
    };

    accounts.forEach(account => {
        accountType[account.getType()].push(account);
    });

    return accountType["credit"].sort(compareAccountNumber)
        .concat(accountType["debit"].sort(compareAccountNumber))
        .concat(accountType["other"].sort(compareAccountNumber));
}

function randomInt(max: number = 100, min: number = 0): number {
    return Math.floor(Math.random() * (max - min) + min);
}

let accounts: Account[] = [
    new Account(randomInt(), null, randomInt()),
    new Account(randomInt(), randomInt(), randomInt()),
    new Account(null, randomInt(), randomInt()),
    new Account(null, null, randomInt()),
    new Account(randomInt(), null, randomInt()),
    new Account(randomInt(), randomInt(), randomInt()),
    new Account(null, randomInt(), randomInt()),
    new Account(null, null, randomInt()),
    new Account(randomInt(), null, randomInt()),
    new Account(randomInt(), randomInt(), randomInt()),
    new Account(null, randomInt(), randomInt()),
    new Account(null, null, randomInt()),
]

accounts = sort(accounts);

accounts.forEach(x => console.log(x))