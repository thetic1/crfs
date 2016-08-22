function largeFlush() {

    gallons += 2;

    alert(gallons);

}

function smallFlush() {

    gallons += 1;

    alert(gallons);

}

var gallons = 0;

document.querySelector('#large').onclick = largeFlush;
document.querySelector('#small').onclick = smallFlush;
