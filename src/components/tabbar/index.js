import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { TabBar, TabBarItem, TabBarIcon, TabBarLabel } from "react-weui";
import "weui";
import "react-weui/build/packages/react-weui.css";
import "./index.css";
class TabBarBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab_active: 0
    };
  }
  componentDidMount() {
    if (
      !["/", "/rank", "/search", "/project"].includes(
        this.props.location.pathname
      )
    ) {
      this.setState({ tab_active: 4 });
    }
  }
  TabChange = (index, path) => {
    this.setState({ tab_active: index });
    this.props.history.push(path);
  };
  render() {
    return (
      <TabBar className="TabBar">
        <TabBarItem
          active={this.state.tab_active == 0}
          onClick={() => this.TabChange(0, "/")}
        >
          <TabBarIcon className="bar-item">
            <i className="fa fa-home bar-icon" />
          </TabBarIcon>
          <TabBarLabel>首页</TabBarLabel>
        </TabBarItem>
        <TabBarItem
          active={this.state.tab_active == 1}
          onClick={() => this.TabChange(1, "/rank")}
        >
          <TabBarIcon className="bar-item">
            <i className="fa fa-sort-amount-desc bar-icon" />
          </TabBarIcon>
          <TabBarLabel>排行榜</TabBarLabel>
        </TabBarItem>
        <TabBarItem
          active={this.state.tab_active == 2}
          onClick={() => this.TabChange(2, "/search")}
        >
          <TabBarIcon className="bar-item">
            <i className="fa fa-search bar-icon" />
          </TabBarIcon>
          <TabBarLabel>查找</TabBarLabel>
        </TabBarItem>
      </TabBar>
    );
  }
}

export default withRouter(TabBarBox);
