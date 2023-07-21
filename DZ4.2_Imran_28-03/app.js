var trafficlight = function(inputValue) {
    var outputElement = document.getElementById("output");
    switch (inputValue) {
        case 'red':
            console.dir(document.body.style.backgroundColor = 'red')
            return outputElement.innerText = "stop";
            break
        case 'yellow':
            console.dir(document.body.style.backgroundColor = 'yellow')
            return outputElement.innerText = "ready";
            break
        case 'green':
            console.dir(document.body.style.backgroundColor = 'green')
            return outputElement.innerText = "go";
            break
        default:
            return outputElement.innerText = "enter trafficlights color"
    }
}
var inputValue=prompt('enter trafficlights color')
trafficlight(inputValue)