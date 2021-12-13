import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
// import json_data from "../../public/json_data/user_data.json";
function HomePage() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // store Data in State Data Variable
        setData(data);
      })
      .catch(function (err) {
        console.log(err, " error");
      });

    //   const data = json_data;
    // Fetch Function
  }, []);

  console.log(getData);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1>Data Renders here</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{ textAlign: "center" }}>Click to Get Details</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((index) => (
            <tr key={index.id}>
              <td style={{ textAlign: "center" }}>{index.id}</td>
              <td>{index.first_name}</td>
              <td>{index.last_name}</td>
              <td style={{ textAlign: "center" }}>
                {<Button>Click to get More Details</Button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
