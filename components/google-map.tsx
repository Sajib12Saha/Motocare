import { useLoadScript, GoogleMap , Marker } from "@react-google-maps/api";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  if (!isLoaded) return <div className="w-full h-screen flex justify-center items-center"><Loader2 className="size-12 animate-spin"/></div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
    >
      {/* Add markers or other components to your map */}
      <Marker position={center} />
    </GoogleMap>
  );
};

