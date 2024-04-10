/* eslint-disable react/prop-types */
import "./AlbumItemFigure.css";
import testImage from "../images/testimage.jpeg";
import DeleteAlbum from "./DeleteAlbum.jsx";
import { Link } from "react-router-dom";
import { useAlbumData } from "../contexts/AlbumContext.jsx";

const AlbumItemFigure = ({ id }) => {
  const { albumData } = useAlbumData();

  const album = albumData.find((album) => album._id === id);
  const topRated =
    album && album.albumRate.count > 9 && album.albumRate.rate >= 4;

  return (
    <Link to={`album/${id}`} className="AlbumItemFigure">
      <figure>
        <img src={testImage} alt="" />
        <div className="img-overlay">
          {!topRated && <DeleteAlbum id={id} />}
        </div>
      </figure>
    </Link>
  );
};

export default AlbumItemFigure;
