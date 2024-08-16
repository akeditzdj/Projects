const news = document.getElementById("news");

function farmatDate(date) {
  const convertDate = new Date(date)
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");
  return convertDate;
}

function limitCharacter(data, limit = 100) {
  if (data.length <= limit) {
    return data;
  } else {
    return data.substring(0, limit) + "...";
  }
}

function createCard(news) {
  let output = `
  <div class="col">
    <div class="card" style="height:450px;">
     <img class="card-img-top" src="${
       news.urlToImage
     }" style="height:200px; width:100%;">
       <div class="card-body">
         <h6 class="text-primary text-nowrap text-truncate" title="${
           news.title
         }">${news.title}</h6>
         <small class="text-secondary">${news.author}</small>
         <p class="my-2">${limitCharacter(news.description)}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
               <a href="${
                 news.url
               }" class="btn btn-primary btn-sm" target="_blank">Read More</a>
            <small class="text-secondary">${farmatDate(
              news.publishedAt
            )}</small></div>
       </div>
  </div>
  </div>`;

  return output;
}

function getNews(query = "tesla") {
  const apiKey = "6351e0ab666c4ae88f0360ddd353e9f2";
  const uri = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-16&sortBy=publishedAt&apiKey=${apiKey}`;
  console.log(uri);
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      let htmlOutput = "";
      data.articles.forEach((news) => {
        if (news.description != null)
        if (news.urlToImage != null) htmlOutput += createCard(news);
      });
      news.innerHTML = htmlOutput;
    });
}

document.addEventListener("DOMContentLoaded", getNews());

btnSearch.addEventListener("click", function () {
  const q = txtSearch.value.trim();
  if (q != "") {
    getNews(q);
  }
});
