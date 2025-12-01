async function getJokes() {
  const data=await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke=await data.json();
  console.log(joke.setup);
  console.log(joke.punchline);
}
getJokes();