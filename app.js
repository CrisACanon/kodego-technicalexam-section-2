const lyrics = document.querySelector("#lyrics");

async function getLyrics() {
  let url =
    "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871";

  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "614fa74ccdmsh648547e7af4193bp147f28jsn438bbdc9c55a",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  });
  const data = await response.json();
  console.log(data);
}

getLyrics();
