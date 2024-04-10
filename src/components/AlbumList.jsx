import { useAlbumData } from "../contexts/AlbumContext.jsx";
import AlbumItem from "./AlbumItem.jsx";
import "./AlbumList.css";

const AlbumList = () => {
  const { albumData } = useAlbumData();
  return (
    <ul className="AlbumList">
      {albumData.map(
        ({ _id, albumName, artistName, releaseDate, albumRate }) => (
          <AlbumItem
            key={_id}
            albumName={albumName}
            artistName={artistName}
            releaseDate={releaseDate}
            rate={albumRate.rate}
            count={albumRate.count}
            id={_id}
          />
        )
      )}
    </ul>
  );
};

export default AlbumList;
