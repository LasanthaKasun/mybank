import React, { useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import AppBarLine from "../Components/AppBarLine/AppBarLine";
import { GOOGLE_API_KEY } from "../Config";
import { usePlacesWidget } from "react-google-autocomplete";
import Marker from "../Components/Marker/Marker";
import { useDispatch, useSelector } from "react-redux";
import { setMapFilterData } from "../Actions/mapFilterAction";
import LocationList from "../Components/LocationList/LocationList";

const { innerWidth: width, innerHeight: height } = window;

const styles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  heroContent: {
    display: "flex",
    padding: "20px",
  },
  mapContent: {
    width: "70%",
    height: height - 120 + "px",
  },
  locationSearch: {
    position: "absolute",
    zIndex: "10",
    padding: "20px",
  },
  locationSearchInput: {
    height: "40px",
    width: width / 3 + "px",
    padding: "10px",
    outline: "none",
    border: "0",
    borderRadius: "10px",
    fontSize: "18px",
  },
  historyWrapper: {
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "30%",
    height: height - 120 + "px",
    backgroundColor: "#9cc0f9",
    overflowY: "auto"
  },
});

function Landing(props) {
  const [location, setLocation] = useState({
    lat: 6.9271,
    lng: 79.8612,
  });

  const { searchLocation } = useSelector((state) => state.searchData);

  const { classes } = props;

  const dispatch = useDispatch();

  const { ref } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      dispatch(setMapFilterData(place.formatted_address));
      let newObj = JSON.parse(JSON.stringify(place?.geometry?.location));
      setLocation({
        lat: newObj.lat,
        lng: newObj.lng,
      });
    },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarLine title="Google Location Finder" />
      <div className={classes.heroContent}>
        <div className={classes.mapContent}>
          <div className={classes.locationSearch}>
            <input ref={ref} className={classes.locationSearchInput} />
          </div>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            center={location}
            zoom={11}
          >
            <Marker
              lat={location.lat}
              lng={location.lng}
              markerId={location.lat}
            />
          </GoogleMapReact>
        </div>
        <div className={classes.historyWrapper}>
          <h1>Search History</h1>
          <LocationList data={searchLocation} />
        </div>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
