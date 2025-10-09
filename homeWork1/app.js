const coinCount = document.querySelector('.coin_count');
const hamsterBlock = document.querySelector('.hamster_block');

const tap = () => {
    let coins = Number(coinCount.innerHTML)
    if (coins < 10) {
        coins += 1
    } else if (coins < 100) {
        coins += 2
    } else {
        coins += 5
    }
    coinCount.innerHTML = coins
}

hamsterBlock.onclick = tap