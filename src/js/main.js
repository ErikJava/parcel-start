const img = document.createElement('img');
img.src = '../media/rainbow-sq.webp';

const imgUrl = new URL('../media/rainbow-sq.webp', import.meta.url);

console.log(import.meta);

img.src = imgUrl;
document.body.append(img);