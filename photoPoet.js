let images = [];
let current = 0;

const container = document.getElementById('galeria'); 
const jsonPath = container.dataset.json;

fetch(jsonPath)
    .then(r => r.json())
    .then(adatok => {
        images = adatok;

        adatok.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = item.cover;
            img.alt = item.cim;
            img.onclick = () => showOverlay(index);

            const title = document.createElement('div');
            title.className = 'gallery-title';
            title.textContent = item.cim;
            title.onclick = () => showOverlay(index);


            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card);
            
        });
    });

function showOverlay(index) {
    current = index;
    document.getElementById("overlay-img").src = images[current].kep;   // teljes kép
    document.getElementById("overlay-title").textContent = images[current].cim;
    document.getElementById("overlay-text").textContent = images[current].szoveg;
    document.getElementById("overlay").style.display = "flex";
}

document.querySelector(".prev").onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showOverlay(current);
};
document.querySelector(".next").onclick = () => {
    current = (current + 1) % images.length;
    showOverlay(current);
};
document.querySelector(".close").onclick = () => {
    document.getElementById("overlay").style.display = "none";
};

// háttérre kattintva is záródjon
document.getElementById("overlay").addEventListener("click", e => {
    if (e.target.id === "overlay") {
        document.getElementById("overlay").style.display = "none";
    }
});