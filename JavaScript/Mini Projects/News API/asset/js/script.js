const news = document.getElementById("nwes");

function getNews() {
  const apiKey = "6351e0ab666c4ae88f0360ddd353e9f2";
  const query = "tesla";
  const uri = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-14&sortBy=publishedAt&apiKey=${apiKey}`;
}
