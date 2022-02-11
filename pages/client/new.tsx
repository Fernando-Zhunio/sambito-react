import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

//import { useState } from "react/cjs/react.development"
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
    password:''
  });

  

const handleChangeP = ({ target: { name, value } }) =>
setclient({ ...client, [name]: value });

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
                <h1>MATRICULACION CLIENTE</h1>
                <h3 className="fs-6">Información de Cliente</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body " 
                    onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input required onChange={handleChangeP} value={client.ruc} type="number" className="form-control" id="ruc" name="ruc"  />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input required onChange={handleChangeP} value={client.razonSocial} type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input required onChange={handleChangeP} type="text" value={client.nombreComercial} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                      <hr />
                        <h3>USUARIO</h3>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Usuario</label>
                        <input required onChange={handleChangeP} type="text" value={client.user} className="form-control" id="user" name="user"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Clave</label>
                        <input type="password" onChange={handleChangeP} value={client.password } className="form-control" id="password" name="password"/>
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
