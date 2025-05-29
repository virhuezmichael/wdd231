const url = "data/membership.json";
const cards = document.querySelector("#cards");

async function getMembership() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembership(data.membership);
}

const displayMembership = (membership) => {
    membership.forEach((element, index) => {
        const card = document.createElement('section');
        const level = document.createElement('p');
        const price = document.createElement('p');
        const benefits = document.createElement('ul');
        const more = document.createElement('button');
        const modal = document.createElement('dialog');
        const closeModal = document.createElement('button');
        const labelCard = document.createElement('p');

        level.textContent = `${element.level} Membership Level`;
        price.textContent = `$${element.price}`;
        more.textContent = "Learn More";
        closeModal.textContent = "❌";
        labelCard.textContent = "Membership Benefits";

        card.classList.add('membershipCard')
        modal.classList.add('modal');
        closeModal.classList.add('closeModal');
        more.classList.add('openModal');

        
        element.benefits.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            benefits.appendChild(li);
        });

        modal.appendChild(closeModal);
        modal.appendChild(labelCard);
        modal.appendChild(benefits);

        
        more.addEventListener('click', () => {
            modal.showModal();
        });

        closeModal.addEventListener('click', () => {
            modal.close();
        });

        
        card.appendChild(level);
        card.appendChild(price);
        card.appendChild(more);
        card.appendChild(modal);

        cards.appendChild(card);
    });
}

getMembership();
