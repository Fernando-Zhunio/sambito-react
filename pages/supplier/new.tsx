import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


const  url=process.env.URL;

function NewClient(props) {

  const router = useRouter();
  
  const [client, setclient] = useState({
    ruc: "",
    idclient: "",
    idSegmento: "",
    razonSocial: "",
    nombreComercial: "",
    direccion: "",
    idPais: "",
    provincia: "",
    ciudad: "",
    direccionFactura: "",
    tipoContribuyente: "",
    actividadEmpresa: "",
    actividadEspecifica: "",
    telefono: "",
    fechaFacturacion: "",
    nombrePersonaContacto: "",
    cargoPersonaContacto: "",
    TelefonoPersonaContacto: "",
    mailPersonaContacto: "",
    codigoActivacion: "",
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
                <h1>R1 REGISTRO PROVEEDOR </h1>
                <h3 className="fs-6">Información de Proveedor</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body " 
                    onSubmit={handleSubmit}>
                    <div className="row">

                    <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleDataList" className="form-label">Empresa</label>
                                <input className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistEmpresa" id="Empresa" />
                                <datalist id="datalistEmpresa">
                                    <option value="Maximedia" />
                                    <option value="Genie" />                        
                      </datalist>
                    </div>

                    <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleDataList" className="form-label">Segmento</label>
                                <input className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistSegmento" id="Segmento" />
                                <datalist id="datalistSegmento">
                                    <option value="R2" />
                                    <option value="R3" />                        
                      </datalist>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input required onChange={handleChangeP} value={client.ruc} type="number" className="form-control" id="ruc" name="ruc"  />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input readOnly onChange={handleChangeP} value={client.razonSocial} type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.nombreComercial} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Dirección</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.direccion} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Pais</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.idPais} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Provincia</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.provincia} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Ciudad</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.ciudad} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Dirección Factura</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.direccionFactura} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Tipo Contribuyente</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.tipoContribuyente} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Actividad Empresa</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.actividadEmpresa} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Actividad Especifica</label>
                      <input readOnly onChange={handleChangeP} type="text" value={client.actividadEspecifica} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <hr />
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Teléfono</label>
                      <input  onChange={handleChangeP} type="text" value={client.telefono} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Fecha Facturación</label>
                      <input required onChange={handleChangeP} type="text" value={client.fechaFacturacion} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <hr />
                        <h2 className="fs-6">Persona Contacto</h2>
                        <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Persona Contacto</label>
                      <input required onChange={handleChangeP} type="text" value={client.nombrePersonaContacto} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Cargo Persona Contacto</label>
                      <input required onChange={handleChangeP} type="text" value={client.cargoPersonaContacto} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">TelefonoPersonaContacto</label>
                      <input required onChange={handleChangeP} type="text" value={client.TelefonoPersonaContacto} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Mail Persona Contacto</label>
                      <input required onChange={handleChangeP} type="text" value={client.mailPersonaContacto} className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
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
