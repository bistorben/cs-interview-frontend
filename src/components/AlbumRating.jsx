/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AlbumRating.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import axios from "axios";
import { useAlbumData } from "../contexts/AlbumContext.jsx";

const AlbumRating = ({ rate, count, id, setAlbum }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const { setAlbumData } = useAlbumData();

  const totalStars = 5;
  console.log(rate);
  const fullStars = Math.floor(rate);
  const halfStar = rate - fullStars >= 0.5 ? true : false;
  // const halfStar = (rate % 1 !== 0);
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  const displayValue = formatRatingValue(rate);

  const rateHandler = async (id, index) => {
    try {
      const response = await axios.put("http://localhost:3000/album/rate", {
        id,
        newRate: index + 1,
      });

      setAlbumData(response.data);

      if (setAlbum) {
        const updatedAlbum = response.data.find((album) => album._id === id);
        setAlbum(updatedAlbum);
      }

      console.log("response", response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // --------------------
  function formatRatingValue(value) {
    // Zuerst den Wert als String formatieren
    let stringValue = value.toString();

    // Finden der Position des Dezimalpunktes
    const dotIndex = stringValue.indexOf(".");

    // Wenn der Wert eine Dezimalstelle hat
    if (dotIndex !== -1) {
      // Extrahieren Sie bis zu einer Stelle nach dem Dezimalpunkt plus eine zusätzliche Ziffer
      stringValue = stringValue.substring(0, dotIndex + 2);
      // Konvertieren Sie den extrahierten String zurück in eine Zahl und dann wieder in einen String mit genau einer Dezimalstelle
      return parseFloat(stringValue).toFixed(1);
    }

    // Für ganzzahlige Werte oder wenn keine Rundung benötigt wird, einfach den ursprünglichen Wert mit einer Dezimalstelle formatieren
    return value.toFixed(1);
  }
  // -------------------
  return (
    <div className="AlbumRating">
      <div className="show-rating">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} id="full-star-icon" />
        ))}
        {halfStar && <FaStarHalfAlt id="half-star-icon" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} id="reg-star-icon" />
        ))}
      </div>

      <div className="set-rating">
        {[...Array(totalStars)].map((_, index) => (
          <button
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            onClick={() => rateHandler(id, index)}
            className="star-button"
          >
            {index <= hoverIndex ? (
              <FaStar id="full-star-icon" />
            ) : (
              <FaRegStar id="reg-star-icon" />
            )}
          </button>
        ))}
      </div>
      <div className="rating-count">
        <span>
          ({displayValue}) / ({count})
        </span>
      </div>
    </div>
  );
};

export default AlbumRating;

// ratingValue.toFixed(1)
