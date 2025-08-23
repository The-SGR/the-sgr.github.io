let counter = localStorage.getItem("clicks");
counter = counter ? parseInt(counter) : 0;

document.getElementById("counter").innerText = counter;

document.getElementById("cBtn").onclick = function () {
    counter++;
    document.getElementById("counter").innerText = counter;
    localStorage.setItem('clicks', counter);
};

document.getElementById("resetBtn").onclick = function () {
    if(confirm("r u sure?")) {
        counter = 0;
        document.getElementById("counter").innerText = counter;
        localStorage.setItem('clickCount', counter);
    }
};