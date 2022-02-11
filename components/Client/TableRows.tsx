
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
       
        rowsData.map((data, index)=>{
            const {idCliente,NombreCliente}= data;
            return(
                <tr key={index}>
                <td><input type="text" value={idCliente} onChange={(evnt)=>(handleChange(index, evnt))} id="idCliente" name="idCliente" className="form-control"/></td>
                <td><input type="text" value={NombreCliente}  onChange={(evnt)=>(handleChange(index, evnt))} id="NombreCliente" name="NombreCliente" className="form-control"/> </td>
                <td><button type="button" className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
   
    )
    
}
export default TableRows;