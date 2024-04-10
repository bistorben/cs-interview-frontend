import AddAlbum from "./AddAlbum.jsx";
import "./AlbumControls.css";

const AlbumControls = () => {
  return (
    <section className="AlbumControls">
      <div className="controls-wrapper">
        <AddAlbum />
      </div>
    </section>
  );
};

export default AlbumControls;
