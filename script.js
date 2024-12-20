const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const select = document.querySelector(".search__select");

button.addEventListener("click", submitRequest);


function submitRequest(event) {
    event.preventDefault();

    const value = input.value;
    const searchEngine = select.value;

    let params;

    if (searchEngine === "google" || searchEngine === "бинг") {
        params = "/search?q=";
    } else if (searchEngine === "яндекс") {
        params = "/search?text=";
    }else if (searchEngine === "что это такое!?") {
        params = "?q=";
    }


}
