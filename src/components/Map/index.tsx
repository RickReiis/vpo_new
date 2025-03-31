import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapProps {
    latitude: number;
    longitude: number;
    className: string
  }
  
const MapComponent: React.FC<MapProps> = ({longitude, latitude, className}) => {
  const mapContainerRef = useRef(null);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ;
  mapboxgl.accessToken = MAPBOX_TOKEN;

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [longitude, latitude],
        zoom: 15
      });

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
      });

      const navigate = new mapboxgl.NavigationControl({visualizePitch: true});

      map.addControl(geolocate);
      map.addControl(navigate, 'top-right');
      // map.on('load', () => {
      //   geolocate.trigger();
      // });
      // Set marker options.
      // const marker = new mapboxgl.Marker({
      //   color: "#FFFFFF",
      //   draggable: true
      // }).setLngLat([longitude, latitude]).addTo(map);

      return () => {
        // marker.remove();
        map.remove();
      }
    }
  }, [longitude, latitude, MAPBOX_TOKEN]);

  return <div ref={mapContainerRef} className={className}/>;
};

export default MapComponent;