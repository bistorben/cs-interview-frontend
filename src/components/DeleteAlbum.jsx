/* eslint-disable react/prop-types */
import axios from "axios";
import "./DeleteAlbum.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAlbumData } from "../contexts/AlbumContext.jsx";

const DeleteAlbum = ({ id }) => {
  const { setAlbumData } = useAlbumData();

  const deleteHandler = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://localhost:3000/album/delete/${id}`
      );

      setAlbumData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={(e) => deleteHandler(e, id)} className="DeleteAlbum">
      <FaRegTrashAlt />
    </button>
  );
};

export default DeleteAlbum;
