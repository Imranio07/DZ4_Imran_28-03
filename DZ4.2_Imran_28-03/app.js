var trafficlight = function(inputValue) {
    switch (inputValue) {
        case 'red':
            console.dir(document.body.style.backgroundColor = 'red')
            alert('stop')
            break
        case 'yellow':
            console.dir(document.body.style.backgroundColor = 'yellow')
            alert('ready')
            break
        case 'green':
            console.dir(document.body.style.backgroundColor = 'green')
            alert('green')
            break
        default:
            alert('enter trafficlights color')
    }
}
var inputValue=prompt('enter trafficlights color')
trafficlight(inputValue)