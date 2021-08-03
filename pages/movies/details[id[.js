import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Descriptions, Space, Row, Col, Button, Modal } from "antd";
import movie_api from "../../Actions/api/movie_api";
import { connect } from "react-redux";

function Details(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovie();
  }, [props.id]);

  const fetchMovie = async () => {
    const {id}=props;
      await movie_api.getSingleAdmin(id).then((res) => {
        if (res.data) {
          setMovie(res.data);
        }
      });
    }
  };

  return (
    <>
      <Space direction="vertical" size={"large"} className="w-100">
        <Descriptions
          column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
          title="Movie Details"
          size={"small"}
          bordered
        >
          <Descriptions.Item label="Name:">
            {movie.Name}
          </Descriptions.Item>
          <Descriptions.Item label="Description:">
            {movie?.Description}
          </Descriptions.Item>
          <Descriptions.Item label="ReleaseDate:">
            {movie?.ReleaseDate}
          </Descriptions.Item>
          <Descriptions.Item label="Rating:">
            {movie?.Rating}
          </Descriptions.Item>
          <Descriptions.Item label="Rating:">
            {movie?.Rating}
          </Descriptions.Item>
        </Descriptions>
      </Space>
    </>
  );
}

const mapStateToProps = ({ admin }) => {
  return {
    admin,
  };
};

export default connect(mapStateToProps)(Details);

// Details.getInitialProps = async (ctx) => {
//     const { query: { id } } = ctx;
//     await Axios.get(`http://localhost:4000/admin/get_single_user/${id}`).then(res => {

//     })
// }
