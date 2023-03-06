const blob = document.getElementById("blob");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
};

let interval = null;

document.querySelector("h1").onmouseover = e => {
    let iterations = 0;
    
    interval = setInterval(() => {
        e.target.innerText =e.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return e.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iterations >= e.target.dataset.value.length) {
            clearInterval(iterations);
        }

        iterations += 1 / 4;
    }, 30);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll("hidden");
hiddenElements.forEach((el) => oberserver.observe(el));