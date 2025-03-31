"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        const newMap = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/eliseu2301/cm5s7mguh00cz01s3fvdbd4wm",
            center: [0, 0],
            zoom: 10,
            attributionControl: false,
        });

        const geoControll = new mapboxgl.GeolocateControl({
            fitBoundsOptions: {
                offset: [0, -80]
            },
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });

        newMap.addControl(geoControll);

        newMap.on("load", () => {
            geoControll.trigger();
        });

        newMap.addControl(
            new mapboxgl.NavigationControl({
                showCompass: false,
                showZoom: false,
                visualizePitch: false,
            })
        );
    }, []);

    return <div ref={mapContainerRef} className="static w-full h-screen m-0" />;
};

export default Map;