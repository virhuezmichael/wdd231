const url = "data/members.json"

const cards = document.querySelector('#cards');
const highlights = document.querySelector('#member-highlights');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.companies);
    displayHighlights(data.companies);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const logo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        logo.setAttribute('src', member.image);

        card.appendChild(logo);
        card.appendChild(address); 
        card.appendChild(phone);
        card.appendChild(website);
        

        cards.appendChild(card);
    });
}

const displayHighlights = (members) => {
    const filtered = members.filter(member =>
        member.membershipLevel == 1 || member.membershipLevel == 2
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    selected.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('highlight-card');

        // Agregar clase según tipo de membresía
        if (member.membershipLevel == 1) {
            card.classList.add('gold');
        } else if (member.membershipLevel == 2) {
            card.classList.add('silver');
        }

        const logo = document.createElement('img');
        const name = document.createElement('h3');
        const website = document.createElement('a');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');

        name.textContent = member.name;
        website.textContent = "Visit website";
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(website);

        highlights.appendChild(card);
    });
};

getMemberData();