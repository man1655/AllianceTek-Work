async function  getGame() {
  const data= await fetch("https://ghibliapi.vercel.app/films");
  const games=await data.json();
  games.forEach(game => {
    console.log(game.director);
    console.log(game.title)
  });
}
getGame();