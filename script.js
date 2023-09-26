const search = document.querySelector('.search-button');
const inputKeyword = document.querySelector('.input-keyword');
let web = [];
search.addEventListener('click', function () {
  try {
    const news = inputKeyword.value;
    web = news.data.article;
    displayNews(web);
  } catch (err) {
    alert('Tidak ada data yang ditemukan');
  }
});
// Fungsi untuk mengambil data berita dari API
function fetchNews() {
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
async function displayNews(query) {
  const newsContainer = document.getElementById('news-container');
  const newsData = await fetchNews(query);

  newsData.forEach((article) => {
    // Buat kartu berita menggunakan Bootstrap
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML += showData(article);

    newsContainer.appendChild(card);
  });
  return;
}
// isi kartu

// event listener untuk livesearch
let query = '';
inputKeyword.addEventListener('input', async () => {
  query = await fetchNews(inputKeyword.value.toLowerCase());
  console.log(query);
  query.length > 0 ? searchArticle(query) : displayNews(web);
});
const searchArticle = (query) => {
  const filterNews = query.filter((e) => {
    return e.title.toLowerCase().includes(web);
  });
  console.log(filterNews);
};
displayNews();

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
