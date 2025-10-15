import React from "react";
import Navbar from "../components/Navbar";
import MapView from "../components/MapView";
import LayerMenu from "../components/LayerMenu";
import FiltersPanel from "../components/FiltersPanel";
import ReportsPanel from "../components/ReportsPanel";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <LayerMenu />
            <FiltersPanel />
            <ReportsPanel />
          </div>
          <div className="col-md-9">
            <MapView />
          </div>
        </div>
      </div>
    </>
  );
}
