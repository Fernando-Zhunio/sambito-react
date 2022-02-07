function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(       
        rowsData.map((data, index)=>{
            const {id, Nombre}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={id} onChange={(evnt)=>(handleChange(index, evnt))} name="id" className="form-control"/>
                </td>
                <td><input type="text" value={Nombre}  onChange={(evnt)=>(handleChange(index, evnt))} name="Nombre" className="form-control"/> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;