import { useModal } from "../contexts/ModalContext.jsx";
import "./AddAlbum.css";
import { IoAdd } from "react-icons/io5";
import AddAlbumForm from "./AddAlbumForm.jsx";

const AddAlbum = () => {
  const { setIsOpen, setModalContent } = useModal();

  const openModalHandler = () => {
    setIsOpen(true);
    setModalContent(<AddAlbumForm />);
  };

  return (
    <button className="AddAlbum" onClick={openModalHandler}>
      <IoAdd />
      <span>add album</span>
    </button>
  );
};

export default AddAlbum;
