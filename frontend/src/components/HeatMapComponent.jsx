import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { getHeatMapData } from "../api/index";


function HeatMapComponent() {
  const [heatData, setHeatData] = useState([]);

  useEffect(() => {
    const fetchHeatMap = async () => {
      try {
        const res = await getHeatMapData(49.9, 60, -8.6, 1.8);
        const formatted = res.data.map((point) => [
          point.lat,
          point.lng,
          point.weight,
        ]);
        setHeatData(formatted);
      } catch (error) {
        console.error("Error fetching heatmap data:", error);
      }
    };

    fetchHeatMap();
  }, []);

  return (
    <div className="mx-auto w-[700px]">
      <MapContainer
        center={[54, -2]}
        zoom={2}
        minZoom={5.3}
        style={{ height: "500px", width: "100%" }}
        maxBounds={[[49.9, -8.6], [60, 1.8]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={heatData}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          intensityExtractor={(m) => m[2]}
          radius={15}
          blur={20}
          max={100}
        />
      </MapContainer>
    </div>
  );
}

export default HeatMapComponent;
