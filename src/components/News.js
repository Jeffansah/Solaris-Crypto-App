import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImageUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Crytocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowercase()) >= 0
            }
          >
            <Option value="Cryptocurrency"></Option>
            {data?.data?.coins.map((coin) => (
              <Option key={coin.uuid} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((item, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="news-container">
                <img
                  className="news-image"
                  src={item?.image?.thumbnail?.contentUrl || demoImageUrl}
                  alt="news-image"
                />
                <div className="news-content">
                  <Title className="news-title" level={4}>
                    {item.name}
                  </Title>
                  {/* Add other content here */}
                </div>
                <div style={{ clear: "both" }}></div>
              </div>

              <p>
                {item.description > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      item.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImageUrl
                    }
                  />
                  <Text className="provider-name">
                    {item.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(item.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
