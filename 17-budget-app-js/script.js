// Cache DOM
const budgetEl = document.getElementById("result-budget");
const expensesEl = document.getElementById("result-expenses");
const expensesListEl = document.getElementById("expenses-list");
const balanceEl = document.getElementById("result-balance");

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expensesForm = document.getElementById("expenses-form");
const expensesInput = document.getElementById("expenses-input");
const expensesName = document.getElementById("expenses-name-input");

let totalBudget = 0;
let totalExpenses = 0;
let totalBalance = 0;

// Functions

// Add Total Budget

function addBudget(e) {
  e.preventDefault();
  let budget = budgetInput.value;

  // Check if input is empty
  if (budget === "") {
    console.log("Please enter value");
    return;
  } else {
    totalBudget = budget;
    budgetEl.innerHTML = budget;
    calcBalance();
    budgetInput.value = "";
  }
}

// Add New Expense

function addExpense(e) {
  e.preventDefault();
  let expense = expensesInput.value;
  let expenseName = expensesName.value;

  // Check if input is empty
  if (expense === "" && expenseName === "") {
    console.log("Please enter value");
    return;
  } else {
    totalExpenses += parseInt(expense);
    expensesEl.innerHTML = totalExpenses;
    calcBalance();
    expensesInput.value = "";
    expensesName.value = "";
    addExpenseToUI(expense, expenseName);
  }
}

// Add expense to UI
function addExpenseToUI(amount, name) {
  console.log(amount, name);
  const newExpense = document.createElement("div");
  newExpense.classList.add("result__list-item");
  newExpense.classList.add("d-flex");
  newExpense.classList.add("justify-content-between");
  newExpense.innerHTML = `
  <h4 class="result__list-item-name">${name}<span></span></h4>
  <h4 class="result__list-item-expense">${amount}€<span></span></h4>
  <div>
    <a class="result__list-item-edit" id="expense-edit">
      <i class="fas fa-edit"></i>
    </a>
    <a class="result__list-item-delete" id="expense-delete">
      <i class="fas fa-trash"></i>
    </a>
  </div>
  `;
  expensesListEl.appendChild(newExpense);
  localStorage.setItem("expense", newExpense);

  // Handle Expense element remove
  const deleteBtns = document.querySelectorAll("#expense-delete");
  deleteBtns.forEach(function (btn) {
    btn.addEventListener("click", editExpense);
  });

  // Handle Expense element remove
  const editBtns = document.querySelectorAll("#expense-edit");
  editBtns.forEach(function (btn) {
    btn.addEventListener("click", removeExpenseFromUI);
  });
}

// Remove Expense from UI
function removeExpenseFromUI(e) {
  const targetEl = e.target;
  const expense = targetEl.parentElement.parentElement.parentElement;
  let expenseAmount =
    targetEl.parentElement.parentElement.parentElement.children[1].textContent;
  expenseAmount = expenseAmount.slice(0, expenseAmount.length - 1);
  totalExpenses -= parseInt(expenseAmount);
  expensesEl.innerHTML = totalExpenses;
  calcBalance();
  expense.remove();
}

// Edit expense
function editExpense(e) {
  console.log(e.target);
}

// Calculate Totals
function calcBalance() {
  totalBalance = eval(totalBudget - totalExpenses);
  balanceEl.innerHTML = totalBalance;
  console.log(totalBalance);
}

// Event Listeners
budgetForm.addEventListener("submit", addBudget);
expensesForm.addEventListener("submit", addExpense);
