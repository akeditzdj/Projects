const news = document.getElementById("news");

// Convert date ISO format to local format

function farmatDate(date) {
  const convertDate = new Date(date)
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");
  return convertDate;
}

// Set news description lenth limit

function limitCharacter(data, limit = 100) {
  if (data.length <= limit) {
    return data;
  } else {
    return data.substring(0, limit) + "...";
  }
}

// Fllter only english lang news only

function isEnglish(text) {
  const englishChars = /^[A-Za-z\s.,!?'"()]+$/;
  return englishChars.test(text);
}

// Check img content have or not

function checkImageAvailable(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true); // Image loaded successfully
    img.onerror = () => resolve(false); // Error loading image
    return (img.src = url); // Trigger image load
  });
}

// Load news to dashboard

function createCard(news) {
  let output = `
  <div class="col">
    <div class="card border-0">
     <img class="card-img-top" src="${news.urlToImage}" style="height:200px;">
       <div class="card-body">
         <h6 class="text-primary text-nowrap text-truncate" title="${
           news.title
         }">${news.title}</h6>
         <p class="text-secondary author text-nowrap text-truncate fs-6">${
           news.author
         }</p>
         <p class="my-2 text-truncate description">${news.description}</p>

       </div>
          <div class="card-footer bg-white d-flex justify-content-between align-items-center">
               <a href="${
                 news.url
               }" class="btn btn-primary btn-sm" target="_blank">Read More</a>
            <small class="text-secondary">${farmatDate(
              news.publishedAt
            )}</small></div>
  </div>
  </div>`;

  return output;
}

// Search news in the search input box

function getNews(query = "network") {
  const apiKey = "6351e0ab666c4ae88f0360ddd353e9f2";
  const uri = `https://newsapi.org/v2/everything?q=${query}&from=2024-09-09&sortBy=publishedAt&apiKey=${apiKey}`;
  console.log(uri);
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let htmlOutput = "";
      data.articles.forEach((news) => {
        htmlOutput += createCard(news);
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
