import MapSatellite from "components/MapSatellite";

const MapSatellitePage = () => <MapSatellite />;

MapSatellitePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default MapSatellitePage;
