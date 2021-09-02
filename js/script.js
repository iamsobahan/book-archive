// searching books and getting search item using arrow function
const seachBook = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    BookApiLoad(inputValue)
    input.value = '';


}


// getting data from fetch api link..according to seachBook
const BookApiLoad = InputData => {
    const url = `https://openlibrary.org/search.json?q=${InputData}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const notFound = document.getElementById('notFound')
            const searchResult = document.getElementById('searchResult')
            const item = document.getElementById('item')

            if (data.numFound === 0) {
                item.innerHTML = '';
                searchResult.innerHTML = ''
                notFound.innerHTML = `<img src="images/nof.webp" alt="">`
            } else {
                notFound.innerHTML = ''
                searchResult.innerHTML = `${data.numFound} ${InputData} result found`;
                displayData(data.docs);
            }

        })
}

// display data in browser Ui by dynamically using arrow function and foreach

const displayData = docsData => {
    const item = document.getElementById('item');
    item.innerHTML = '';
    docsData.filter(ele => {
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img id="img" src="https://covers.openlibrary.org/b/id/${ele.cover_i}-M.jpg" class="card-img-top" alt="...">
        
            <div class="card-body">
                <h5 class="card-title">Book Name : ${ele.title}</h5>
                <p class="card-text">Author Name : ${ele.author_name[0]}</p>
                <p class = "card-text">First Published : ${ele.first_publish_year}</p>
                <small class="text-muted">Publisher Name : ${ele.publisher}</small>
            </div>
        </div>
     `
        item.appendChild(div);

    })
}