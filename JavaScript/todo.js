let count = 0;
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-text').value;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-primary done-btn"> Done </button>
    </td>
    `
    tableBody.appendChild(tr);
    document.getElementById('input-text').value = '';

    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (button of deleteBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }

    const doneBtn = document.getElementsByClassName('done-btn');
    for (button of doneBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }

})