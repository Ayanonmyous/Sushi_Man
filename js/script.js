// // import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: '../assets/sushi-12.png',
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: '../assets/sushi-11.png',
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        imgSrc: '../assets/sushi-10.png',
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

const catalogue = document.querySelector('.popular-foods__catalogue');

function renderCards(cards){
    catalogue.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('article');
        cardElement.classList.add('popular-foods__card');

        if(card.active){
            cardElement.classList.add('active-card');
        }
        
        cardElement.innerHTML =`
            <img class="popular-foods__card-image" src="${card.imgSrc}" alt="${card.alt}" />
            <h4 class="popular-foods__card-title">${card.title}</h4>
            <div class="popular-foods__card-details flex-between">
                <div class="popular-foods__card-rating">
                    <img src="assets/star.svg" alt="star" />
                    <p>${card.rating}</p>
                </div>
                <p class="popular-foods__card-price">${card.price}</p>
            </div>
        `;

        // Add event listener to handle click and toggle active state
        cardElement.addEventListener('click', () => {
            // Remove 'active-card' from all cards
            document.querySelectorAll('.popular-foods__card').forEach(c => c.classList.remove('active-card'));
            // Add 'active-card' to the clicked card
            cardElement.classList.add('active-card');
        });

        // Append the card to the catalogue
        catalogue.appendChild(cardElement);
    });
}

renderCards(cards);
