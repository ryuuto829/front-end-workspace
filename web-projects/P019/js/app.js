let main = (function () {

    // DOM elements srings
    const DOM = {
        window: '.window',
        text: '.window__shadow-text'
    }

    let sumChars, currentChar, str, start;

    //str = document.querySelector(DOM.window).textContent.trim();
    //currentChar = str.charAt(0);
    //sumChars = 0;

    let resetSpeed = function () {
        str = document.querySelector(DOM.window).textContent.trim();
        document.querySelector(DOM.text).textContent = '';
        currentChar = str.charAt(0);
        sumChars = 0;
    };

    // Start counting time
    let setTimer = function () {
        let end;

        const func = () => {
            end = Date.now();
            displayResult(end);
            resetSpeed();
        };

        //start = Date.now();
        setTimeout(func, 60 * 1000);
        return end;
    };

    let calcSpeed = function (symbols, start, end) {
        let currentSpeed = (symbols * 60) / ((end - start) / 1000);
        return currentSpeed;
    };


    let displayResult = function (end) {
        let speed = calcSpeed(sumChars, start, end);
        alert('Your speed = ' + Math.round(speed) + ' CPM');
    };

    let setupEventListeners = function () {

        document.addEventListener('keypress', function (event) {

            if (event.key === ' ') {
                if (currentChar === '˽') {
                    document.querySelector(DOM.text).textContent += currentChar;
                    str = str.substring(1);
                    sumChars++;
                    currentChar = str.charAt(0);
                }
            }

            if (event.key === currentChar) {
                document.querySelector(DOM.text).textContent += currentChar;
                str = str.substring(1);
                sumChars++;
                currentChar = str.charAt(0);

                if (sumChars > 1) {
                    currentSpeed = calcSpeed(sumChars, start, Date.now());
                }

                if (sumChars === 1) {
                    start = Date.now();
                    setTimer();
                }
            }
        });
    };

    return {
        init: function () {
            resetSpeed();
            setupEventListeners();
        }
    };

})();

main.init();