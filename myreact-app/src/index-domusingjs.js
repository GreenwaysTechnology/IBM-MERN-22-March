//create new element and attach on existing rendered tree

function createElement(){
  //new element
  const Heading = document.createElement('h1')
  console.log(Heading)
  //set some content: 
  Heading.innerHTML = 'React!!!'

  //attach with existing dom node as child node
  document.getElementById('root').appendChild(Heading)

}
createElement();