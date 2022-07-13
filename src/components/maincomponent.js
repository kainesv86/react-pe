import React from "react";
import DetailComponent from "./detailcomponent";
import { BATH_SHOWER } from "../shared/bath_shower";
import { BEDDING } from "../shared/bedding";
import { LIGHTING } from "../shared/lighting";

function MainComponent() {
        const [bathShower, setBathShower] = React.useState(BATH_SHOWER);
        const [bedding, setBedding] = React.useState(BEDDING);
        const [lighting, setLighting] = React.useState(LIGHTING);

        return (
                <div className="container">
                        <div className="row">
                                <DetailComponent component={bathShower[0]} />
                                <DetailComponent component={bedding[0]} />
                                <DetailComponent component={lighting[0]} />
                        </div>
                </div>
        );
}

export default MainComponent;
