let transformed = false;

document.getElementById("btn").addEventListener("click", function () {
    const body = document.body;
    const title = document.getElementById("title");
    const text = document.getElementById("text");

    if (!transformed) {
        body.classList.add("chaotic");

        title.innerText = "NOTHING IS REAL";
        text.innerText = "You were lied to. Click again if you dare.";

        transformed = true;
    } else {
        body.classList.remove("chaotic");

        title.innerText = "Everything is Calm";
        text.innerText = "Click anywhere to see the truth...";

        transformed = false;
    }
});