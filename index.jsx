import React from 'react';

class App extends React.Component {
  render() {
    return <MacBookProSelectedDAO {...macBookProSelectedDAOData} />;
  }
}

export default App;

class MacBookProSelectedDAO extends React.Component {
  render() {
    const {
      announcements,
      title,
      twitter,
      component8Image2False4Props,
      component8Image2FalseProps,
      component8Image2False2Props,
      component8Image2False3Props,
      component8Image2False4Props2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="macbook-pro-selected-daoscreen">
          <div className="overlap-group1">
            <div className="overlap-group">
              <div className="top-bar">
                <div className="frame-2">
                  <div className="frame-1">
                    <SWMIconsBrokenHome1
                      src={component8Image2False4Props.src}
                    />
                  </div>
                </div>
              </div>
              <div className="component-8-image-2-false">
                <div className="announcementspoppins-bold-white-24px">
                  {announcements}
                </div>
              </div>
              <Component8Image2False
                voteSnapshot={component8Image2FalseProps.voteSnapshot}
                sWMIconsBrokenNewscreenProps={component8Image2FalseProps.sWMIconsBrokenNewscreenProps}
              />
              <Component8Image2False
                voteSnapshot={component8Image2False2Props.voteSnapshot}
                className={component8Image2False2Props.className}
                sWMIconsBrokenNewscreenProps={component8Image2False2Props.sWMIconsBrokenNewscreenProps}
              />
            </div>
            <h1 className="title">
              {title}
            </h1>
            <div className="component-8-image-2-false-1">
              <div className="twitterpoppins-bold-white-24px">
                {twitter}
              </div>
            </div>
            <Component8Image2False
              voteSnapshot={component8Image2False3Props.voteSnapshot}
              className={component8Image2False3Props.className}
              sWMIconsBrokenNewscreenProps={component8Image2False3Props.sWMIconsBrokenNewscreenProps}
            />
          </div>
          <div className="vote-snapshot">
            <Component8Image2False
              voteSnapshot={component8Image2False4Props2.voteSnapshot}
              className={component8Image2False4Props2.className}
              sWMIconsBrokenNewscreenProps={component8Image2False4Props2.sWMIconsBrokenNewscreenProps}
            />
          </div>
        </div>
      </div>
    );
  }
}


class SWMIconsBrokenHome1 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="swm-icons-broken-home-1">
        <img className="shape" src={src} />
      </div>
    );
  }
}


class Component8Image2False extends React.Component {
  render() {
    const { voteSnapshot, className, sWMIconsBrokenNewscreenProps } = this.props;

    return (
      <div className={`component-8-image-2-false-2 ${className || ""}`}>
        <div className="vote-snapshot-1poppins-bold-white-24px">
          {voteSnapshot}
        </div>
        <SWMIconsBrokenNewscreen
          src={sWMIconsBrokenNewscreenProps.src}
          className={sWMIconsBrokenNewscreenProps.className}
        />
      </div>
    );
  }
}


class SWMIconsBrokenNewscreen extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`swm-icons-broken-newscreen ${className || ""}`}>
        <img className="shape-1" src={src} />
      </div>
    );
  }
}

const sWMIconsBrokenHome1Data = {
    src: "shape.svg",
};

const sWMIconsBrokenNewscreenData = {
    src: "shape-1.svg",
    className: "",
};

const component8Image2FalseData = {
    voteSnapshot: "⚡️ Vote Snapshot",
    sWMIconsBrokenNewscreenProps: sWMIconsBrokenNewscreenData,
};

const sWMIconsBrokenNewscreen2Data = {
    src: "shape-1.svg",
    className: "swm-icons-broken-newscreen-1",
};

const component8Image2False2Data = {
    voteSnapshot: "🔗 Socials",
    className: "component-8-image-2-false-3",
    sWMIconsBrokenNewscreenProps: sWMIconsBrokenNewscreen2Data,
};

const sWMIconsBrokenNewscreen3Data = {
    src: "shape-1.svg",
    className: "swm-icons-broken-newscreen-2",
};

const component8Image2False3Data = {
    voteSnapshot: "🗓 Calendar",
    className: "component-8-image-2-false-4",
    sWMIconsBrokenNewscreenProps: sWMIconsBrokenNewscreen3Data,
};

const sWMIconsBrokenNewscreen4Data = {
    src: "shape-2.svg",
    className: "swm-icons-broken-newscreen-3",
};

const component8Image2False4Data = {
    voteSnapshot: "🏠 Notion",
    className: "component-8-image-2-false-5",
    sWMIconsBrokenNewscreenProps: sWMIconsBrokenNewscreen4Data,
};

const macBookProSelectedDAOData = {
    announcements: "📣  Announcements",
    title: "Forefront",
    twitter: "✨ Twitter",
    component8Image2False4Props: sWMIconsBrokenHome1Data,
    component8Image2FalseProps: component8Image2FalseData,
    component8Image2False2Props: component8Image2False2Data,
    component8Image2False3Props: component8Image2False3Data,
    component8Image2False4Props2: component8Image2False4Data,
};
