let now = new Date()
let future = new Date('January 1, 2024');
let missingSeconds = future.getTime() - now.getTime()
let days = Math.floor(missingSeconds / 86400000)
let hours = Math.floor((missingSeconds % 86400000) / 3600000);
let minutes = Math.floor(((missingSeconds % 86400000) % 3600000) / 60000);

const container = document.querySelector('#container');
const post = document.createElement('div');
post.innerHTML = `<p>Days ${days} Hours ${hours} Minutes ${minutes}</p>`
container.appendChild(post)