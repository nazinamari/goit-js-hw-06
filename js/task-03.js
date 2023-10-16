const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery');

const galleryListItems = images.map(({ url, alt }) =>
  `<li class="gallery__item"><img class="gallery__item-img" srcset=${url} alt='${alt}' width="300"/></li>`)
  .join("");

	galleryList.style.cssText = `
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 5px;
`;

galleryList.insertAdjacentHTML("beforeend", galleryListItems);



// galleryList.style.display = "flex";
// galleryList.style.justifyContent = "space-around";
// galleryList.style.listStyle = "none";
// galleryList.style.gap = "5px";