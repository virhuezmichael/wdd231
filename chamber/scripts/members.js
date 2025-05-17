const url = "data/members.json"

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.companies);
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

getMemberData();