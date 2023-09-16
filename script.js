const container = document.querySelector("#root")

// Function to render our custom React Elements to our Dom
const renderElement = (reactElement, container) => {
    const element = document.createElement(reactElement.type)
    
    // dynamically setting the attributes of each element
    for (const prop in reactElement.props) {
        element.setAttribute(`${prop}`, `${reactElement.props[prop]}`)
    }
    
    element.innerText = reactElement.children
    
    container.appendChild(element)
}

// custom React Element as an object to make an Anchor Tag
const reactAnchor = {
    type: "a",
    props:{
        id: "googleLink",
        href: "https://google.com",
        target: "_blank",
        style: "display:block; margin:10px"
    },
    children: "Click this link to visit google"
}
renderElement(reactAnchor, container)

// renderElement({type:"br"}, container)

// custom React Element as an object to make a Counter Div to display current count
let count = 0
const reactCount = {
    type: "div",
    props:{
        id: "countDiv",
        style: "margin:10px; margin-left:20px"
    },
    children: `${count}`
}
renderElement(reactCount, container)

// custom React Element as an object to make a Button Tag
const reactIncBtn = {
    type: "button",
    props:{
        id: "countIncBtn",
        style: "display:block; margin:10px; text-align:center"
    },
    children: "Click this to increase count"
}
renderElement(reactIncBtn, container)

// custom React Element as an object to make a Button Tag
const reactDecBtn = {
    type: "button",
    props:{
        id: "countDecBtn",
        style: "display:block; margin:10px; text-align:center"
    },
    children: "Click this to decrease count"
}
renderElement(reactDecBtn, container)

// custom implementation of useState Hook in react to re-render the current count
const updateCounter = (newCount) => {
    const oldCount = document.querySelector("#countDiv")
    const updatedCount = oldCount
    
    updatedCount.innerText = `${newCount}`
    
    container.replaceChild(updatedCount, oldCount)
}

document.querySelector("#countIncBtn").addEventListener('click',() => {updateCounter(count += 1)})
document.querySelector("#countDecBtn").addEventListener('click',() => {updateCounter(count -= 1)})

