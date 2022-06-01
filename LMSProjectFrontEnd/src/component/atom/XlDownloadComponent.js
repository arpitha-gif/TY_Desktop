import { useState, useEffect } from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";

function XlDownloadComponent() {
  const [result, setResult] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setResult(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <div className="row mt-4">
        <ReactHtmlTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-success mb-3"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download"
        />
        <table className="table" id="table-to-xls">
          <thead className="thead-dark">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res) => (
              <tr>
                <td>{res.name}</td>
                <td>{res.username}</td>
                <td>{res.email}</td>
                <td>{res.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default XlDownloadComponent;
