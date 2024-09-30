const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 10, 10);
canvas.style.width = '500px;';
canvas.style.height = '500px';

canvas.style.border = '2px solid rebeccapurple';

document.body.appendChild(canvas);
