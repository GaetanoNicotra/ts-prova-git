import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  `<h1>Hello</h1>
  <h2> Button change background color! </h2>
  `;

// seleziono il bottone e aggiungo l'evento
const btn = document.querySelector<HTMLButtonElement>('#colorBtn')!;

btn.addEventListener('click', () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  document.body.style.backgroundColor = randomColor;
});