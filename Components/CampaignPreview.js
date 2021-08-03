import React, { useState } from "react";
import BusinessMap from "./BusinessMap";
import GooglePlaces from "./GooglePlaces";

import { Row, Col, Modal, Button, Space } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { MobileOutlined, DesktopOutlined } from "@ant-design/icons";

import ICONBURGER from "../public/image/icon-burger.png";
import ICONAVOCADO from "../public/image/icon-avocado.png";
import ICONCUP from "../public/image/icon-cup.png";
import ICONGAS from "../public/image/icon-gas.png";
import ICONBUILDING from "../public/image/icon-building.png";
import ICONGYM from "../public/image/icon-gym.png";
import POINTS from "../public/image/points.svg";
import ICONPLUS from "../public/image/icon-plus.svg";
import BUSINESSIMG01 from "../public/image/business-img-01.jpg";

export default function CampaignPreview() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeViewToMobile = () => {
    setIsMobileView(true);
  };

  const changeViewToDesktop = () => {
    setIsMobileView(false);
  };

  return (
    <>
      <Row>
        <Col xs={24}>
          <Space className="d-flex mb-3 justify-content-end">
            <Button
              onClick={changeViewToMobile}
              type={`${isMobileView ? "primary" : ""}`}
            >
              <MobileOutlined />
            </Button>
            <Button
              onClick={changeViewToDesktop}
              type={`${!isMobileView ? "primary" : ""}`}
            >
              <DesktopOutlined />
            </Button>
          </Space>
          <div className={`${isMobileView ? "mobile-active" : ""}`}>
            <div className="map-holder">
              <BusinessMap />
            </div>
            <h2>Categories</h2>
            <Swiper
              className="list-unstyled categories-list"
              spaceBetween={10}
              slidesPerView="auto"
            >
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="14"
                      viewBox="0 0 31 14"
                      fill="none"
                      className="icon-infinity"
                    >
                      <path
                        d="M23.3 0C21.5 0 19.8 0.7 18.6 1.9L9.8 9.8C9 10.6 7.9 11.1 6.8 11.1 4.4 11.1 2.5 9.1 2.5 6.8 2.5 4.4 4.4 2.5 6.8 2.5 7.9 2.5 9 3 9.8 3.8L11.2 5.1 13.1 3.4 11.5 2C10.3 0.7 8.6 0 6.8 0 3 0 0 3.1 0 6.8 0 10.5 3 13.6 6.8 13.6 8.6 13.6 10.3 12.9 11.5 11.6L20.3 3.8C21.1 3 22.1 2.5 23.3 2.5 25.6 2.5 27.5 4.4 27.5 6.8 27.5 9.1 25.6 11.1 23.3 11.1 22.1 11.1 21.1 10.6 20.2 9.8L18.8 8.5 16.9 10.2 18.5 11.6C19.8 12.9 21.5 13.6 23.3 13.6 27 13.6 30 10.5 30 6.8 30 3 27 0 23.3 0V0Z"
                        fill="#FECF31"
                      />
                    </svg>
                  </span>
                  All
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide active">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONBURGER} alt="icon burger" />
                  </span>
                  Restaurants
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONAVOCADO} alt="icon avocado" />
                  </span>
                  Groceries
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONCUP} alt="icon cup" />
                  </span>
                  Coffee
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONGAS} alt="icon gas" />
                  </span>
                  Gas
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONBUILDING} alt="icon building" />
                  </span>
                  Hotels
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONAVOCADO} alt="icon avocado" />
                  </span>
                  Pharmacies
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <img src={ICONGYM} alt="icon gym" />
                  </span>
                  Gyms
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">
                  <span className="img-holder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="14"
                      viewBox="0 0 31 14"
                      fill="none"
                      className="icon-infinity"
                    >
                      <path
                        d="M23.3 0C21.5 0 19.8 0.7 18.6 1.9L9.8 9.8C9 10.6 7.9 11.1 6.8 11.1 4.4 11.1 2.5 9.1 2.5 6.8 2.5 4.4 4.4 2.5 6.8 2.5 7.9 2.5 9 3 9.8 3.8L11.2 5.1 13.1 3.4 11.5 2C10.3 0.7 8.6 0 6.8 0 3 0 0 3.1 0 6.8 0 10.5 3 13.6 6.8 13.6 8.6 13.6 10.3 12.9 11.5 11.6L20.3 3.8C21.1 3 22.1 2.5 23.3 2.5 25.6 2.5 27.5 4.4 27.5 6.8 27.5 9.1 25.6 11.1 23.3 11.1 22.1 11.1 21.1 10.6 20.2 9.8L18.8 8.5 16.9 10.2 18.5 11.6C19.8 12.9 21.5 13.6 23.3 13.6 27 13.6 30 10.5 30 6.8 30 3 27 0 23.3 0V0Z"
                        fill="#FECF31"
                      />
                    </svg>
                  </span>
                  More
                </a>
              </SwiperSlide>
            </Swiper>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="mb-0">Featured</h2>
              <a href="#" className="see-more">
                See More
              </a>
            </div>

            <Swiper
              className="filters-list list-unstyled"
              spaceBetween={20}
              slidesPerView="auto"
            >
              <SwiperSlide className="slide">
                <a href="#">All</a>
              </SwiperSlide>
              <SwiperSlide className="slide active">
                <a href="#">Mexican</a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">Italian</a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">Chinese</a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">Fast Food</a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">Bakery</a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="#">African</a>
              </SwiperSlide>
            </Swiper>
            <Swiper
              className="business-slider"
              spaceBetween={20}
              slidesPerView="auto"
            >
              <SwiperSlide className="slide">
                <div className="featured-deal box" onClick={showModal}>
                  <div className="featured-img">
                    <img
                      src={BUSINESSIMG01}
                      alt="image description"
                      className="img-fluid"
                    />
                  </div>
                  <span className="featured-name">Calcutta Cricket Club</span>
                  <div className="featured-detail">
                    <div className="info-text">
                      <span className="title">Get Deals</span>
                      <span className="total-points">
                        <img
                          src={POINTS}
                          alt="image description"
                          width="16"
                          height="16"
                        />
                        40,000
                      </span>
                    </div>
                    <span className="btn-add">
                      <img src={ICONPLUS} alt="icon plus" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <div className="featured-deal box">
                  <div className="featured-img">
                    <img
                      src={BUSINESSIMG01}
                      alt="image description"
                      className="img-fluid"
                    />
                  </div>
                  <span className="featured-name">Brassiere Kensington</span>
                  <div className="featured-detail">
                    <div className="info-text">
                      <span className="title">Get Deals</span>
                      <span className="total-points">
                        <img
                          src={POINTS}
                          alt="image description"
                          width="16"
                          height="16"
                        />
                        40,000
                      </span>
                    </div>
                    <span className="btn-add">
                      <img src={ICONPLUS} alt="icon plus" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <div className="featured-deal box">
                  <div className="featured-img">
                    <img
                      src={BUSINESSIMG01}
                      alt="image description"
                      className="img-fluid"
                    />
                  </div>
                  <span className="featured-name">Cravings Market</span>
                  <div className="featured-detail">
                    <div className="info-text">
                      <span className="title">Get Deals</span>
                      <span className="total-points">
                        <img
                          src={POINTS}
                          alt="image description"
                          width="16"
                          height="16"
                        />
                        40,000
                      </span>
                    </div>
                    <span className="btn-add">
                      <img src={ICONPLUS} alt="icon plus" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <div className="featured-deal box">
                  <div className="featured-img">
                    <img
                      src={BUSINESSIMG01}
                      alt="image description"
                      className="img-fluid"
                    />
                  </div>
                  <span className="featured-name">Cascades Resturant</span>
                  <div className="featured-detail">
                    <div className="info-text">
                      <span className="title">Get Deals</span>
                      <span className="total-points">
                        <img
                          src={POINTS}
                          alt="image description"
                          width="16"
                          height="16"
                        />
                        40,000
                      </span>
                    </div>
                    <span className="btn-add">
                      <img src={ICONPLUS} alt="icon plus" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Col>
      </Row>
      <Modal
        title="Offer Detail"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="offer-detail-modal"
        width={300}
        footer={[
          <Button type="primary" key="back" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <GooglePlaces />
      </Modal>
    </>
  );
}
