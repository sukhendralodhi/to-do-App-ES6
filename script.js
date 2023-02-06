const form = document.getElementById('form');
const input = document.getElementById('input');
const body = document.querySelector('body');


function addTodos() {
    const dataValue = input.value;
    if (input.value === '') {
        input.classList.add('border-2', 'border-red-400');
    } else {
        let todos = document.getElementById('todos');
        todos.classList.add('px-8', 'py-2', 'text-center', 'rounded')

        // template literals 
        todos.innerHTML += ` <li class="items border-t-2 px-4 flex justify-between">${dataValue} <span class="deleteBtn ml-8 transition-all ease-linear duration-75 delay-75 hover:text-red-800"><i class="fas fas-fa-duotone fa-trash"></i></span></li>`;

        // console.log(todos);
        
        let deleteBtns = document.querySelectorAll('.deleteBtn');


        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove()
            })
        })
  
       
        input.value = '';
    }

}


// dry code 

let deleteBtns = document.querySelectorAll('.deleteBtn');


deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.parentElement.parentElement.remove()
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);;
    addTodos();
})