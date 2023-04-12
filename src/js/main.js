const img = document.createElement('img');
img.src = '../media/placeholder.jpg';

const imgUrl = new URL('../media/placeholder.jpg', import.meta.url);

console.log(import.meta);

img.src = imgUrl;
document.body.append(img);