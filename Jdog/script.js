const gems = [
    { id: 1, name: "Common Gem 1", type: "common", price: 1.99 },
    { id: 2, name: "Common Gem 2", type: "common", price: 1.99 },
    { id: 3, name: "Uncommon Gem 1", type: "uncommon", price: 2.99 },
    { id: 4, name: "Uncommon Gem 2", type: "uncommon", price: 2.99 },
    { id: 5, name: "Rare Gem 1", type: "rare", price: 9.99 },
    { id: 6, name: "Rare Gem 2", type: "rare", price: 9.99 },
    { id: 7, name: "Legendary Gem 1", type: "legendary", price: 19.99 },
    { id: 8, name: "Legendary Gem 2", type: "legendary", price: 19.99 }
];

function displayGems(gems) {
    const auctionItems = document.getElementById('auctionItems');
    auctionItems.innerHTML = '';
    gems.forEach(gem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h2>${gem.name}</h2>
            <p>Type: ${gem.type.charAt(0).toUpperCase() + gem.type.slice(1)}</p>
            <p class="price">Price: €${gem.price.toFixed(2)}</p>
            <button onclick="buyGem(${gem.id})">Buy for €${(gem.price + 1).toFixed(2)}</button>
        `;
        auctionItems.appendChild(itemDiv);
    });
}

function searchGems() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredGems = gems.filter(gem => gem.name.toLowerCase().includes(query));
    displayGems(filteredGems);
}

function buyGem(gemId) {
    const gem = gems.find(g => g.id === gemId);
    if (gem) {
        gem.price += 1;
        displayGems(gems);
        alert(`You bought ${gem.name} for €${gem.price.toFixed(2)}.`);
    }
}

document.addEventListener('DOMContentLoaded', () => displayGems(gems));
