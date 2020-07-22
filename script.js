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
    const depositNumber = transformFloat('depositInput')

    updateNumber('depositAdded', depositNumber)
    updateNumber('totalBalance', depositNumber)

    document.getElementById('depositInput').value = "";
})

// common function
function updateNumber(id, depositNumber) {
    const amount = document.getElementById(id).innerText;
    const current = parseFloat(amount);
    const total = depositNumber + current;
    document.getElementById(id).innerText = total;    
}

function transformFloat(id) {
    const inputAmount = document.getElementById(id).value;
    const number = parseFloat(inputAmount);
    return number; 
}

// withdraw event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = transformFloat('withdraw')

    updateNumber('withdrawMoney', withdrawNumber)
    updateNumber('totalBalance', -1 *  withdrawNumber)

    document.getElementById('withdraw').value = "";
})