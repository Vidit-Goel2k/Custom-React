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
        style: "display:block"
    },
    children: "Click this link to visit google"
}
renderElement(reactAnchor, container)

renderElement({type:"br"}, container)

// custom React Element as an object to make a Button Tag
const reactBtn = {
    type: "button",
    props:{
        id: "countBtn",
        style: "display:block"
    },
    children: "Click this to increase count"
}
renderElement(reactBtn, container)

// custom React Element as an object to make a Counter Div to display current count
let count = 0
const reactCount = {
    type: "div",
    props:{
        id: "countDiv"
    },
    children: `${count}`
}
renderElement(reactCount, container)

// custom implementation of useState Hook in react to re-render the current count
const increaseCounter = (curCount) => {
    const oldCount = document.querySelector("#countDiv")
    const updatedCount = document.createElement("div")
    
    updatedCount.setAttribute("id", "countDiv")

    updatedCount.innerText = `${count = curCount + 1}`
    
    container.replaceChild(updatedCount, oldCount)
}

document.querySelector("#countBtn").addEventListener('click',() => {increaseCounter(count)})

