import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

import TableRows from "../../components/Usuario/TableRows"

import React, { useState } from "react/cjs/react.development";
import { nanoid } from "nanoid";
//import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "../../components/Usuario/ReadOnlyRow";
import EditableRow from "../../components/Usuario/EditableRow";


const  url=process.env.URL;

function NewUsuario(props) {
  console.log(props)
  console.log(props.session.user.image);

  const [rowsData, setRowsData] = useState([]);

  const addTableRows = ()=>{
    console.log(tech_skills);
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
// onChange={e => setTech_usuario(e.target.value)} value={tech_usuario}
  return (
    <DefaultLayout>
      <div>
                <h1>USUARIO</h1>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                  <form className="card-body ">
                    
                    
                    <div className="mb-3">
                   <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            name='email' 
                            aria-describedby="emailHelp" 
               />
                        </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Usuario</label>
                      <input  type="text" className="form-control" id="user" name="user" aria-describedby="userHelp"  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="password" name="password" />
                    </div>
                       
                        <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                      <input type="text" className="form-control" id="telefono" name="telefono"/>
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
                        <button type="button"  className="btn btn-outline-success" onClick={() =>addTableRows()} >+</button>
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
                                
                                <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange}  />

                                </tbody>
                            </table>

                        </div>
                        <button type="button" className="btn btn-primary btn-custom" onClick={() => router.push("/user/insert")}>Guardar</button>
                        <button type="button" className="btn btn-danger ms-2">Cancelar</button>
                    </form>                      
                </div>
            </div>
    </DefaultLayout>
  );
}

export default NewUsuario;

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
