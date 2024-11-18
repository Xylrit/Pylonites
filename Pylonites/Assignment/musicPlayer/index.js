const audioData = [
  {
    artist: "Taylor Swift",
    album: "Folklore",
    songTitle: "cardigan",
    songCover:
      "https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc",
    artistCover:
      "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676",
    soundData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
  {
    artist: "Taylor Swift",
    album: "Folklore",
    songTitle: "august",
    songCover:
      "https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc",
    artistCover:
      "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676",
    soundData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
  {
    artist: "Keshi",
    album: "Requiem",
    songTitle: "Bodies",
    songCover:
      "https://i.scdn.co/image/ab67616d0000b273617997bc09bb7fa23624eff5",
    artistCover:
      "https://i.scdn.co/image/ab6761610000e5ebe6f96cf550aeaf3a51d6a0bb",
    soundData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
  {
    artist: "Keshi",
    album: "GABRIEL",
    songTitle: "ANGOSTURA",
    songCover:
      "https://i.scdn.co/image/ab67616d0000b27319aff2da63b211d75341e8eb",
    artistCover:
      "https://i.scdn.co/image/ab6761610000e5ebe6f96cf550aeaf3a51d6a0bb",
    soundData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
];

const main = document.getElementById("main");
let currentAlbumSelected = "";
let currentArtistSelected = "";

const createArtistList = () => {
  let artistListContainer = document.getElementById("navLinks");
  const filteredArtistList = Object.values(
    audioData.reduce((unique, o) => {
      if (!unique[o.artist]) unique[o.artist] = o;

      return unique;
    }, {})
  );

  for (let i = 0; i < filteredArtistList.length; i++) {
    let artist = document.createElement("li");
    let link = document.createElement("a");
    link.href = filteredArtistList[i].soundData;
    link.innerText = filteredArtistList[i].artist;

    let artistImg = document.createElement("img");
    artistImg.src = filteredArtistList[i].artistCover;
    artistImg.classList.add("artistProfile");
    link.appendChild(artistImg);

    artist.appendChild(link);
    artistListContainer.appendChild(artist);
  }
};

const createAlbumList = (selectedArtist) => {
  let albumListContainer = document.getElementById("main");
  let filteredAlbumList = Object.values(
    audioData.reduce((unique, o) => {
      if (o.artist == selectedArtist) {
        if (!unique[o.album]) unique[o.album] = o;
      }

      return unique;
    }, {})
  );

  let albumCard = document.createElement("div");
  albumCard.classList.add("albumCard");

  for (let i = 0; i < filteredAlbumList.length; i++) {
    let albumImg = document.createElement("img");
    albumImg.src = filteredAlbumList[i].songCover;
    albumImg.classList.add("albumCover");

    let albumNameTag = document.createElement("p");
    albumNameTag.classList.add("album-name");
    albumNameTag.innerText = filteredAlbumList[i].album;

    albumCard.appendChild(albumImg);
    albumCard.appendChild(albumImg);
    albumCard.appendChild(albumNameTag);

    let albumName = filteredAlbumList[i].album;

    const createMusicList = (albumName) => {
      let filteredMusicByAlbum = Object.values(
        filteredAlbumList.reduce((unique, o) => {
          if (o.album == albumName) {
            if (!unique[o.album]) unique[o.album] = o;
          }

          return unique;
        }, {})
      );
      console.log(filteredMusicByAlbum);

      let musicList = document.createElement("ul");
      for (i = 0; i < filteredMusicByAlbum; i++) {
        musicList.appendChild(musicButton);

        let musicButton = document.createElement("li");
        musicButton.appendChild(musicLink);

        let musicLink = document.createElement("a");
        musicLink.innerText = filteredMusicByAlbum[i].artist;
      }

      albumCard.appendChild(musicList);
    };
    createMusicList(albumName);
  }
  albumListContainer.appendChild(albumCard);
};

const createMusicPlayer = () => {};

createArtistList();
createAlbumList();
