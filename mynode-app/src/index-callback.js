

function blockMe(message) {
    console.log(message)
}
//callback functions are higher order function
function sayGreet(callback) {
    //async api 
    setTimeout(() => { 
        callback('i am delayed function')
    }, 5000)//when this function is called thread is not blocked
}
blockMe('start')
sayGreet(function(data){
  console.log(data)
})
blockMe('end')
