import styled from "styled-components";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import DUMMY_CAMP_CARD from "../../dummyData/dummyCampCard";
const Navbar = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    slidesToShow: 5,
    vertical: true,
    scroll: true,
    speed: 500,
  };

  return (
    <Wrapper {...settings}>
      {DUMMY_CAMP_CARD.map((item) => {
        const id = item.id;

        return (
          <Card key={id} type={"nav"}>
            <Link className="link" to={`/${id}`}>
              <img src="assets/img/channel_talk_btn.png" />
              <p>{item.name}</p>
            </Link>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled(Slider)`
  min-height: 600px;
  margin-top: 30px;
  height: 600px;
  width: 200px;
  display: flex;
  flex-direction: column;

  background: #ecf0f1;
  position: relative;
  .slick-arrow {
    background: #9e9e9e61;

    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 30px;
    text-align: center;
  }

  .slick-prev {
    top: 550px;
    left: 30px;

    &::before {
      opaicty: 0; // 기존에 숨어있던 화살표 버튼이 보이게
      color: red; // 버튼 색은 검은색으로
    }
  }
  .slick-next {
    top: 550px;
    right: 30px;

    &::before {
      opacity: 1;
      color: red;
    }
  }
  img {
    width: 50px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;
