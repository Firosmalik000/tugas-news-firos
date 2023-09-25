// function tableData() {
//   fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&s=indonesianews`)
//     .then((response) => response.json())
//     .then((results) => {
//       const cards = '';
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
//         const newsContainer = document.querySelector('#news-container');
//         newsContainer.innerHTML = cards.articles;
//       });
//     });
// }

// tableData();

//
//
//
//
// /search
const search = document.querySelector('.search-button');
search.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const news = await fetchNews(inputKeyword.value);
    displayNews(news);
  } catch (err) {
    alert('Tidak ada data yang ditemukan');
  }
});
// Fungsi untuk mengambil data berita dari API
async function fetchNews(keyword) {
  return fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&s=google-news')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === 'False') {
        throw new Error(response.Error);
      }
      return response.articles;
    });
}

// Fungsi untuk menampilkan berita dalam bentuk kartu
async function displayNews() {
  const newsContainer = document.getElementById('news-container');
  const newsData = await fetchNews();

  newsData.forEach((article) => {
    // Buat kartu berita menggunakan Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = showData(article);

    newsContainer.appendChild(card);
  });
}
// isi kartu
function showData(article) {
  return `
  <div class="card">
      <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
      <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.publishedAt}</p>
          <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
      </div>
  </div>
`;
}

const filternews = article.filter((keyword) => {
  return displayNews;
});
// Panggil fungsi untuk menampilkan berita
displayNews();
