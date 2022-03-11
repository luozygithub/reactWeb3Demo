import {createGlobalStyle} from "styled-components";
import bg from "../imgs/background.png"
const GlobalStyle = createGlobalStyle`
  div{
    box-sizing: border-box;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    font-size: 14px;
  }
  .daoContentBg{
    background: url(${bg});
    flex: 1;
  }
  .content-box {
    box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);

    border-radius: 20px;
    width: 1200px;
    margin: 10px auto;
    background: #fff;
    padding-bottom: 20px;
  }

  .box-nav {
    display: flex;
    padding: 0 20px;
    border-bottom: 1px solid #eee;

    .item {
      user-select: none;
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;

      &.active {
        color: #F96AAF;
        border-bottom: 1px solid #F96AAF;
      }
    }
  }
  .rainbow-button{
    background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border-radius: 6px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    color: #fff;
    font-size: 18px;
    position: relative;
    &:active{
      transform: translate(2px,2px);
    }
    &:after{
      content: '';
      position: absolute;
      top: 90%;
      width: 100%;
      height: 10px;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      filter: blur(10px);
    }
  }
`
export default GlobalStyle
