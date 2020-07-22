const login = document.getElementById("log-in-btn");
login.addEventListener('click', function(){
    const submit = document.getElementById("submit-area");
    submit.style.display = ('none');
    const transaction = document.getElementById('transaction-area');
    transaction.style.display = ('block');
})
// deposit event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click ', function(){
    const depositAmount = document.getElementById('depositInput').value;
    const depositNumber = parseFloat(depositAmount);

    const depositAdd =  document.getElementById('depositAdded').innerText;
    const currentDeposit = parseFloat(depositAdd);
    const totalDeposit = depositNumber + currentDeposit;

    console.log(totalDeposit);
    
    document.getElementById('depositAdded').innerText = totalDeposit;
})