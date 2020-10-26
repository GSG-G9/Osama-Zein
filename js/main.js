// add chh1 with text to body
let p = document.createElement("p")
let body = document.querySelector("body")
let TextNode = document.createTextNode("simple text")
p.appendChild(TextNode)
body.appendChild(p)
