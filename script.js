const quote = document.getElementById("quote");

function getKanye() {
  fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.quote;

      const tweet = encodeURIComponent(
        `"${data.quote}"-@kanyewest via https://nigranac.github.io/JavaScript-GetQuote/ @nigranac`
      );
      document.getElementById(
        "tweet"
      ).href = `https://twitter.com/intent/tweet?text=${tweet}`;
    });
}
