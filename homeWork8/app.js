const currencyInput = document.querySelector('#currencyInput');
const converterBlocks = document.querySelector('#converterBlocks');
const dollars = 87
const euro = 101
const yuan = 13
const rubles = 1.08
const pound = 117

currencyInput.oninput = () => {
    converterBlocks.innerHTML = ''
    const currencyAmount = currencyInput.value

    const currencies = [
        {
            symbol: '$',
            currency: dollars
        },
        {
            symbol: '€',
            currency: euro
        },
        {
            symbol: '¥',
            currency: yuan
        },
        {
            symbol: '₽',
            currency: rubles
        },
        {
            symbol: '£',
            currency: pound
        }
    ];

    currencies.forEach(currency => {
        const div = document.createElement('div');
        div.className = 'converterBlock';
        const result = (currencyAmount / currency.currency).toFixed(2);
        div.innerHTML = `${result} ${currency.symbol}`;
        converterBlocks.append(div);
    });

    if (currencyAmount === '') {
        converterBlocks.innerHTML = '';
    }
};
