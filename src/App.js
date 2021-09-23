import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

function App() {

  const items = [
    { id: 1, name: "My First Item" },
    { id: 2, name: "Another item" },
    { id: 3, name: "Third Item" },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" },
    { id: 11, name: "My First Item" },
    { id: 21, name: "Another item" },
    { id: 31, name: "Third Item" },
    { id: 41, name: "Here is the Fourth" },
    { id: 51, name: "High Five" },
  ];

  const tenMoreItems = [
    { id: 21, name: "My First Item" },
    { id: 22, name: "Another item" },
    { id: 23, name: "Third Item" },
    { id: 24, name: "Here is the Fourth" },
    { id: 25, name: "High Five" },
    { id: 26, name: "My First Item" },
    { id: 27, name: "Another item" },
    { id: 28, name: "Third Item" },
    { id: 29, name: "Here is the Fourth" },
    { id: 30, name: "High Five" },
  ];

  const [showFullId, setShowFullId] = useState(2);
  const [profiles, setProfiles] = useState(items);

  const loadFunc = () => {
    console.log("I am called after scroll");
  };

  function Comment() {
    return (
      <>
        <SingleComment>
          <Avatar src="https://randomuser.me/api/portraits/men/74.jpg" />
          <CommentRightBox>
            <h5>Brad Gibson</h5>
            <p>
              Donec vestibulum consectetur felis ac porta. Vestibulum nec
              laoreet nunc, in pulvinar orci. Ut ultricies molestie lobortis.
              Etiam felis metus,
            </p>
          </CommentRightBox>
        </SingleComment>
        <TimeCaption>Today</TimeCaption>
      </>
    );
  }
  return (
    <div className="App">
      <Cards>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((item, id) => {
              const cover = `https://picsum.photos/id/${id + 210}/367/267.jpg`;
              const avatar = `https://randomuser.me/api/portraits/women/${
                id + 50
              }.jpg`;
              return (
                <Card onClick={() => setShowFullId(id)}>
                  <div>
                    <img src={cover} />
                  </div>
                  <User>
                    <Avatar src={avatar} />
                    <div>
                      <div>User full name | User role</div>
                      <div>
                        <DeckName>Deck Name</DeckName> | 13.9.21 at 08:32
                      </div>
                    </div>
                  </User>
                  <Content>
                    <h3>Neque porro quisquam est qui dolorem</h3>
                    <p
                      style={{
                        display: showFullId !== id ? "block" : "none",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dapibus id lacus eu tempus. Proin ac est erat.
                      Donec vestibulum consectetur felis ac porta. Vestibulum
                      nec laoreet nunc, in pulvinar orci. Ut ultricies molestie
                      lobortis. Etiam felis metus, dapibus sit amet fermentum
                      quis, pretium vulputate orci. Interdum et malesuada fames
                      ac ante ipsum primis in faucibus.
                    </p>

                    <p
                      style={{
                        display: showFullId === id ? "block" : "none",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent dapibus id lacus eu tempus. Proin ac est erat.
                      Donec vestibulum consectetur felis ac porta. Vestibulum
                      nec laoreet nunc, in pulvinar orci. Ut ultricies molestie
                      lobortis. Etiam felis metus, dapibus sit amet fermentum
                      quis, pretium vulputate orci. Interdum et malesuada fames
                      ac ante ipsum primis in faucibus. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Praesent dapibus id
                      lacus eu tempus. Proin ac est erat. Donec vestibulum
                      consectetur felis ac porta. Vestibulum nec laoreet nunc,
                      in pulvinar orci. Ut ultricies molestie lobortis. Etiam
                      felis metus, dapibus sit amet fermentum quis, pretium
                      vulputate orci. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                      <Comment />
                      <Comment />
                    </p>
                  </Content>
                </Card>
              );
            })}
          </Masonry>
        </InfiniteScroll>
      </Cards>
    </div>
  );
}

export default App;

const Cards = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  width: 367px;
  text-align: left;
  box-shadow: -1px 0px px 0px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.61);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 0px 25px 0px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: -1px 0px 25px 0px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: -1px 0px 25px 0px rgba(0, 0, 0, 0.61);
  }
`;

const User = styled.div`
  position: absolute;
  top: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
  padding: 70px 20px 0px 20px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DeckName = styled.span`
  font-weight: bold;
`;

const Content = styled.div`
  padding: 20px;
  padding-top: 30px;
  color: #333;
`;

const SingleComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const CommentRightBox = styled.div`
  background: #f2f3f8;
  border-radius: 5px;
  padding: 10px;
  & > h5 {
    margin: 0;
  }
  & > p {
    margin: 0;
  }
`;

const TimeCaption = styled.div`
  text-align: right;
  font-size: 10px;
  color: #666;
  padding-top: 5px;
`;
