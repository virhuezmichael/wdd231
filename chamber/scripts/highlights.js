const url = "data/members.json"

const highlights = document.querySelector('#member-highlights');

const displayHighlights = (members) => {
    const filtered = members.filter(member =>
        member.membershipLevel == 1 || member.membershipLevel == 2
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    selected.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('highlight-card');

      
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

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayHighlights(data.companies);
}

getMemberData();

