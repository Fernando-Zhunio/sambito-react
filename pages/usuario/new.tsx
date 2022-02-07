import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";

const  url=process.env.URL;

function NewUsuario(props) {
  console.log(props)
  console.log(props.session.user.image);

  return (
    <DefaultLayout>
      <div>
                <h1>USUARIO</h1>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Usuario</label>
                      <input type="text" className="form-control" id="user" name="user"  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="password" name="password" />
                    </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ENLIT</td>
                                        <td className="d-flex">
                                        <button type="button" className="btn btn-sm text-danger ml-1">
                                        <IoMdTrash size={20}/>
                                        </button> 
                                        </td>
                                    </tr>                                    
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
