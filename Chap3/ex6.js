const bankAccount = {
  customerName: 'Max Winchester',
  accountNumber: '11AB12435234',
  accountType: 'Savings',
  branch: 'Wesley Branch',
  balance: 1500,
};

// removing branch
console.log(bankAccount);
delete bankAccount.branch;
delete bankAccount['accountType'];
console.log(bankAccount);
