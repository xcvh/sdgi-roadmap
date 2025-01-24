import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router";
import features from "../../public/features.json";

import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";
const highlighted = ["LTU", "ESP", "HRV"];

const countryRoutes = {
    "ESP": "spain",
    "LTU": "lithuania",
    "HRV": "croatia"
};

const MapChart = () => {
    const navigate = useNavigate();

    return (
        <div className="border border-b-2 border-green-600 rounded-3xl overflow-hidden">
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-10.0, -52.0, 0],
                    scale: 1100,
                    center: [-5, -3]
                }}
            >
                <PatternLines
                    id="lines"
                    height={6}
                    width={6}
                    orientation={["diagonal"]}
                    className="stroke-1 stroke-green-900 bg-green-100"
                />
                <Geographies
                    geography={features}
                    className="stroke-green-900 stroke-[0.5px]"
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
                                            : "#dcfce7"
                                    }
                                    style={{
                                        default: {
                                            outline: "none"
                                        },
                                        hover: {
                                            outline: "none",
                                            fill: isHighlighted ? "#86efac" : "#dcfce7",
                                            cursor: isHighlighted ? "pointer" : "default"
                                        },
                                        pressed: {
                                            outline: "none"
                                        }
                                    }}
                                    onClick={() => {
                                        if (isHighlighted) {
                                            navigate(`/${countryRoutes[geo.id]}`);
                                        }
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
                <Annotation
                    subject={[23.4052, 55.3985]} // Kaunas coordinates
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Kaunas */}
                    <MapPin size={16} fill="#14532d" color="#dcfce7" />
                </Annotation>

                <Annotation
                    subject={[2.15899, 42.6]} // Girona coordinates (corrected)
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Girona */}
                    <MapPin size={16} fill="#14532d" color="#dcfce7" />
                </Annotation>

                <Annotation
                    subject={[13.9926, 45.9871]} // Rijeka coordinates (adjusted more up and left)
                    dx={0}
                    dy={0}
                >
                    {/* Map pin for Rijeka */}
                    <MapPin size={16} fill="#14532d" color="#dcfce7" />
                </Annotation>
            </ComposableMap>
        </div>
    );
};

export default MapChart; 