
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";
//import { classNames } from 'classnames';
function TableRows({ rowsData, deleteTableRows, handleChange }) {
    const [tags, setTags] = useState([])

    return (

        rowsData.map((data, index) => {
            const { segmentos, requisitos, costo, FDRegistro, FCAuditoria, FCEInfome, FAC, cyei } = data;
            return (
                <div className="card-body">
                    <div className="row m-0 shadow p-md-3 p-1 rounded-fz" key={index}>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre Segmento</label>
                            <input type="text" value={segmentos} onChange={(evnt) => (handleChange(index, evnt))} id="segmentos" name="segmentos" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Precio ($)</label>
                            <input type="number" value={costo} onChange={(evnt) => (handleChange(index, evnt))} id="segmentos" name="segmentos" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Requisitos</label>
                            {/* <input type="text" value={requisitos} onChange={(evnt)=>(handleChange(index, evnt))} id="requisitos" name="requisitos" className="input-default"/> */}
                            <ReactTagInput
                                tags={tags}
                                placeholder="Ingresa Requisitos"
                                maxTags={10}
                                editable={true}
                                readOnly={false}
                                removeOnBackspace={true}
                                onChange={(newTags) => setTags(newTags)}
                                // validator={(value) => {                             //     // Don't actually validate e-mails this way
                                //     const isEmail = value.indexOf("@") !== -1;
                                //     if (!isEmail) {
                                //         alert("Please enter an e-mail address");
                                //     }
                                //     // Return boolean to indicate validity
                                //     return isEmail;
                                // }}
                            />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Plazo de registro despu??s del pago</label>
                            <input type="number" value={requisitos} onChange={(evnt) => (handleChange(index, evnt))} id="segmentos" name="segmentos" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Plazo Ingreso de Informaci??n despu??s del registro</label>
                            <input type="number" value={costo} onChange={(evnt) => (handleChange(index, evnt))} id="costo" name="costo" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Plazo cierre Auditor??a</label>
                            <input type="number" value={FDRegistro} onChange={(evnt) => (handleChange(index, evnt))} id="FDRegistro" name="FDRegistro" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Auditoria de campo despu??s de R2</label>
                            <input type="number" value={FCAuditoria} onChange={(evnt) => (handleChange(index, evnt))} id="FCAuditoria" name="FCAuditoria" className="input-default" />
                        </div>
                        <div className="mb-3  col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Plazo Calificaci??n y entrega del informe individual de proveedores</label>
                            <input type="number" value={FCEInfome} onChange={(evnt) => (handleChange(index, evnt))} id="FCEInfome" name="FCEInfome" className="input-default" />
                        </div>
                        <div className="col-12"><button type="button" className="btn btn-danger" onClick={() => (deleteTableRows(index))}>Eliminar Segmento</button></div>
                    </div>
                </div>
            )
        })

    )

}
export default TableRows;


