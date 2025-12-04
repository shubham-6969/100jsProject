// get

const celsiusEl = document.getElementById('celsius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin')

function convertTemp(event) {
    // current value jo user select karega phele tho baki value us current value 
    // k respect convert ho gaaye gi suppose celsius ko select karego vo fahrenheit and kelvin change hogaye gi...

    let currentValue = Number(event.target.value);

    switch (event.target.name) {
        case 'celsius':
            fahrenheitEl.value = (currentValue * 9 / 5 + 32).toFixed(2)
            kelvinEl.value = (currentValue + 273.15).toFixed(2)
            break;

        case 'fahrenheit':
            celsiusEl.value = ((currentValue - 32) * 5 / 9).toFixed(2);
            kelvinEl.value = ((currentValue - 32) * 5 / 9 + 273.15).toFixed(2);
            break;

        case 'kelvin':
            celsiusEl.value = (currentValue - 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.15) * 9 / 5 + 32).toFixed(3)
            break;

    }
}