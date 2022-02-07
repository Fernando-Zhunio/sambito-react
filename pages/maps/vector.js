import MapVector from "components/MapVector";

const MapVectorPage = () => <MapVector />;

MapVectorPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default MapVectorPage;
