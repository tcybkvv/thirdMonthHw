const generateBtn = document.querySelector('.generateBtn');
const block = document.querySelector('.block');

const generateNumbers = () => {
    block.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.className = 'blockNumber';

        const h3 = document.createElement('h3');
        h3.innerHTML = Math.floor(Math.random() * 99) + 1

        block.append(div);
        div.append(h3)
    }
}

generateBtn.onclick = () => {
    generateNumbers();
}