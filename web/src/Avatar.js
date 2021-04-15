// Copyright 2020 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import { Link } from "react-router-dom";
import * as Setting from "./Setting";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  render() {
    let style;
    if (this.props.size === "small") {
      style = { maxWidth: "24px", maxHeight: "24px", width: "100%" };
    } else if (this.props.size === "large") {
      style = { maxWidth: "73px", maxHeight: "73px", width: "100%" };
    } else if (this.props.size === "middle") {
      style = { maxWidth: "36px", maxHeight: "36px", width: "100%" };
    } else {
      style = { maxWidth: "48px", maxHeight: "48px", width: "100%" };
    }

    let src;
    if (this.props.avatar !== "") {
      src = this.props.avatar;
    } else {
      src = Setting.getUserAvatar(this.props.username);
    }

    return (
      <Link to={`/member/${this.props.username}`}>
        <img
          src={src}
          className="avatar"
          border="0"
          align="default"
          style={style}
          alt={this.props.username}
          key={this.props.key}
        />
      </Link>
    );
  }
}

export default Avatar;
