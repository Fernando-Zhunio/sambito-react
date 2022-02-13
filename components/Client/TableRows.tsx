
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
                <div className="row" key={index}>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre Segmento</label>
                        <input type="text" value={segmentos} onChange={(evnt) => (handleChange(index, evnt))} id="segmentos" name="segmentos" className="form-control" />
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Precio ($)</label>
                        <input type="number" value={costo} onChange={(evnt)=>(handleChange(index, evnt))} id="costo" name="costo" className="form-control"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Requisitos</label>
                        {/* <input type="text" value={requisitos} onChange={(evnt)=>(handleChange(index, evnt))} id="requisitos" name="requisitos" className="form-control"/> */}
                        <ReactTagInput
                            tags={tags}
                            placeholder="Ingresa Requisitos"
                            maxTags={10}
                            editable={true}
                            readOnly={false}
                            removeOnBackspace={true}
                            onChange={(newTags) => setTags(newTags)}
                            // validator={(value) => {
                            //     // Don't actually validate e-mails this way
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
                        <label htmlFor="exampleInputPassword1" className="form-label">Plazo de registro después del pago</label>
                        <input type="number" value={FAC} onChange={(evnt)=>(handleChange(index, evnt))} id="FAC" name="FAC" className="form-control"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12">  
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Plazo Ingreso de Información después del registro</label>
                        <input type="number" value={cyei}  onChange={(evnt)=>(handleChange(index, evnt))} id="cyei" name="cyei" className="form-control"/>
                    </div>
                    <div className="mb-3  col-md-6 col-12"></div>
                    <div className="mb-3  col-md-6 col-12">   
                        <label htmlFor="exampleInputPassword1" className="form-label">Plazo cierre Auditoría</label>
                        <input type="number" value={FDRegistro} onChange={(evnt) => (handleChange(index, evnt))} id="FDRegistro" name="FDRegistro" className="form-control" />
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Auditoria de campo después de R2</label>
                        <input type="number" value={FCAuditoria} onChange={(evnt) => (handleChange(index, evnt))} id="FCAuditoria" name="FCAuditoria" className="form-control" />
                    </div>
                    <div className="mb-3  col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Plazo Calificación y entrega del informe individual de proveedores</label>
                        <input type="number" value={FCEInfome} onChange={(evnt) => (handleChange(index, evnt))} id="FCEInfome" name="FCEInfome" className="form-control" />
                    </div>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => (deleteTableRows(index))}>Eliminar Segmento</button>
                </div>
            )
        })

    )

}
export default TableRows;


