import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
function EmployeList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:62168/api/hooks/employee");
      setData(result.data);
    };

    GetData();
  }, []);
  const deleteeployee = (id) => {
    debugger;
    axios
      .delete("http://localhost:62168/api/hooks/Deleteemployee?id=" + id)
      .then((result) => {
        props.history.push("/EmployeList");
      });
  };
  const editemployee = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Age</th>

                    <th>City</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => {
                    return (
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Age}</td>
                        <td>{item.City}</td>
                        <td>{item.Country}</td>
                        <td>{item.Gender}</td>
                        <td>
                          <div class="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editemployee(item.Id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                deleteeployee(item.Id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeList;
