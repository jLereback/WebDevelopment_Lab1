document.addEventListener("DOMContentLoaded", function () {
    const bookContainer = document.querySelector(".books")

    fetch("../json/books.json")
      .then((response) => response.json())
      .then((data) => {

        data.books.forEach((book) => {
          const article = document.createElement("article");
          article.className = "book";

          const a1 = document.createElement("a");
          a1.href = book.href;

          const img = document.createElement("img");
          img.src = book.image;
          img.alt = book.alt;

          const p = document.createElement("p");

          const a2 = document.createElement("a");
          a2.textContent = book.title;
          a2.href = book.href;

          a1.appendChild(img);
          p.appendChild(a2)

          article.appendChild(a1);
          article.appendChild(p);

          bookContainer.appendChild(article);
        });
      })
  }
)