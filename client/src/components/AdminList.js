import React from "react";
import axios from 'axios';

function AdminList({ admins, onDeleteAdmin }) {
  console.log(admins);

  //map admins to table
  return (
    <div className="container">
      <h3>Admins List</h3>
      <table className="table table-info table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Deactivate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => {

            function handleDelete(){
              axios.delete(`/admins/${admin.id}`)
              .then(()=>{
                 
                  onDeleteAdmin(admin)
              })
            }

            function handleDeactivate(){
              
            }

            return (
              <tr key={admin.id}>
                <td>{admin.full_name}</td>
                <td>{admin.email}</td>
                <td>
                  <button onClick={handleDeactivate} className="btn btn-primary">Deactivate</button>
                </td>
                <td>
                  <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
