import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

import { useState } from "react/cjs/react.development"
//import TableRows from "../../components/Usuario/TableRows"


const  url=process.env.URL;

function NewClient(props) {
  console.log(props)
  console.log(props.session.user.image);

  const [rowsData, setRowsData] = useState([]);
 
  const addTableRows = ()=>{

      const rowsInput={
          fullName:'',
          emailAddress:'',
          salary:''  
      } 
      setRowsData([...rowsData, rowsInput])
    
  }
 const deleteTableRows = (index)=>{
      const rows = [...rowsData];
      rows.splice(index, 1);
      setRowsData(rows);
 }

 const handleChange = (index, evnt)=>{
  const { name, value } = evnt.target;
  const rowsInput = [...rowsData];
  rowsInput[index][name] = value;
  setRowsData(rowsInput);
}
  
  return (
    <DefaultLayout>
      <div>
                <h1>MATRICULACION CLIENTE</h1>
                <h3 className="fs-6">Información de Cliente</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                    <div className="row">
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input required type="number" className="form-control" id="ruc" name="ruc"  />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input required type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input required type="text" className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                      <hr />
                        <h3>USUARIO</h3>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Usuario</label>
                        <input required type="text" className="form-control" id="usuario" name="usuario"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Clave</label>
                        <input type="password" className="form-control" id="password" name="password"/>
                      </div> 



                      <hr />
                        <h3>SEGMENTOS</h3>
                        
                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre"/>
                      </div>

                      <div className="mb-3  col-md-3 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Costo</label>
                        <input type="number" className="form-control" id="costo" name="costo"/>
                      </div>

                      <div className="mb-3  col-md-3 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Peso</label>
                        <input type="number" className="form-control" id="peso" name="peso"/>
                      </div>
                      
                        <h3 className="fs-6">Lista de Segmentos</h3>
                        <div className="card-body mb-3 rounded-fz shadow">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Segmentos</th>
                                        <th scope="col">Costo</th>
                                        <th scope="col">Peso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>

                      </div>
                        <button type="button" className="btn btn-primary btn-custom" onClick={() => router.push("/client/insert")}>Guardar</button>
                        <button type="button" className="btn btn-danger ms-2">Cancelar</button>
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
