import React from 'react';
import styled from 'styled-components';


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
          <OverlapGroup1>
            <OverlapGroup>
              <TopBar>
                <Frame2>
                  <Frame1>
                    <SWMIconsBrokenHome1
                      src={component8Image2False4Props.src}
                    />
                  </Frame1>
                </Frame2>
              </TopBar>
              <Component8Image2False1>
                <Announcements>{announcements}</Announcements>
              </Component8Image2False1>
              <Component8Image2False
                voteSnapshot={component8Image2FalseProps.voteSnapshot}
                sWMIconsBrokenNewscreenProps={component8Image2FalseProps.sWMIconsBrokenNewscreenProps}
              />
              <Component8Image2False
                voteSnapshot={component8Image2False2Props.voteSnapshot}
                className={component8Image2False2Props.className}
                sWMIconsBrokenNewscreenProps={component8Image2False2Props.sWMIconsBrokenNewscreenProps}
              />
            </OverlapGroup>
            <Title>{title}</Title>
            <Component8Image2False2>
              <Twitter>{twitter}</Twitter>
            </Component8Image2False2>
            <Component8Image2False
              voteSnapshot={component8Image2False3Props.voteSnapshot}
              className={component8Image2False3Props.className}
              sWMIconsBrokenNewscreenProps={component8Image2False3Props.sWMIconsBrokenNewscreenProps}
            />
          </OverlapGroup1>
          <VoteSnapshot>
            <Component8Image2False
              voteSnapshot={component8Image2False4Props2.voteSnapshot}
              className={component8Image2False4Props2.className}
              sWMIconsBrokenNewscreenProps={component8Image2False4Props2.sWMIconsBrokenNewscreenProps}
            />
          </VoteSnapshot>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 1440px;
  height: 343px;
  position: relative;
  margin-left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1440px;
  height: 343px;
  top: 0;
  left: 0;
`;

const TopBar = styled.div`
  position: absolute;
  width: 93px;
  height: 1440px;
  top: -674px;
  left: 674px;
  display: flex;
  padding: 16px 17px;
  align-items: flex-start;
  background-color: var(--mirage);
  border: 1px solid var(--white);
  transform: rotate(-90deg);
  box-shadow: 0px 0px 24px #00000014;
`;

const Frame2 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 50px;
`;

const Frame1 = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  padding: 0px 0px;
  align-items: flex-start;
  min-width: 50px;
`;

const Component8Image2False1 = styled.div`
  position: absolute;
  width: 327px;
  height: 45px;
  top: 217px;
  left: 379px;
  display: flex;
  padding: 4px 10px;
  align-items: flex-start;
  background-color: var(--mulled-wine);
`;

const Announcements = styled.div`
  ${PoppinsBoldWhite24px}
  min-height: 36px;
  letter-spacing: 0;
`;

const Title = styled.h1`
  position: absolute;
  top: 101px;
  left: 16px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const Component8Image2False2 = styled.div`
  position: absolute;
  width: 327px;
  height: 45px;
  top: 217px;
  left: 23px;
  display: flex;
  padding: 3px 9px;
  align-items: flex-end;
  background-color: var(--mulled-wine);
`;

const Twitter = styled.div`
  ${PoppinsBoldWhite24px}
  min-height: 36px;
  min-width: 116px;
  letter-spacing: 0;
`;

const VoteSnapshot = styled.div`
  height: 45px;
  position: relative;
  margin-top: 28px;
  margin-left: 23px;
  display: flex;
  align-items: flex-start;
  min-width: 327px;
`;



class SWMIconsBrokenHome1 extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <SWMIconsBrokenHome11>
        <Shape src={src} />
      </SWMIconsBrokenHome11>
    );
  }
}

const SWMIconsBrokenHome11 = styled.div`
  height: 50px;
  display: flex;
  padding: 4px 6px;
  align-items: flex-start;
  min-width: 50px;
  transform: rotate(90deg);
`;

const Shape = styled.img`
  width: 38px;
  height: 40px;
`;



class Component8Image2False extends React.Component {
  render() {
    const { voteSnapshot, className, sWMIconsBrokenNewscreenProps } = this.props;

    return (
      <Component8Image2False1 className={`component-8-image-2-false-2 ${className || ""}`}>
        <VoteSnapshot className="vote-snapshot-1">
          {voteSnapshot}
        </VoteSnapshot>
        <SWMIconsBrokenNewscreen
          src={sWMIconsBrokenNewscreenProps.src}
          className={sWMIconsBrokenNewscreenProps.className}
        />
      </Component8Image2False1>
    );
  }
}

const Component8Image2False1 = styled.div`
  position: absolute;
  width: 327px;
  height: 45px;
  top: 296px;
  left: 379px;
  display: flex;
  padding: 4px 10px;
  align-items: flex-start;
  background-color: var(--mulled-wine);

  &.component-8-image-2-false-2.component-8-image-2-false-3 {
    height: 47px;
    left: 735px;
    padding: 5px 10px;
  }

  &.component-8-image-2-false-2.component-8-image-2-false-4 {
    left: 23px;
    align-items: center;
  }

  &.component-8-image-2-false-2.component-8-image-2-false-5 {
    position: relative;
    align-items: center;
    top: unset;
    left: unset;
  }
`;

const VoteSnapshot = styled.div`
  ${PoppinsBoldWhite24px}
  min-height: 36px;
  min-width: 210px;
  letter-spacing: 0;
`;

const Socials = styled.div`
  ${PoppinsBoldWhite24px}

  .component-8-image-2-false-2.component-8-image-2-false-3  & {
    min-width: 118px;
  }
`;

const Calendar = styled.div`
  ${PoppinsBoldWhite24px}

  .component-8-image-2-false-2.component-8-image-2-false-4  & {
    align-self: flex-end;
    min-width: 145px;
  }
`;

const Notion = styled.div`
  ${PoppinsBoldWhite24px}

  .component-8-image-2-false-2.component-8-image-2-false-5  & {
    align-self: flex-end;
    min-width: 111px;
  }
`;



class SWMIconsBrokenNewscreen extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <SWMIconsBrokenNewscreen1 className={`swm-icons-broken-newscreen ${className || ""}`}>
        <Shape className="shape-1" src={src} />
      </SWMIconsBrokenNewscreen1>
    );
  }
}

const SWMIconsBrokenNewscreen1 = styled.div`
  height: 24px;
  align-self: center;
  margin-left: 65px;
  margin-top: 1px;
  display: flex;
  padding: 3px 3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 24px;

  &.swm-icons-broken-newscreen.swm-icons-broken-newscreen-1 {
    margin-left: 157px;
    margin-bottom: 1px;
    margin-top: unset;
  }

  &.swm-icons-broken-newscreen.swm-icons-broken-newscreen-2 {
    margin-left: 130px;
    align-self: unset;
  }

  &.swm-icons-broken-newscreen.swm-icons-broken-newscreen-3 {
    margin-left: 164px;
    align-self: unset;
  }
`;

const Shape = styled.img`
  width: 18px;
  height: 18px;
`;


export const PoppinsBoldWhite24px = css`
  color: var(--white);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;
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
