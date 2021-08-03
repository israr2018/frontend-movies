import React, { useEffect, useState } from "react";
import axios from "axios";

import { Rate, Collapse } from "antd";

const { Panel } = Collapse;

import {
  PushpinOutlined,
  PhoneOutlined,
  LinkOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import BUSINESSIMG01 from "../public/image/business-img-01.jpg";
import OFFERBG from "../public/image/offer-bg.jpg";

export default function GooglePlaces() {
  const [placesData, setPlacesData] = useState([]);
  const [isError, setIsError] = useState(false);

  const [url, setUrl] = useState(
    "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJbXH5ExxwcVMR_I-FqUMNGis&fields=name,rating,formatted_address,opening_hours,formatted_phone_number,website,reviews&key=AIzaSyDMCGETbx4QgKlV1PoE0JjoPGvVDkDTXZg"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get(url).then((res) => {
        setPlacesData(res.data?.result);
      });
    } catch (error) {
      setIsError(true);
    }
  };

  const text_truncate = function (str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="business-image">
        <img
          src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwIRgpTczUYCVy3fxrYUONdADduyrarpk-rxdeknVyW_e1FnaYWYSdxuAlLFiIiUMQdspzTW3tmjb5covd-13uwYreswxi9FCj_lg3fMQpEBtiMbshMy0PYj_U-3DdqOiJIUEpzFTizziSBix2Xcbn3CH5J8zcxWDrAiR2g6qwby6aPa&sensor=false&key=AIzaSyDMCGETbx4QgKlV1PoE0JjoPGvVDkDTXZg"
          alt="calcutta cricket club"
        />
      </div>
      <div className="offer-holder">
        <div className="business-info">
          <span className="business-name">{placesData?.name}</span>
          {typeof placesData?.rating !== "undefined" ? (
            <div className="d-flex align-items-center">
              <span>{placesData?.rating}</span>
              <Rate disabled allowHalf defaultValue={placesData?.rating} />
            </div>
          ) : null}
        </div>
        <div
          className="offers-box"
          style={{
            backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwIhJHpojxgH7g1GyY3lOidnPZCV9UmQMr-X7LWTTqYk7Bxpw6kH7NUxWJyL_nsrnFYvdOweCKr8irzFvE_jtqSJvhlJ2trYgP80g-Bis-AJVbSJWlup5SWabeJDSBNZgjE0zFs5PbAsB6FKbuaOE3RSyUHRbMLm-VvZScf6CeUuhKog&sensor=false&key=AIzaSyDMCGETbx4QgKlV1PoE0JjoPGvVDkDTXZg)`,
          }}
        >
          <span className="sub-title">offer:</span>
          <span className="offer-name">Complementary Appetizer</span>
          <span className="offer-detail">
            with the purchase of 2 appetizers
          </span>
          <span className="expiry-date">expires Jan 31st 2021</span>
        </div>
        <ul className="details-list list-unstyled m-0">
          <li>
            <span className="icon-holder">
              <PushpinOutlined />
            </span>{" "}
            {placesData?.formatted_address}
          </li>
          <li>
            <Collapse expandIconPosition="right" ghost>
              <Panel
                header={
                  <>
                    <span className="icon-holder">
                      <ClockCircleOutlined />
                    </span>
                    {placesData?.opening_hours?.open_now !== "undefined" ? (
                      placesData?.opening_hours?.open_now ? (
                        <span className="text-success status">open</span>
                      ) : (
                        <span className="text-danger status">close</span>
                      )
                    ) : null}
                  </>
                }
                key="1"
              >
                <ul className="business-times list-unstyled m-0">
                  {placesData?.opening_hours?.weekday_text !== "undefined"
                    ? placesData?.opening_hours?.weekday_text.map((item) => {
                        return <li>{item}</li>;
                      })
                    : null}
                </ul>
              </Panel>
            </Collapse>
          </li>
          <li>
            <span className="icon-holder">
              <PhoneOutlined />
            </span>{" "}
            {placesData?.formatted_phone_number}
          </li>
          <li>
            <span className="icon-holder">
              <LinkOutlined />
            </span>{" "}
            {placesData?.website}
          </li>
        </ul>
        <div className="reviews">
          <span className="title">Review Summary</span>
          <ul className="review-list list-unstyled">
            <li>
              {placesData?.reviews?.slice(0, 2).map((item) => {
                return (
                  <div className="review-holder">
                    <div className="author-info d-flex align-items-center">
                      <div className="author-img">
                        <img src={item?.profile_photo_url} alt="" />
                      </div>
                      <div className="author-name">{item?.author_name}</div>
                    </div>
                    <p>{text_truncate(item?.text, 100)}</p>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
