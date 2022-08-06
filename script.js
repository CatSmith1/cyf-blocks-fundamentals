/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var image_links;


image_links = ['https://i.imgur.com/JNiwSEm.jpg', 'https://i.imgur.com/3JKE9vI.jpg', 'https://i.imgur.com/487FZuU.jpg', 'https://i.imgur.com/bShtsex.jpg', 'https://i.imgur.com/POGQrTv.jpg', 'https://i.imgur.com/fCbBBhs.jpg'];


document.getElementById('next-button').addEventListener('click', (event) => {
  let element_images = document.getElementById('images');
  image_links.push(image_links.shift());
  element_images.setAttribute("src", image_links[0]);

});

document.getElementById('previous-button').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  image_links.unshift(image_links.pop());
  element_images2.setAttribute("src", image_links[0]);

});
