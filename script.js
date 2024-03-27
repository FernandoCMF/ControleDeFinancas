// funções auxiliares
function createTransactionContainer(id) {
  const container = document.createElement('div');
  container.classList.add('transaction')
  container.id(`transaction-${id}`)
  return container
}

function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })

  const formatedAmount = formater.format(amount)

  if (amount) {
    span.textContent = `${formatedAmount} C`
    span.classList.add('credit')
  } else {
    span.textContent = `${formatedAmount} D`
    span.classList.add('debit')
  }
  return span
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)

  document.querySelector('#transaction').append(container)
  container.append(title, amount)
}