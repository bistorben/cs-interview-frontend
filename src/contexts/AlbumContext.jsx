import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AlbumContext = createContext();

export const useAlbumData = () => useContext(AlbumContext);

export const AlbumProvider = ({ children }) => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/album");
        setAlbumData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <AlbumContext.Provider value={{ albumData, setAlbumData }}>
      {children}
    </AlbumContext.Provider>
  );
};
