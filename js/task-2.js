const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

const b = {
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
}

function createImage (image, width=360,height = 300) {
  const item = document.createElement("li");
  const img = document.createElement("img")
  img.src = image.url;
  img.alt = image.alt;
  img.width = width;
  img.height = height;
  img.style.display ="block"
  item.append(img);
  return item
}

function addImages (images) {
  const items = [];
  images.forEach(element => {
    const item = createImage (element);
    items.push(item)
  });
  const list = document.querySelector(".gallery");
  list.append(...items);
  
  list.style.display="flex";
  list.style.listStyle = "none";
  list.style.padding = "0";
  list.style.gap = "24px"
  list.style.justifyContent = "center"
  list.style.flexWrap = "wrap"
}

addImages (images)