import AlbumControls from "./AlbumControls.jsx";
import AlbumList from "./AlbumList.jsx";
import "./AlbumSection.css";

const AlbumSection = () => {
  return (
    <section className="AlbumSection">
      <AlbumControls />
      <AlbumList />
    </section>
  );
};

export default AlbumSection;
