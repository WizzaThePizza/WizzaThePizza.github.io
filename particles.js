particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, // Adjust the number of particles
            density: {
                enable: true,
                value_area: 200 // Adjust the area in which particles are distributed
            }
        },
        color: {
            value: "#000000" // Adjust the color of the particles
        },
        shape: {
            type: "circle" // Adjust the shape of the particles (e.g., circle, triangle, polygon)
        },
        opacity: {
            value: 1, // Adjust the opacity of the particles
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 5, // Adjust the size of the particles
            random: true,
            anim: {
                enable: true
            }
        },
        line_linked: {
            enable: false, // Disable particle connections
            "color": "#000",
            "width": 3,
        },
        move: {
            enable: true,
            speed: 4, // Adjust the speed of the particles
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // Adjust the interaction mode (e.g., grab, repulse)
            }
        }
    }
});