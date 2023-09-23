// function tableData() {
//   fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&s=indonesianews`)
//     .then((response) => response.json())
//     .then((results) => {
//       const cards = document.createElement('div');
//       cards.classList.add('col-md-4', 'mb-4');
//       results.forEach((article) => {
//         cards += `
//             <div class="card">
//                 <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${article.title}</h5>
//                     <p class="card-text">${article.description}</p>
//                     <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
//                 </div>
//             </div>`;
//         // results.appendChild(cards);
//       });
//       document.querySelector('#news').innerHTML = cards.articles;
//     });
// }
// tableData();
//
//
//
//
//
//

// Fungsi untuk mengambil data berita dari API
async function fetchNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&i=google-news`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Gagal mengambil data berita:', error);
    return [];
  }
}

// Fungsi untuk menampilkan berita dalam bentuk kartu
async function displayNews() {
  const newsContainer = document.getElementById('news-container');
  const newsData = await fetchNews();

  newsData.forEach((article) => {
    // Buat kartu berita menggunakan Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
            <div class="card">
                <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.publishedAt}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
                </div>
            </div>
        `;

    newsContainer.appendChild(card);
  });
}

// Panggil fungsi untuk menampilkan berita
displayNews();
