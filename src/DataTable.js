import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = (props) => {

  const initialStudent = [
    {id: 0,firstName: "",lastName: "",age: 0,birthdate: "",country: "",city: ""}
  ];

  const [studentList, setStudet] = useState(initialStudent);

  useEffect(() => {

    const apiResult = [
      {id: 1, firstName:"Mehrdad", lastName:"Javan", age:32, birthdate:"1990.01.01", country:"Sweden", city:"Väjxö"},
      {id: 2, firstName:"Roudabeh", lastName:"Ad", age:33, birthdate:"1989.05.01", country:"Sweden", city:"Karlskrona"},
      {id: 3, firstName:"Simon", lastName:"Elbrink", age:25, birthdate:"1997.01.01", country:"Sweden", city:"Väjxö"},
      {id: 4, firstName:"Johan", lastName:"Svens", age:32, birthdate:"1990.11.01", country:"Sweden", city:"Malmö"}
    ];

    setStudet(apiResult);
  }, []);

  return (
    <div>
    <div className="card border-secondary mb-3">
      <div className="card-header">Studet List</div>

      <div className="card-body">
        <table
          className="table table-hover table-striped" >

          <TableHeader />
          <TableRow studentList={studentList} />

        </table>
      </div>
      </div>

    </div>
  );
};

export default DataTable;
