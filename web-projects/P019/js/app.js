let main = (function () {

    // DOM elements srings
    const DOM = {
        window: '.window'
    }

    let start, end, sumChars, currentChar, str;

    str = document.querySelector(DOM.window).textContent.trim();
    currentChar = str.charAt(0);
    sumChars = 0;



    let setupEventListeners = function () {
        document.addEventListener('keypress', function (event) {

            if (event.key === currentChar) {
                
                str = str.substring(1);
                sumChars++;
                currentChar = str.charAt(0);

                let currentSpeed = (sumChars * 60) / ((Date.now() - start) / 1000);

                if (sumChars === 1) {
        
                    const func = () => {
                        end = Date.now();
                        console.log('Your speed is');
                        console.log((sumChars * 60) / ((end - start) / 1000));
                    };
    
                    start = Date.now();
                    setTimeout(func, 4 * 1000);
                }
            }

            

            

        });

    };

    return {
        init: function () {
            console.log('App start.');
            setupEventListeners();
        }
    };

})();

main.init();