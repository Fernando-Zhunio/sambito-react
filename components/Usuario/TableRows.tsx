
function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
       
        rowsData.map((data, index)=>{
            const {idCliente}= data;
            return(
                <tr key={index}>
                <td>
                                <input value={idCliente} onChange={(evnt)=>(handleChange(index, evnt))}  id="idCliente" name="idCliente" className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistCiudades"  />
                                <datalist id="datalistCiudades">
                                    <option value="San Francisco" label="SanFrancisco"/>
                                    <option value="New York" label="NewYork"/>
                                    <option value="Seattle" label="Seattle"/>
                                    <option value="Los Angeles" label="LosAngeles"/>
                                    <option value="Chicago" label="Chicago" />
                                </datalist>
            </td>
                <td><button type="button" className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
   
    )
    
}
export default TableRows;