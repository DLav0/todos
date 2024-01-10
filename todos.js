
const f = 'Welcome to the listing App.'

setTimeout(() => {

console.log (f)

let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q' && input!==null) {
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (Number.isNaN(index)) {
            console.log('This is not a number, idiot.')
        } else if (index >= todos.length) {
            console.log('The list is not that long.')
        } else if (index < 0) {
            console.log('The list does not use negative numbers')
        } else {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
    } else {
        console.log('Invalid entry')
    }

    input = prompt('What would you like to do?')

}
console.log('OK, QUIT THE APP!')

}, 5000);

//!Number.isNaN(index) && index < todos.length && index >= 0

//Next step could be to get the list to display in the web browser in addition to the console.  Possibly add animation.
//Not really sure about positioning.  Could probably add text to a div or something.  See coffee website.
//Could also recreate as a React App.  