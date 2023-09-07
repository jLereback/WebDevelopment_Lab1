let stars1 = document.querySelector("#stars1");
let stars2 = document.querySelector("#stars2");
let stars3 = document.querySelector("#stars3");
let stars4 = document.querySelector("#stars4");
let stars5 = document.querySelector("#stars5");
let stars6 = document.querySelector("#stars6");
let stars7 = document.querySelector("#stars7");

fetch("json/rating.json")
    .then((res) => {
        // console.log(JSON.stringify(res.body));
        return res.json();
    })
    .then(function (data) {
        let ratings = data.ratings;
        if (stars1) {
            stars1.textContent = "⭐ " + ratings.book1.stars + " · " + ratings.book1.numOfRatings + " ratings";
        } else if (stars2) {
            stars2.textContent = "⭐ " + ratings.book2.stars + " · " + ratings.book2.numOfRatings + " ratings";
        } else if (stars3) {
            stars3.textContent = "⭐ " + ratings.book3.stars + " · " + ratings.book3.numOfRatings + " ratings";
        } else if (stars4) {
            stars4.textContent = "⭐ " + ratings.book4.stars + " · " + ratings.book4.numOfRatings + " ratings";
        } else if (stars5) {
            stars5.textContent = "⭐ " + ratings.book5.stars + " · " + ratings.book5.numOfRatings + " ratings";
        } else if (stars6) {
            stars6.textContent = "⭐ " + ratings.book6.stars + " · " + ratings.book6.numOfRatings + " ratings";
        } else if (stars7) {
            stars7.textContent = "⭐ " + ratings.book7.stars + " · " + ratings.book7.numOfRatings + " ratings";
        }
    })
    .catch((error) => console.error("Something went wrong - " + error));


function validateForm() {
    const input = document.getElementById("rateName").value;
    if (input === "") {
        alert("Name must not be empty");
    }
}
