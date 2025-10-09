const lights = document.querySelectorAll('.light');
const text = document.querySelector('.text');

lights.forEach(light => {
    light.onclick = () => {
        lights.forEach(l => l.classList.remove('active'))
        text.innerHTML = ''
        light.classList.add('active')

        if (light.classList.contains('red')) {
            text.innerHTML = 'STOP'
            text.style.color = 'red'
        } else if (light.classList.contains('yellow')) {
            text.innerHTML = 'WAIT'
            text.style.color = 'yellow'
        } else {
            text.innerHTML = 'GO'
            text.style.color = 'green'
        }
    }
})

