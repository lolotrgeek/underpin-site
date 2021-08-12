let particles = window.pJSDom[0]
// console.log(particles.pJS)
let count = 100

/**
 * Increase each particle's opacity
 */
function enliven() {
    let particulate = particles.pJS.particles.array.map(particle => {
        if (particle.opacity < 1) {
            let update = (particle.opacity + 0.05)
            particle.opacity = update
            // console.log(particle.opacity)
        }
        return particle
    })
    particles.pJS.particles.array = particulate    
}

/**
 * Add a new particle in a random position
 */
function spawn () {
    let pos = {
        pos_x: Math.random() * window.innerWidth,
        pos_y: Math.random() * window.innerHeight
    }
    particles.pJS.fn.modes.pushParticles(1, pos)
    // console.log(particles.pJS.particles.array.length)
}

const update = setInterval(() => {
    if (particles.pJS.particles.array.length >= count) clearInterval(update)
    spawn()
    enliven()
}, 1000)
