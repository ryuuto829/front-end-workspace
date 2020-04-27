let main = (() => {

    let generateData = function () {
        const text = 'debt physics presence accident wealth reception foundation trainer community internet chocolate addition delivery poet town art desk message disease goal bread bedroom initiative competition penalty significance football name climate connection people cigarette surgery drawer championship currency pizza reputation variation series government proposal wedding driver arrival efficiency customer difference river attention';
        return text.split(' ');
    };

    let words, list, searchInput, html;
    words = generateData();
    searchInput = document.getElementById('search');
    list = document.querySelector('.list-group');
    html = '<li class="list-group-item list-group-item-action">%word%</li>';


    searchInput.addEventListener('input', () => {
        list.innerHTML = '';

        for (let item of words) {
            if (item.startsWith(searchInput.value)) {
                let newHtml = html.replace('%word%', item);
                list.insertAdjacentHTML('afterbegin', newHtml);
            } else if (searchInput.value === undefined) {
                let newHtml = html.replace('%word%', item);
                list.insertAdjacentHTML('afterbegin', newHtml);
            }
        }
    });

    return {
        init: () => {
            for (let item of words) {
                let newHtml = html.replace('%word%', item);
                list.insertAdjacentHTML('afterbegin', newHtml);
            }
        }
    };
})();

main.init();