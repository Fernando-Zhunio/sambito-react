import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

import { useState } from "react/cjs/react.development"
import TableRows from "../../components/Usuario/TableRows"

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
                <h1>CLIENTE</h1>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input type="text" className="form-control" id="ruc" name="ruc"  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input type="text" className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Fantasía Comercial</label>
                      <input type="text" className="form-control" id="nombreFantasiaComercial" name='nombreFantasiaComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                            <label htmlFor="exampleDataList" className="form-label">Pais</label>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escriba algo" />
                            <datalist id="datalistOptions">
                                <option value="Ecuador" />
                            </datalist>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Provincia</label>
                      <input type="text" className="form-control" id="provincia" name="provincia"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Ciudad</label>
                      <input type="text" className="form-control" id="ciudad" name="ciudad"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Parroquia</label>
                      <input type="text" className="form-control" id="parroquia" name="parroquia"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Teléfono</label>
                      <input type="text" className="form-control" id="telefono" name="telefono"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Código CIIU</label>
                      <input type="text" className="form-control" id="codigo_ciiu" name="codigo_ciiu"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Tipo Contribuyente</label>
                      <input type="text" className="form-control" id="tipoContribuyente" name="tipoContribuyente"/>
                    </div>


                    
                    
                        <div className="mb-3">
                            <label htmlFor="exampleDataList" className="form-label">rol</label>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escriba algo" />
                            <datalist id="datalistOptions">
                                <option value="Administrador" />
                                <option value="Auditor" />
                            </datalist>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleDataList" className="form-label">Clientes</label>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escriba algo" />
                            <datalist id="datalistOptions">
                                <option value="Plaslit" />
                            </datalist>
                        </div>
                        <button className="btn btn-outline-success" onClick={addTableRows} >+</button>
                        <hr />
                        <h3>Clientes</h3>
                        <div className="card-body mb-3 rounded-fz shadow">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Cliente</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />                                    
                                </tbody>
                            </table>
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
