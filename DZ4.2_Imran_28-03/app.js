var trafficlight = function(inputValue) {
    switch (inputValue) {
        case 'red':
            console.dir(document.body.style.backgroundColor = 'red')
            return alert('stop')
            break
        case 'yellow':
            console.dir(document.body.style.backgroundColor = 'yellow')
            return alert('ready')
            break
        case 'green':
            console.dir(document.body.style.backgroundColor = 'green')
            return alert('green')
            break
        default:
            return alert('enter trafficlights color')
    }
}
var inputValue=prompt('enter trafficlights color')
trafficlight(inputValue)