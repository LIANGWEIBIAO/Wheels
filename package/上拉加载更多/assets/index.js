document.addEventListener("scroll", (e) => {
    var clientHeight = document.documentElement.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset;

    if (scrollTop + clientHeight == scrollHeight) {
        alert("触底了");
    }
})

