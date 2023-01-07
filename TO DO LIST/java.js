const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const resultado = document.getElementById('resultado');
    const item = document.getElementById('item').value;

    const div_elemento = document.createElement('div');
    div_elemento.setAttribute('class', 'elemento');

    const text = document.createElement('p');
    text.setAttribute('class', 'text');
    text.innerHTML = item;

    const div_icons = document.createElement('div');
    div_icons.setAttribute('class', 'icons');

    const icon1 = document.createElement('i');
    const icon2 = document.createElement('i');
    const icon3 = document.createElement('i');

    icon1.setAttribute('class', 'fas fa-check-circle');
    icon1.setAttribute('id', 'icon1');

    icon2.setAttribute('class', 'fas fa-times-circle');
    icon2.setAttribute('id', 'icon2');

    icon3.setAttribute('class', 'fa-solid fa-trash');
    icon3.setAttribute('id', 'icon3');
    
    div_icons.appendChild(icon1);
    div_icons.appendChild(icon2);
    div_icons.appendChild(icon3);

    div_elemento.appendChild(text);
    div_elemento.appendChild(div_icons);

    resultado.appendChild(div_elemento);

    // ******************** FUNCIONALIDAD DE LOS BOTONES DE LOS 3 ICONOS ********************
    
    icon1.addEventListener('click', (e) => {
        e.preventDefault();
        text.classList.toggle('green');
        text.classList.remove('red');
    });

    icon2.addEventListener('click', (e) => {
        e.preventDefault();
        text.classList.toggle('red');
        text.classList.remove('green');
    });

    icon3.addEventListener('click', (e) => {
        e.preventDefault();
        resultado.removeChild(div_elemento);
    });
})
