import './index.css';

const hide = () => {
    localStorage.setItem('hide1', document.getElementById("cookie-consent__button").style.display = 'none');
    localStorage.setItem('hide2', p.textContent = '');
}


const button = document.createElement('button');
button.className = "cookie-consent__button";
button.textContent = 'Прекрасно';
button.id = 'cookie-consent__button'
button.addEventListener('click', function () {
    hide();
});

const h1 = document.createElement('h1');
h1.innerText = 'Hello World!';

const div = document.createElement('div');
div.className = 'cookie-consent';

const p = document.createElement('p');
p.className = 'cookie-consent__text';
p.textContent = 'Мы используем файлы cookie для наилучшего представления нашего сайта';

div.append(p, button);
document.body.append(div);

