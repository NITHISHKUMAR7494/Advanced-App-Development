import React, { useState } from 'react';
import './staffside.css';
function LightTableFilter() {
  const [filterValue, setFilterValue] = useState('');

  const onInputChange = (e) => {
    setFilterValue(e.target.value.toLowerCase());
  };

  const filterRows = (row) => {
    const text = row.textContent.toLowerCase();
    return text.indexOf(filterValue) === -1 ? 'none' : 'table-row';
  };

  return (
    <section className="container">
      <h2>User Enquiries</h2>
      <input
        type="search"
        className="light-table-filter"
        placeholder="Filter"
        onChange={onInputChange}
      />
      <table className="order-table table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enquiry</th>
            <th>Course Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@gmail.com</td>
            <td>Price for Java Course</td>
            <td>Java</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Jane Vanda</td>
            <td>jane@vanda.org</td>
            <td>Which the best course in this platform?</td>
            <td>Nil</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Rohith</td>
            <td>rohith@gmail.com</td>
            <td>Duration of Ai/Ml course</td>
            <td>Ai/Ml</td>
            <td>Completed</td>
          </tr>
          <tr>
          <td>Rahul</td>
          <td>rahul@gmail.com</td>
          <td>Is there any offer Going in your platform</td>
          <td>Nil</td>
          <td>Completed</td>
        </tr>
        <tr>
        <td>Navadeesh</td>
        <td>navadeesh@gmail.com</td>
        <td>Any new courses?</td>
        <td>Nil</td>
        <td>Completed</td>
      </tr>
      <tr>
      <td>Pranav</td>
      <td>Pranav@gmail.com</td>
      <td>Can i get certificate</td>
      <td>Nil</td>
      <td>Completed</td>
    </tr>
    
  
 

        </tbody>
      </table>
    </section>
  );
}

export default LightTableFilter;
