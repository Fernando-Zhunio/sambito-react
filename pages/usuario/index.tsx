import Table from "../../components/Usuario/Table";
import DefaultLayout from '../../layout/DefaultLayout';
import { getSession } from 'next-auth/client';


export default function Tablas(){
  return(
    <div>
<DefaultLayout>
  <Table />
</DefaultLayout>
     
    </div>
  );

};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
