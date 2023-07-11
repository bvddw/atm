class ATM {
  constructor(value) {
    this.balance = value
    this.transactionHistory = []
  }

  checkBalance() {
    const balanceElement = document.getElementById('content')
    balanceElement.innerHTML = `<p>Current Balance: $${this.balance}</p>`
  }

  withdraw() {
    const amountInput = document.getElementById('withdraw-amount')
    const amount = parseFloat(amountInput.value)
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.')
      return
    }
    if (this.balance < amount) {
      alert('Not enough money in your balance.')
      return
    }
    this.balance -= amount
    this.transactionHistory.push(`Success withdraw ${amount} dollars. Datetime: ${new Date()}`)
    this.checkBalance()
    amountInput.value = ''
  }

  deposit() {
    const amountInput = document.getElementById('deposit-amount')
    const amount = parseFloat(amountInput.value)
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.')
      return
    }
    this.balance += amount
    this.transactionHistory.push(`Success deposit ${amount} dollars. Datetime: ${new Date()}`)
    this.checkBalance()
    amountInput.value = ''
  }

  displayTransactionHistory() {
    const historyElement = document.getElementById('content')
    if (this.transactionHistory.length === 0) {
      historyElement.innerHTML = '<p>No transaction history.</p>'
    } else {
      let historyHTML = '<h2>Transaction History:</h2>'
      for (let index in this.transactionHistory) {
        historyHTML += `<p>${Number(index) + 1}: ${this.transactionHistory[index]}</p>`
      }
      historyElement.innerHTML = historyHTML
    }
  }

  clearTransactionHistory() {
    this.transactionHistory = []
    alert('Transaction history cleared successfully.')
    this.displayTransactionHistory()
  }
}

const card = new ATM(1000)

document.getElementById('check-balance').addEventListener('click', () => {
  card.checkBalance()
})

document.getElementById('withdraw').addEventListener('click', () => {
  card.withdraw()
})

document.getElementById('deposit').addEventListener('click', () => {
  card.deposit()
})

document.getElementById('transaction-history').addEventListener('click', () => {
  card.displayTransactionHistory()
})

document.getElementById('clear-history').addEventListener('click', () => {
  card.clearTransactionHistory()
})
