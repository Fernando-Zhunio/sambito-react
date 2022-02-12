import Table from "../../components/Supplier/Table";
import DefaultLayout from '../../layout/DefaultLayout';
import { getSession } from 'next-auth/client';
import { IoMdCreate, IoMdTrash, IoMdSend } from "react-icons/io";
import styles from "../../styles/table.module.css";

const  url=process.env.URL;

export default function Tablas(){
  return(
    <div>
<DefaultLayout>
        <div>
          <h2>Proveedor</h2>
            <p>
              <a href="/supplier/new">
              R1 Registro Proveedor
              </a>
            </p>
        </div> 
        <div>
          <div className="position-relative sticky-top center mb-3">
            <input placeholder="Buscador" type="search" className="w-100 ps-3 p-2 shadow  rounded-fz" />
            <button className={`${styles['btn-search']} b-primary rounded-circle center `}><IoMdSend  size={25} /></button>
          </div>
        </div>
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
