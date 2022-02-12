import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";

import TableRows from "../../components/Client/TableRows"

import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


const  url=process.env.URL;

function NewClient(props) {

  const router = useRouter();
  
  const [client, setclient] = useState({
    ruc: "",
    razonSocial: "",
    nombreComercial: "",
    user: '',
    vigencia:'',
    correo:''
  });


const [rowsData, setRowsData] = useState([]);



const addTableRows = ()=>{
    const rowsInput={
        idCliente:'',
    } 
    setRowsData([...rowsData, rowsInput])  
}
const deleteTableRows = (index)=>{
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
}

const handleChangeP = ({ target: { name, value } }) =>
setclient({ ...client, [name]: value });

const handleChange = (index, evnt)=>{
  const { name, value } = evnt.target;
  const rowsInput = [...rowsData];
  rowsInput[index][name] = value;
  setRowsData(rowsInput);
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
     await axios.post(url+"client/insert", client);
      toast.success("Guardado", {
        position: "bottom-center",
      });
    router.push("/client");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

  return (
    <DefaultLayout>
      <div>
                <h1>MATRICULACIÓN CLIENTE</h1>
                <h3 className="fs-6">Información de Cliente</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body " 
                    onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input required onChange={handleChangeP} value={client.ruc} type="number" className="form-control" id="ruc" name="ruc" min="13" max="13" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input required onChange={handleChangeP} value={client.razonSocial} type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input required onChange={handleChangeP} type="text" value={client.nombreComercial} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Usuario Cliente</label>
                        <input required onChange={handleChangeP} type="text" value={client.user} className="form-control" id="user" name="user"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Correo</label>
                        <input type="text" onChange={handleChangeP} value={client.correo } className="form-control" id="correo" name="correo"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Vigencia de la calificación (años)</label>
                        <input type="number" onChange={handleChangeP} value={client.vigencia } className="form-control" id="vigencia" name="vigencia"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Términos y condiciones</label>
                        <textarea className="form-control" rows="5" cols="70"> </textarea> 
                      </div>


                      <div className="mb-3  col-md-6 col-12">
                      <button type="button"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() =>addTableRows()} >+</button>
                      </div>
                      <hr />
                        <h3 className="fs-6">Lista de Segmentos</h3>
                          <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange}  />                       
                      </div>
                        
                        <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Guardar
                        </button>
                    </form>
                </div>
            </div>
    </DefaultLayout>
  );
}

export default NewClient;

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
