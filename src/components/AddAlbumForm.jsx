import { useState } from "react";
import "./AddAlbumForm.css";
import axios from "axios";
import { useAlbumData } from "../contexts/AlbumContext.jsx";

const AddAlbumForm = () => {
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [infoText, setInfoText] = useState("");
  const { albumData, setAlbumData } = useAlbumData();

  const submitHandler = async (e) => {
    e.preventDefault();

    const albumData = {
      albumName: album,
      artistName: artist,
      releaseDate: date,
      infoText,
    };

    try {
      try {
        const response = await axios.post(
          "http://localhost:3000/album",
          albumData
        );
        setAlbumData((prevAlbumData) => [...prevAlbumData, response.data]);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const albumHandler = (e) => {
    setAlbum(e.target.value);
  };

  const artistHandler = (e) => {
    setArtist(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const infoTextHandler = (e) => {
    setInfoText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="AddAlbumForm">
      <h2>Add Album</h2>
      <input
        type="text"
        placeholder="Album name..."
        aria-label="album name"
        value={album}
        onChange={albumHandler}
        minLength={1}
        required
      />
      <input
        type="text"
        placeholder="Artist name..."
        aria-label="album artist"
        value={artist}
        onChange={artistHandler}
        required
      />
      <input
        type="date"
        placeholder="Release date..."
        aria-label="album release date"
        value={date}
        onChange={dateHandler}
        required
      />
      <textarea
        name=""
        id=""
        placeholder="Tell us what you like..."
        aria-label="album-text"
        value={infoText}
        onChange={infoTextHandler}
        required
        maxLength={150}
      ></textarea>
      <input type="file" />
      <button>add album</button>
    </form>
  );
};

export default AddAlbumForm;
