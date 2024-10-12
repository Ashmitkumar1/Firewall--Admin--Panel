import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"; // GeoJSON for the world map

const highlightedCountries = ["CHN", "IND", "RUS"]; // Country codes for highlighting

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={highlightedCountries.includes(geo.properties.ISO_A3) ? "#00C2C7" : "#E0F7FA"} // Highlight certain countries
              stroke="#FFFFFF"
              style={{
                default: { outline: "none" },
                hover: { fill: "#00C2C7", outline: "none" },
                pressed: { outline: "none" }
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
