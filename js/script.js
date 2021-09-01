const seachBook = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;


    BookApiLoad(inputValue)
    input.value = '';


}

const BookApiLoad = data => {
    const url = `http://openlibrary.org/search.json?q=${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.docs))


}

const displayData = docsData => {



    console.log(docsData)
    const item = document.getElementById('item')


    docsData.forEach(ele => {
        const div = document.createElement('div');

        div.classList.add('col');


        div.innerHTML = `
        <div class="card h-100">
        <img id="img" src="https://covers.openlibrary.org/b/id/${ele.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">${ele.author_name[0]}</p>
            <small class="text-muted">${ele.publisher}</small>
        </div>
      
       `

        item.appendChild(div);



    })





}