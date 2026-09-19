let budget = 0;
let expenses = [];

function showData() {
	let totalExpenses = 0;
	let rows = '';

	for (let i = 0; i < expenses.length; i++) {
		totalExpenses += expenses[i].amount;
		rows += `<tr>
			<td>${expenses[i].name}</td>
			<td>${expenses[i].amount.toFixed(2)}</td>
			<td><button class="remove-button" onclick="removeExpense(${i})">Remove</button></td>
		</tr>`;
	}

	document.querySelector('#totalBudget').textContent = budget.toFixed(2);
	document.querySelector('#totalExpenses').textContent = totalExpenses.toFixed(2);
	document.querySelector('#budgetLeft').textContent = (budget - totalExpenses).toFixed(2);
	document.querySelector('#expenseTableBody').innerHTML = rows;
	document.querySelector('#emptyMessage').hidden = expenses.length > 0;

}

document.querySelector('#addBudgetButton').onclick = function () {
	let amount = Number(document.querySelector('#budgetInput').value);
	if (amount > 0) {
		budget += amount;
		document.querySelector('#budgetInput').value = '';
		showData();
	}
};

document.querySelector('#addExpenseButton').onclick = function () {
	let name = document.querySelector('#expenseNameInput').value;
	let amount = Number(document.querySelector('#expenseAmountInput').value);
	if (name !== '' && amount > 0) {
		expenses.push({ name: name, amount: amount });
		document.querySelector('#expenseNameInput').value = '';
		document.querySelector('#expenseAmountInput').value = '';
		showData();
	}
};

function removeExpense(index) {
	expenses.splice(index, 1);
	showData();
}

document.querySelector('#resetButton').onclick = function () {
	budget = 0;
	expenses = [];
	showData();
};

showData();