fetch('teaching/cikkek.json')
.then(res => res.json())
.then(cikkek => {
    const container = document.getElementById('cikkek');
    cikkek.forEach(cikk => {

        const cikkElem = document.createElement('cikk');

        const h1 = document.createElement('h1');
        h1.textContent = cikk.title;

        const small = document.createElement('small');
        small.textContent = cikk.date;

        const p = document.createElement('p');
        p.textContent = cikk.excerpt;

        const a = document.createElement('a');
        a.href = `tanitas.html?id=${cikk.id}`;
        a.textContent = "Olvasd tovább →";

        cikkElem.appendChild(h1);
        cikkElem.appendChild(small);
        cikkElem.appendChild(p);
        cikkElem.appendChild(a);

        container.appendChild(cikkElem);
    });
});