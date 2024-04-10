/* eslint-disable react/prop-types */
import "./AlbumItemInfo.css";
import AlbumRating from "./AlbumRating.jsx";

const AlbumItemInfo = ({
  albumName,
  artistName,
  releaseDate,
  rate,
  count,
  id,
}) => {
  return (
    <div className="album-info">
      <AlbumRating rate={rate} count={count} id={id} />
      <p>{albumName}</p>
      <p>{artistName}</p>
      <p>{releaseDate.slice(0, 10)}</p>
    </div>
  );
};

export default AlbumItemInfo;
