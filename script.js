function news() {
  const newsList = document.getElementById("newsList");

//   const apiKey = "13b7924ed53f4aa2b60eb85c9d5e1c07";
  const apiUrl =
    "https://newsapi.org/v2/everything?q=tesla&from=2024-01-27&sortBy=publishedAt&apiKey=13b7924ed53f4aa2b60eb85c9d5e1c07";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.articles.forEach((articles) => {
        if(articles?.urlToImage == null){
            return
        }
        const div = document.createElement("div");
        div.classList.add("article");
        div.innerHTML = `
            <img src="${articles.urlToImage}">
            <h2>${articles.title}</h2>
            <p>${articles.description}</p>
            `;
        newsList.appendChild(div);
      });
    })
    .catch((error) => console.error("Some thing went wrong", error));
}

