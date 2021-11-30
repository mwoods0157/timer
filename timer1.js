const cLA = process.argv.slice(2);
for (let i = 0; i < cLA.length; i++) {
    (function(i) {
        var time = cLA[i];
        setTimeout(() => {
            console.log('beep');
        },time * 1000);
    })(i);
}

/*function beep() {
    console.log('Beep');
}*/