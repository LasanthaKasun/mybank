import { number, oneOfType, string } from "prop-types";
import { markerPng } from "../../Assert/Images";

// map marker component
const Marker = ({lat, lng, markerId}) => {
  return (
    <img
      src={markerPng}
      lat={lat}
      lng={lng}
      style={{ cursor: "pointer", fontSize: 40 }}
      alt={markerId}
    />
  );
};

Marker.defaultProps = {};

Marker.propTypes = {
  markerId: oneOfType([number, string]).isRequired,
  lat: number.isRequired,
  lng: number.isRequired,
};

export default Marker;
