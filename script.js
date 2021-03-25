// These are the variables I need to use for the program.
let age = 0
let day = 0

// Next, I have to connect my JavaScript to the button in HTML. It will link to a function I will write out later.
document.getElementById('button1').addEventListener('click', time)

// Now, I have to write out what function 'time' does.
function time () {
  age = document.getElementById('text1').value
  day = document.getElementById('text2').value
  age = parseInt(age)
  if ((age <= 18) && (day !== 'Saturday' && day !== 'Sunday')) {
    document.getElementById('results').innerHTML = 'It\'s time to go to school!'
  } else if ((age > 18) && (day !== 'Saturday' && day !== 'Sunday')) {
    document.getElementById('results').innerHTML = 'It\'s time to go to work!'
  } else {
    document.getElementById('results').innerHTML = 'It\'s finally time to relax for the weekend!'
  }
}
