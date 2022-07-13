import React from "react";
import DashboardComponent from "./dashboard";
import HeaderComponent from "./headercomponent";
import MainComponent from "./maincomponent";

function Home() {
        return (
                <div>
                        <HeaderComponent />
                        <DashboardComponent />
                        <MainComponent />
                </div>
        );
}

export default Home;
