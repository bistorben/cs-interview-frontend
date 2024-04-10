/* eslint-disable react/prop-types */
import "./AlbumDetailInfo.css";
import testImage from "../images/testimage.jpeg";
import AlbumRating from "./AlbumRating.jsx";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import EditAlbum from "./EditAlbum.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const AlbumDetailInfo = ({ album, setAlbum }) => {
  const [isFormActive, setIsFormActive] = useState(false);

  if (!album) {
    return <div>loading</div>;
  }

  const editHandler = () => {
    setIsFormActive(!isFormActive);
  };
  console.log("album", album._id);
  const info = (
    <>
      <div className="detail-container">
        <div className="header-container">
          <div className="headline-container">
            <h1>{album.albumName}</h1>
            <h2>{album.artistName}</h2>
            <p>{album.releaseDate.slice(0, 10)}</p>
          </div>
          <button onClick={editHandler}>
            <CiEdit id="edit-icon" />
          </button>
        </div>
        <div className="info-text-container">
          <p>{album.infoText}</p>
        </div>
      </div>
    </>
  );

  return (
    <section className="AlbumDetailInfo">
      <div className="figure-wrapper">
        <figure>
          <img src={testImage} alt="" />
        </figure>
        <AlbumRating
          rate={album.albumRate.rate}
          count={album.albumRate.count}
          id={album._id}
          setAlbum={setAlbum}
        />
      </div>
      {isFormActive ? (
        <EditAlbum
          editHandler={editHandler}
          album={album}
          setAlbum={setAlbum}
          setIsFormActive={setIsFormActive}
        />
      ) : (
        info
      )}
    </section>
  );
};

export default AlbumDetailInfo;
