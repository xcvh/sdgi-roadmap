import React from "react";
import { MapPin } from "lucide-react";

import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

const highlighted = ["LTU", "ESP", "HRV"];

const MapChart = () => {
    return (
        <div className="border border-green-400 rounded-3xl">
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-10.0, -52.0, 0],
                    center: [-5, -3],
                    scale: 1100,
                }}
            >
                <PatternLines
                    id="lines"
                    height={6}
                    width={6}
                    orientation={["diagonal"]}
                    className="stroke-1 stroke-blue-800 bg-green-100"
                />
                <Geographies
                    geography="/features.json"
                    className="stroke-sky-500 stroke-[0.5px]"
                >
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted =
                                highlighted.indexOf(geo.id) !== -1;
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={
                                        isHighlighted
                                            ? "url('#lines')"
                                            : "#fef3c7"
                                    }
                                    onClick={() =>
                                        console.log(geo.properties.name)
                                    }
                                />
                            );
                        })
                    }
                </Geographies>
                <Annotation
                    subject={[23.8813, 54.8985]} // Kaunas coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Kaunas */}
                    <MapPin size={16} fill="#FF5533" color="#FFFFFF" />
                </Annotation>

                <Annotation
                    subject={[2.8214, 41.9794]} // Girona coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Girona */}
                    <MapPin size={16} fill="#FF5533" color="#FFFFFF" />
                </Annotation>

                <Annotation
                    subject={[14.4422, 45.3271]} // Rijeka coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Rijeka */}
                    <MapPin size={16} fill="#FF5533" color="#FFFFFF" />
                </Annotation>
            </ComposableMap>
        </div>
    );
};

export default MapChart; 