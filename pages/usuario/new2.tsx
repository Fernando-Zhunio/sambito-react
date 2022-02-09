import { getSession } from 'next-auth/client';
import DefaultLayout from "../../layout/DefaultLayout";
import styles from "../../styles/crud.module.css";
import {IoMdCreate, IoMdTrash } from "react-icons/io";



import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "../../components/Usuario/ReadOnlyRow";
import EditableRow from "../../components/Usuario/EditableRow";


const  url=process.env.URL;

function NewUsuario(props) {
  console.log(props)
  console.log(props.session.user.image);

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
   // event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
  //  event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = () => {
 //   event.preventDefault();
 console.log("hOLA");
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
   //   event.preventDefault();

      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };

      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === editContactId);

      newContacts[index] = editedContact;

      setContacts(newContacts);
      setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
    //  event.preventDefault();
      setEditContactId(contact.id);

      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };

      setEditFormData(formValues);
    };

    const handleCancelClick = () => {
      setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === contactId);

      newContacts.splice(index, 1);

      setContacts(newContacts);
    };

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
                                
                                {contacts.map((contact) => (
                                  <Fragment>
                                    {editContactId === contact.id ? (
                                      <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                      />
                                    ) : (
                                      <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                      />
                                    )}
                                  </Fragment>
                                ))}

                                </tbody>
                            </table>

                        </div>
                        <button type="button" className="btn btn-primary btn-custom" onClick={() => router.push("/user/insert")}>Guardar</button>
                        <button type="button" className="btn btn-danger ms-2">Cancelar</button>
                    </form>


                    <h2>Add a Contact</h2>
                              <input
                                type="text"
                                name="fullName"
                                required="required"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                              />
                              <input
                                type="text"
                                name="address"
                                required="required"
                                placeholder="Enter an addres..."
                                onChange={handleAddFormChange}
                              />
                              <input
                                type="text"
                                name="phoneNumber"
                                required="required"
                                placeholder="Enter a phone number..."
                                onChange={handleAddFormChange}
                              />
                              <input
                                type="email"
                                name="email"
                                required="required"
                                placeholder="Enter an email..."
                                onChange={handleAddFormChange}
                              />
                               <button type="button" className="btn btn-primary btn-custom" onClick={() => {handleAddFormSubmit}}>Info</button>                            
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
