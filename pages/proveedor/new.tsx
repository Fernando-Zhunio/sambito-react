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
                <h3 className="fs-6">Información de Cliente</h3>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                    <div className="row">
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">RUC</label>
                      <input type="text" className="form-control" id="ruc" name="ruc"  />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Razón Social</label>
                      <input type="text" className="form-control" id="razonSocial" name="razonSocial" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Comercial</label>
                      <input type="text" className="form-control" id="nombreComercial" name='nombreComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                      <label htmlFor="exampleInputEmail1" className="form-label">Nombre Fantasía Comercial</label>
                      <input type="text" className="form-control" id="nombreFantasiaComercial" name='nombreFantasiaComercial' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleDataList" className="form-label">Pais</label>
                                <input className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistOptions" id="pais" name="pais" />
                                <datalist id="datalistOptions">
                                    <option value="Ecuador" />
                                    <option value="New York" />
                                    <option value="Seattle" />
                                    <option value="Los Angeles" />
                                    <option value="Chicago" />
                                </datalist>
                            </div>
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Provincia</label>
                      <input type="text" className="form-control" id="provincia" name="provincia"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Ciudad</label>
                      <input type="text" className="form-control" id="ciudad" name="ciudad"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Parroquia</label>
                      <input type="text" className="form-control" id="parroquia" name="parroquia"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Dirección</label>
                      <input type="text" className="form-control" id="direccion" name="direccion"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Intersección</label>
                      <input type="text" className="form-control" id="interseccion" name="interseccion"/>
                    </div>


                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Teléfono</label>
                      <input type="text" className="form-control" id="telefono" name="telefono"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Código CIIU</label>
                      <input type="text" className="form-control" id="codigo_ciiu" name="codigo_ciiu"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Tipo Contribuyente</label>
                      <input type="text" className="form-control" id="tipoContribuyente" name="tipoContribuyente"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Actividad Empresa</label>
                      <input type="text" className="form-control" id="actividadEmpresa" name="actividadEmpresa"/>
                    </div>

                    <div className="mb-3  col-md-6 col-12">
                      <label htmlFor="exampleInputPassword1" className="form-label">Actividad Especifica</label>
                      <input type="text" className="form-control" id="actividadEspecifica" name="actividadEspecifica"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleDataList" className="form-label">Estado Contribuyente</label>
                            <input className="form-control" list="datalistOptions" name="estado_contribuyente" id="estado_contribuyente" placeholder="Escriba algo" />
                            <datalist id="datalistOptions">
                                <option value="Activo" />
                                <option value="Inactivo" />
                            </datalist>
                        </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre Persona Contacto</label>
                        <input type="text" className="form-control" id="cargoPersonaContacto" name="cargoPersonaContacto"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fecha Inicio Actividades</label>
                        <input type="text" className="form-control" id="fecha_inicio_actividades" name="fecha_inicio_actividades"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fecha Suspensión Definitiva</label>
                        <input type="text" className="form-control" id="fecha_suspencion_definitiva" name="fecha_suspencion_definitiva"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fecha Reinicio Actividades</label>
                        <input type="text" className="form-control" id="fecha_reinicio_actividades" name="fecha_reinicio_actividades"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Obligado</label>
                        <input type="text" className="form-control" id="obligado" name="obligado"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Numero Establecimiento</label>
                        <input type="text" className="form-control" id="numero_establecimiento" name="numero_establecimiento"/>
                      </div>

                      <hr />
                        <h3>Persona Contacto</h3>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Cargo</label>
                        <input type="text" className="form-control" id="cargoPersonaContacto" name="cargoPersonaContacto"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="TelefonoPersonaContacto" name="TelefonoPersonaContacto"/>
                      </div>

                      <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mail</label>
                        <input type="text" className="form-control" id="mailPersonaContacto" name="mailPersonaContacto"/>
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
