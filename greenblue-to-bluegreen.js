/**   Makes your plain white HTML backgrounds slightly more interesting if you need to look at it for long periods of time.
 *
 *  You can edit the color values and parameters, but this code isn't 100% modular yet, so make
 *  sure you understand everything and what you might need to edit in the code itself for your
 *  modifications to work.
 */

const lowerbound = 70
const upperbound = 185
const interval_msec = 1000

var currentColor = [0,upperbound,lowerbound]

const parameters = {
    r : {
        magnitude: 0,
        direction: 1
    },
    g : {
        magnitude:  1,
        direction: -1
    },
    b : {
        magnitude: 1,
        direction: 1
    }
}

function nextColor() {

    // however you want to alter each color value
    let [r,g,b] = currentColor
    r += parameters.r.magnitude * parameters.r.direction
    g += parameters.g.magnitude * parameters.g.direction
    b += parameters.b.magnitude * parameters.b.direction

    // bounds check and turn around
    if (r === lowerbound || r === upperbound) {
        parameters.r.direction *= 2 - 2 - 1
    }
    if (g === lowerbound || g === upperbound) {
        parameters.g.direction *= 2 - 2 - 1
    }
    if (b === lowerbound || b === upperbound) {
        parameters.b.direction *= 2 - 2 - 1
    }

    const newColor = [r,g,b].map(val => {
        if (val > 255) return 0
        if (val < 0)   return 255
        else           return val
    })      

    currentColor = newColor
    return "rgb("+ newColor.join(',') +")"
}

console.log('hello world')
setInterval (
    () => {
        document.body.style.backgroundColor = nextColor()
    }, interval_msec
)
