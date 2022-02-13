import DefaultLayout from "../layout/DefaultLayout";
import styles from "../styles/crud.module.css";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// import {Editor}  from "react-draft-wysiwyg";
const  Editor  = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
) as any;
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function crud() {
    // let editorRef = useRef();
    // const { Editor } = editorRef.current || {}; // if it don't find any document then it will be an empty object 

    // let [loaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     editorRef.current = {
    //       CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
    //       ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    //     };

    //     setLoaded(true);
    //   }, []);
    return (
        <DefaultLayout>
            <div>
                <div>
                    <h1>CRUD</h1>
                    <h3 className="fs-6">EL subtitulo va aquí</h3>
                </div>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                        <div className="row">
                            {/* input 1 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            {/* input 2 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Input 2</label>
                                <input type="text" className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputPassword1" />
                            </div>
                            {/* Input 3 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleDataList" className="form-label">Input de autocompletado</label>
                                <input className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistOptions" id="exampleDataList" />
                                <datalist id="datalistOptions">
                                    <option value="San Francisco" />
                                    <option value="New York" />
                                    <option value="Seattle" />
                                    <option value="Los Angeles" />
                                    <option value="Chicago" />
                                </datalist>
                            </div>

                            {/* input 4 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            {/* input 5 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <hr />
                        <h3>Tabla</h3>
                        <div className="card-body mb-3 rounded-fz shadow table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
                                            <IoMdCreate size={20} />
                                        </button>
                                            <button type="button" className="btn btn-sm text-danger ml-1">
                                                <IoMdTrash size={20} />
                                            </button>


                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
                                            <IoMdCreate size={20} />
                                        </button>
                                            <button type="button" className="btn btn-sm text-danger ml-1">
                                                <IoMdTrash size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
                                            <IoMdCreate size={20} />
                                        </button>
                                            <button type="button" className="btn btn-sm text-danger ml-1">
                                                <IoMdTrash size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                            </ul>
                        </nav>

                        <button type="button" className="btn btn-primary btn-custom">Guardar</button>
                        <button type="button" className="btn btn-danger ms-2">Cancelar</button>
                    </form>
                </div>

                <h2>Texto enriquecido</h2>
                <div>
                    <Editor 
                      editorClassName="editor-class"
                    />
                </div>
            </div>

        </DefaultLayout>
    )
}