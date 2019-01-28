import React, { Component } from "react";
import "antd-mobile/dist/antd-mobile.css";
import { Card } from "antd-mobile";
import RankCard from "../../components/rankcard";
import "./index.css";
import axios from "axios";
import { domain, formatNumber } from "../../config";
const bg = "url(" + domain + "/static/image/icon/user_banner.png)";
const level_imgs = [
  "/static/image/icon/lv0.png",
  "/static/image/icon/lv1.png",
  "/static/image/icon/lv2.png",
  "/static/image/icon/lv3.png",
  "/static/image/icon/lv4.png",
  "/static/image/icon/lv5.png",
  "/static/image/icon/lv6.png"
];
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      vipInfo: {},
      statInfo: {},
      videoInfo: {}
    };
  }
  getuserInfo = () => {
    const mid = this.props.location.search.split("=")[1] || 0;
    axios.get(domain + "/userInfo?mid=" + mid).then(res => {
      this.setState({ userInfo: res.data.reduxAsyncConnect.upUserInfo });
    });
  };
  getvipstatus = () => {
    const mid = this.props.location.search.split("=")[1] || 0;
    axios.get(domain + "/vipstatus?mid=" + mid).then(res => {
      this.setState({ vipInfo: res.data.data });
    });
  };
  getstat = () => {
    const mid = this.props.location.search.split("=")[1] || 0;
    axios.get(domain + "/stat?mid=" + mid).then(res => {
      this.setState({ statInfo: res.data.data });
    });
  };
  getSubmitVideo = () => {
    const mid = this.props.location.search.split("=")[1] || 0;
    axios.get(domain + "/SubmitVideo?mid=" + mid).then(res => {
      this.setState({ videoInfo: res.data.data });
    });
  };
  componentDidMount() {
    this.getuserInfo();
    this.getvipstatus();
    this.getstat();
    this.getSubmitVideo();
  }
  render() {
    return (
      <div className="User">
        <div className="user-banner" style={{ backgroundImage: bg }}>
          <div className="user-info-box">
            <div className="user-info">
              <img
                className="avatar"
                src={this.state.userInfo.localaddress}
                alt=""
              />
              {this.state.vipInfo.vipStatus === 1 && (
                <img
                  className="bigVip"
                  src={domain + "/static/image/icon/big.png"}
                  alt=""
                />
              )}
            </div>

            <div className="vip">
              {this.state.vipInfo.vipStatus === 1 && <span>大会员</span>}
            </div>
          </div>
        </div>

        <div className="upinfo">
          <div className="top">
            <span className="upname">{this.state.userInfo.name}</span>
            <div className="sex">
              {this.state.userInfo.sex === "女" && (
                <svg
                  id="icon-nv"
                  viewBox="0 0 1024 1024"
                  fill="#fb7299"
                  width="2.5vh"
                >
                  <path d="M774.4 96c-48-35.2-108.8-51.2-172.8-51.2-105.6 0-208 51.2-268.8 150.4-89.6 134.4-57.6 313.6 60.8 416l-32 51.2-188.8-121.6S128 512 108.8 544c-22.4 35.2 22.4 64 22.4 64l188.8 121.6-105.6 163.2s-19.2 32 16 51.2c38.4 22.4 57.6-12.8 57.6-12.8l102.4-160 185.6 121.6s48 28.8 70.4-6.4c19.2-28.8-25.6-57.6-25.6-57.6L432 704l32-48c44.8 22.4 92.8 32 137.6 32 105.6 0 208-51.2 268.8-150.4 96-147.2 51.2-345.6-96-441.6z m35.2 400c-44.8 67.2-118.4 108.8-201.6 108.8-44.8 0-92.8-12.8-131.2-38.4-112-73.6-147.2-220.8-73.6-332.8 44.8-64 121.6-105.6 201.6-108.8 44.8 0 92.8 12.8 131.2 38.4 112 73.6 147.2 220.8 73.6 332.8z" />
                </svg>
              )}
              {this.state.userInfo.sex === "男" && (
                <svg
                  id="icon-nan"
                  viewBox="0 0 1024 1024"
                  fill="#89cff0"
                  width="2.5vh"
                >
                  <path d="M889.6 96h-240s-35.2 0-38.4 41.6c0 19.2 16 38.4 38.4 38.4h140.8l-179.2 179.2C556.8 313.6 489.6 288 416 288 240 288 96 432 96 608s144 320 320 320 320-144 320-320c0-73.6-25.6-140.8-67.2-195.2l179.2-179.2v140.8c0 22.4 19.2 38.4 38.4 38.4 22.4 0 38.4-19.2 38.4-41.6V131.2h3.2C924.8 96 889.6 96 889.6 96zM416 848c-131.2 0-236.8-105.6-236.8-236.8 0-131.2 105.6-236.8 236.8-236.8s236.8 105.6 236.8 236.8c0 131.2-105.6 236.8-236.8 236.8z" />
                </svg>
              )}
              {this.state.userInfo.sex === "保密" && (
                <svg
                  id="icon-zhongxing"
                  viewBox="0 0 1024 1024"
                  fill="#ce21e8"
                  width="2.5vh"
                >
                  <path d="M512 240c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m0 208c-44.8 0-80-35.2-80-80S467.2 288 512 288s80 35.2 80 80S556.8 448 512 448z" />
                  <path d="M947.2 694.4c3.2-22.4-9.6-41.6-32-48h-9.6c-19.2 0-35.2 12.8-38.4 32l-28.8 137.6-137.6-208c70.4-54.4 115.2-140.8 115.2-236.8C816 201.6 678.4 64 512 64s-304 137.6-304 304c0 96 44.8 182.4 115.2 236.8l-48 73.6-105.6-89.6c-9.6-6.4-16-9.6-25.6-9.6s-22.4 3.2-28.8 12.8l-3.2 3.2c-12.8 16-9.6 38.4 3.2 51.2l118.4 99.2-99.2 153.6c-12.8 19.2-6.4 44.8 12.8 54.4 6.4 3.2 12.8 6.4 19.2 6.4 12.8 0 25.6-6.4 35.2-19.2l92.8-144 105.6 89.6c6.4 6.4 16 9.6 25.6 9.6s22.4-3.2 28.8-12.8l3.2-3.2c12.8-16 9.6-38.4-3.2-51.2l-115.2-99.2 54.4-83.2c35.2 16 76.8 25.6 118.4 25.6s83.2-9.6 118.4-25.6l137.6 214.4-147.2-32c-19.2 0-35.2 12.8-38.4 32-3.2 22.4 9.6 41.6 32 48l243.2 51.2c19.2 0 35.2-12.8 38.4-32 3.2-3.2 51.2-233.6 51.2-233.6zM288 368c0-124.8 99.2-224 224-224s224 99.2 224 224-99.2 224-224 224-224-99.2-224-224z" />
                </svg>
              )}
            </div>
            <span className="level">
              <img
                src={domain + level_imgs[this.state.userInfo.level]}
                alt=""
              />
            </span>
            <span className="uid">
              UID: {this.props.location.search.split("=")[1]}
            </span>
          </div>
          <div className="mid">
            <span className="following">
              {formatNumber(this.state.statInfo.following)}{" "}
              <i className="particle"> 关注</i>
            </span>
            <span className="follower">
              {formatNumber(this.state.statInfo.follower)}
              <i className="particle"> 粉丝</i>
            </span>
          </div>
          <div className="bottom">
            <p className="abstract">{this.state.userInfo.sign}</p>
          </div>
        </div>
        <div>
          <Card full>
            <Card.Header title="Ta的投稿" />
            <Card.Body>
              {this.state.videoInfo && (
                <div>
                  {this.state.videoInfo.vlist &&
                    this.state.videoInfo.vlist.map((item, key) => {
                      let path = "/video?avId=" + item.aid;
                      return (
                        <RankCard
                          key={key}
                          rankIndex={key}
                          rankImg={item.localaddress}
                          path={path}
                          rankTitle={item.title}
                          rankSort={false}
                          mid={this.props.location.search.split("=")[1]}
                          upName={item.author}
                          videoNumber={item.play}
                          danmuNumber={item.video_review}
                        />
                      );
                    })}
                </div>
              )}
              <div className="footer" />
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default User;
