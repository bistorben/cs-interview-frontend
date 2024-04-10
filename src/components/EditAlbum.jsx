/* eslint-disable react/prop-types */
import { useState } from "react";
import "./EditAlbum.css";
import axios from "axios";
import { useAlbumData } from "../contexts/AlbumContext.jsx";

const EditAlbum = ({ editHandler, album, setAlbum, setIsFormActive }) => {
  const [inputName, setInputName] = useState(album.albumName);
  const [inputArtist, setInputArtist] = useState(album.artistName);
  const [inputDate, setInputDate] = useState(album.releaseDate.slice(0, 10));
  const [inputText, setInputText] = useState(album.infoText);
  const { setAlbumData } = useAlbumData();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const newAlbumData = {
        albumName: inputName,
        artistName: inputArtist,
        releaseDate: inputDate,
        infoText: inputText,
      };

      const response = await axios.put(
        `http://localhost:3000/album/edit/${album._id}`,
        newAlbumData
      );
      // console.log(response.data);

      setAlbumData(response.data.updatedAlbumList);
      setAlbum((prevAlbum) => ({
        ...prevAlbum,
        ...response.data.updatedAlbum,
      }));
      setIsFormActive(false);
    } catch (err) {
      console.log(err);
    }
  };

  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  };

  const inputArtistHandler = (e) => {
    setInputArtist(e.target.value);
  };

  const inputDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="EditAlbum">
      <input
        type="text"
        id="input-name"
        value={inputName}
        aria-label="album name"
        onChange={inputNameHandler}
      />
      <input
        type="text"
        id="input-artist"
        value={inputArtist}
        aria-label="artist"
        onChange={inputArtistHandler}
      />
      <input
        type="date"
        id="input-release-date"
        value={inputDate}
        aria-label="release date"
        onChange={inputDateHandler}
      />
      <textarea
        name="textarea"
        id=""
        aria-label="album-text"
        value={inputText}
        maxLength={220}
        onChange={inputTextHandler}
      ></textarea>
      <div className="form-control">
        <button>save</button>
        <button type="button" onClick={editHandler}>
          close
        </button>
      </div>
    </form>
  );
};

export default EditAlbum;
