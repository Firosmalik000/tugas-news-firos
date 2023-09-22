// $.ajax({
//     URL : 'https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&news=indonesia news'
//     succses : results => {
//         const news = result.Search
//         let cards = '';
//         results.forEach((el) => {
//           cards += `<div class="col-md-4 my-5">
//           <div class="card">
//             <img src="" class="card-img-top" />
//             <div class="card-body">
//               <h5 class="card-title">News</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//               <a href="#" class="btn btn-primary">Show Details</a>
//             </div>
//           </div>`;
//         });
//       };
//    $(`.news`).html(cards)
//     })
//   tableData();

function tableData() {
  fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&news=indonesia news')
    .then((response) => response.json())
    .then((results) => {
      let cards = '';
      results.forEach((el) => {
        cards += `<div class="col-md-4 my-5">
        <div class="card">
          <img src="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">News</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <a href="#" class="btn btn-primary">Show Details</a>
          </div>
        </div>`;
      });
    });
  document.querySelector('.news').innerHTML = cards;
}
tableData();
