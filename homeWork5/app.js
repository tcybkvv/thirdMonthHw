const date = document.querySelector('#dateInput')
const dateBtn = document.querySelector('#dateButton')
const ageText = document.querySelector('#age')
const daysText = document.querySelector('#days')
const hoursText = document.querySelector('#hours')

const calculate = () => {
    const dateNow = moment()
    const birthDate = moment(date.value ,"YYYY-MM-DD")
    const dateDiff = moment.duration(dateNow.diff(birthDate))

    ageText.innerHTML = Math.floor(dateDiff.asYears())
    daysText.innerHTML = Math.floor(dateDiff.asDays())
    hoursText.innerHTML = Math.floor(dateDiff.asHours())
}

dateBtn.onclick = () => calculate()
