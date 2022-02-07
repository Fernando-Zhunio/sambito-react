import Table from "../components/Table";
import DefaultLayout from '../layout/DefaultLayout'
// const TablePage = () => <Table />;

// TablePage.getInitialProps = async () => ({
//   namespacesRequired: ["header", "footer", "sidebar"],
// });

// export default TablePage;

export default function Tablas(){
  return(
    <div>
<DefaultLayout>
  <Table />
</DefaultLayout>
     
    </div>
  );

};
