/* eslint-disable react/prop-types */
import "./AlbumItem.css";

import AlbumItemFigure from "./AlbumItemFigure.jsx";
import AlbumItemInfo from "./AlbumItemInfo.jsx";

const AlbumItem = ({ albumName, artistName, releaseDate, rate, count, id }) => {
  return (
    <li className="AlbumItem">
      <AlbumItemFigure id={id} />
      <AlbumItemInfo
        albumName={albumName}
        artistName={artistName}
        releaseDate={releaseDate}
        rate={rate}
        count={count}
        id={id}
      />
    </li>
  );
};

export default AlbumItem;
