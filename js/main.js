// add h1 with text to body
let p = document.createElement("p")
let body = document.querySelector("body")
let TextNode = document.createTextNode("semple text")
p.appendChild(TextNode)
body.appendChild(p)
