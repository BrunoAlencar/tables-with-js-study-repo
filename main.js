
const usersListElement = document.getElementById('user-list');
const users = [
  'bruno alencar',
  'carlos',
  'carlo3s',
  'carlo1s',
];


function addNewUser(){
  let name = document.getElementById('user-name').value;
  users.push(name)
  addLIElementInList(name)
}
function removeUser(event){
  console.log(event)
  const index = event.srcElement.value
  users.splice(index, 1);
  const child = usersListElement.children[index]
  usersListElement.removeChild(child)
}


function showAge(age){
  alert(age);
}

function addLIElementInList(text){
  const listSize = usersListElement.children.length;
  let deleteButton = document.createElement('button')
  deleteButton.innerText = "x"
  deleteButton.setAttribute('value', listSize)
  
  let liElement = document.createElement('li');
  liElement.setAttribute('id', listSize)
  liElement.innerText = text;
  liElement.appendChild(deleteButton)
  usersListElement.appendChild(liElement);

  deleteButton.addEventListener('click', removeUser)
}

function loadListElements(users){
  usersListElement.innerHTML = '';
  for(let i = 0; i < users.length; i++ ){
    addLIElementInList(users[i])
  }
}
loadListElements(users)
