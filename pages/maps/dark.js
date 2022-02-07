import MapDark from "components/MapDark";

const MapDarkPage = () => <MapDark />;

MapDarkPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default MapDarkPage;
