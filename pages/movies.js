import React, { useEffect, useState } from "react";
import AppContainer from "../Components/AppContainer";
import Link from "next/link";
import * as Bsicon from "react-bootstrap-icons";
import { SearchOutlined } from "@ant-design/icons";
import movieApi  from "../Actions/api/movie_api";
import { VuroxAdvancedTableHeading, VuroxTableDark } from "../Components/tables";
import { VuroxComponentsContainer } from "../Components/layout";
import { Row, Col, Button, Input, Pagination } from "antd";

function Movies() {
  const [movies2, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      /* const result = await movieApi.getAll() */
      //setMovies(result.data);

      setMinIndex((page - 1) * pageSize);
      setMaxIndex(page * pageSize);
    } catch (error) {
      setIsError(true);
    }
  };

  const onChangePage = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <AppContainer>
      <Row className="mt-2">
        <Col span={24}>
          <VuroxComponentsContainer className="rounded mb-2">
            <VuroxTableDark>
              <VuroxAdvancedTableHeading
                className="constant-white"
                fill="#bad179"
              >
                <Row justify="space-between">
                  <Col>
                    <h5>All Movies</h5>
                  </Col>
                  <Col>
                    <Link href="/addMovie">
                      <Button ghost>Add Movie</Button>
                    </Link>
                  </Col>
                </Row>
              </VuroxAdvancedTableHeading>
              <div className="p-3">
                <Row align="middle" justify="space-between" gutter={[10, 20]}>
                  <Col xs={24} xl={8}>
                    <Row gutter={[10, { xs: 10, sm: 10, md: 0 }]}>
                      <Col xs={24} md={16}>
                        <Input placeholder="Search Movies" />
                      </Col>
                      <Col xs={24} md={8}>
                        <div className="d-flex">
                          <Button
                            style={{ width: "50%" }}
                            icon={<SearchOutlined />}
                          />

                          <Button style={{ marginLeft: "10px", width: "50%" }}>
                            Reset
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} xl={11} className="d-flex justify-content-end">
                    <Pagination
                      responsive={true}
                      size={"small"}
                      current={page}
                      onChange={onChangePage}
                      pageSize={pageSize}
                      total={movies.length}
                    />
                  </Col>
                </Row>
              </div>
              <div className="table-responsive plastk-business-table">
                <table
                  className="table table-borderless"
                  style={{ minWidth: "994px" }}
                >
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th>Description</th>
                      <th>Relaease Data</th>
                      <th>TicketPrice</th>
                      <th>Details</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {movies?.map(
                      (item, index) =>
                        index >= minIndex &&
                        index < maxIndex && (
                          <tr key={item.id}>
                            <td>{item.Name}</td>
                            <td>{item.Description}</td>
                            <td>{item.ReleaseDate}</td>
                            
                            <td className="align-left">
                              <Link
                                as={`/movies/details/${item.id}`}
                                href="/movies/details/[id]"
                              >
                                <Button>More</Button>
                              </Link>
                            </td>
                            
                            
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </VuroxTableDark>
          </VuroxComponentsContainer>
        </Col>
      </Row>
    </AppContainer>
  );
}

export default Movies;
