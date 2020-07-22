const login = document.getElementById("log-in-btn");
login.addEventListener('click', function () {
    const submit = document.getElementById("submit-area");
    submit.style.display = ('none');
    const transaction = document.getElementById('transaction-area');
    transaction.style.display = ('block');
})
// deposit event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('depositInput').value;
    const depositNumber = parseFloat(depositAmount);

    const depositAdd = document.getElementById('depositAdded').innerText;
    const currentDeposit = parseFloat(depositAdd);
    const totalDeposit = depositNumber + currentDeposit;

    document.getElementById('depositAdded').innerText = totalDeposit;
    document.getElementById('depositInput').value = "";

    const balance = document.getElementById('totalBalance').innerText;
    const floatedBalance = parseFloat(balance);
    const finalBalance = totalDeposit + floatedBalance;

    document.getElementById('totalBalance').innerText = finalBalance;
})

// withdraw event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const withdrawSubtract = document.getElementById('withdrawMoney').innerText;
    const currentWithdraw = parseFloat(withdrawSubtract);
    const totalWithdraw = currentWithdraw + withdrawNumber;

    document.getElementById('withdrawMoney').innerText = totalWithdraw;
    document.getElementById('withdraw').value = "";

    const balance = document.getElementById('totalBalance').innerText;
    const floatedBalance = parseFloat(balance);
    const finalBalance = floatedBalance - totalWithdraw;

    document.getElementById('totalBalance').innerText = finalBalance;
})