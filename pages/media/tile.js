import Tile from "components/Tile";

const TilePage = () => <Tile />;

TilePage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default TilePage;
