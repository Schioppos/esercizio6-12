// script.js

// Funzione per ottenere i libri dalla chiamata HTTP GET
async function getBooks() {
   try {
       const response = await fetch('https://striveschool-api.herokuapp.com/books');
       const books = await response.json();
       displayBooks(books);
   } catch (error) {
       console.error('Errore nella chiamata HTTP:', error);
   }
}

// Funzione per visualizzare i libri sulla pagina
function displayBooks(books) {
   const bookListContainer = document.getElementById('bookList');

   books.forEach(book => {
       const card = document.createElement('div');
       card.classList.add('col-md-3', 'mb-4');

       card.innerHTML = `
           <div class="card">
               <img src="${book.img}" class="card-img-top" alt="${book.title}">
               <div class="card-body">
                   <h5 class="card-title">${book.title}</h5>
                   <p class="card-text">Prezzo: ${book.price} €</p>
                   <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
               </div>
           </div>
       `;

       bookListContainer.appendChild(card);
   });
}

// Funzione per rimuovere una card quando viene premuto il pulsante "Scarta"
function removeCard(button) {
   const card = button.closest('.card');
   card.remove();
}

// Richiama la funzione per ottenere i libri al caricamento della pagina
getBooks();
