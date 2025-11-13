import './style.css'

import img1 from '/img/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import img2 from '/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import img3 from '/img/ivana-cajina-_7LbC5J-jw4-unsplash.jpg';
import img4 from '/img/ian-dooley-d1UPkiFd04A-unsplash.jpg';

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: img1,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: img2,
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: img3,
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: img4,
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let currentItem = 0;

function mostrarReview(index) {
  const item = reviews[index];
  document.querySelector("img").src = item.img;
  document.querySelector(".nombre").textContent = item.name;
  document.querySelector(".trabajo").textContent = item.job;
  document.querySelector(".texto").textContent = item.text;
}


document.addEventListener("DOMContentLoaded", () => {
  mostrarReview(currentItem)

  document.querySelector(".botonderecha").addEventListener("click", () => {
    currentItem++
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    mostrarReview(currentItem);
  });

  document.querySelector(".botonizquierda").addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    mostrarReview(currentItem);
  });

  document.querySelector(".Random").addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    mostrarReview(currentItem);
  });

  let numeroRandom = Math.floor(Math.random() * 6) + 5;

  console.log(numeroRandom)
})

