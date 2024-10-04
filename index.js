// Write your code here!
const remove = document.querySelector("main")
remove.remove("main")

const newHeader = document.createElement('h1')
newHeader.id='victory'
newHeader.textContent= "David Parsley is the champion"

document.body.append(newHeader)