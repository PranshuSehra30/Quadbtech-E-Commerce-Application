import React from 'react'
import { NavLink } from 'react-router-dom';
const AdminMenu = () => {
    return (
        <div>

        
        <div 
        className="text-center">
            <div className='list-group'>
          <h4>Admin Panel</h4>
          <div className="list-group list-group-item-action">
            <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-action">
              Create Category
            </NavLink>
            <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-action">
              Create Product
            </NavLink>
            <NavLink to="/dashboard/admin/create-users" className="list-group-item list-group-action">
              Users
            </NavLink>
          </div>
        </div>
        </div>
        </div>
      );
      
      
}

export default AdminMenu