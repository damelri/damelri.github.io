async function cikkBetoltes() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const res = await fetch('it/cikkek.json');
    const cikkek = await res.json();
    const cikk = cikkek.find(a => a.id === id);

    const container = document.getElementById('cikk');
    container.innerHTML = "";

    if (!cikk) {
        const msg = document.createElement("p");
    msg.textContent = "Nincs ilyen cikk.";
    container.appendChild(msg);
    return;
    }

    const mdRes = await fetch(cikk.file);
    const mdText = await mdRes.text();
    const htmlContent = marked.parse(mdText);

    const wrapper = document.createElement("cikk");

    const h1 = document.createElement("h1");
    h1.textContent = cikk.title;

    const small = document.createElement("small");
    small.textContent = cikk.date;

    const div = document.createElement("div");
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    div.innerHTML = cleanHtml;

    const back = document.createElement("p");
    const a = document.createElement("a");
    a.href = "it.html";
    a.textContent = "← Vissza a cikkekhez";
    back.appendChild(a);

    wrapper.appendChild(h1);
    wrapper.appendChild(small);
    wrapper.appendChild(div);
    wrapper.appendChild(back);

    container.appendChild(wrapper);
}

cikkBetoltes();