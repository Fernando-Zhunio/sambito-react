import Grid from "components/Grid";

const GridPage = () => <Grid />;

GridPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default GridPage;
