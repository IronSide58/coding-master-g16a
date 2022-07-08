let i;
const contador = setInterval(() => {
    if (i < 5) {
        return console.log(i++);
    } else {
        clearInterval(contador);
    }
}, 1000);