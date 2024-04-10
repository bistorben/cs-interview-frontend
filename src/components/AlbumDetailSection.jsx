import { useEffect, useState } from "react";
import AlbumDetailInfo from "./AlbumDetailInfo.jsx";
import "./AlbumDetailSection.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AlbumDetailSection = () => {
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/album/${id}`);
        console.log(response.data);
        setAlbum(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <AlbumDetailInfo album={album} setAlbum={setAlbum} />
      {/* if I have more components: add here */}
    </>
  );
};

export default AlbumDetailSection;
