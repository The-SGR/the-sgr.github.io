let counter = 0;
document.getElementById("cBtn").onclick = function () {
    document.getElementById("counter").innerText = `Clicks: ${counter += 1}`;
}; //lol