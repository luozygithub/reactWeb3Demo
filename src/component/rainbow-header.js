import styled from 'styled-components';
import headerBg from "../imgs/header_bg.png"
import logo from "../imgs/RainbowDAOLogo.png"
import { useNavigate } from 'react-router-dom';
import ConnectWallet from "./connect-wallet";
function RainbowHeader() {
    const HeaderInfo = styled.div`
      background: url(${headerBg});
      height: 230px;
      background-size: 100% 100%;
      color: #fff;
      font-weight: bold;
      position: relative;
      width: 100%;
      overflow: hidden;
      .navbar-box-bg {
        width: 1920px;
        height: 60px;
        opacity: 0.1;
        background: #ffffff;
        position: absolute;
      }

      .nav-box {
        display: flex;
        height: 60px;
        justify-content: space-between;
        width: 1200px;
        align-items: center;
        margin: 0 auto;
        .logo {
          width: 160px;
          height: 26px;
        }

        ul {
          display: flex;
          height: 50px;

          li {
            height: 100%;
            line-height: 50px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            margin: 0 30px;
            .w-font {
              position: relative;
              top: 0;
              left: 0;
              transition: 0.2s;
            }

            .re-active {
              position: absolute;
              top: 40px;
              left: 0;
              transition: 0.2s;
              background-image: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            &:hover {
              .re-active {
                top: 0 !important;
              }

              .w-font {
                top: -40px;
              }
            }
          }

        }
      }

    `
    const navigate = useNavigate()

    const navTo = path=>{
        navigate(path,{})
    }
    return (

        <HeaderInfo>
            <div className="navbar-box-bg">
            </div>
            <div className="nav-box">
                <img className="logo" src={logo} alt=""/>
                <ul>
                    <li onClick={()=>navTo("/")}>
                        <span className="w-font" >DAO HOME</span>
                        <span className="re-active" >DAO HOME</span>
                    </li>
                    <li onClick={()=>navTo("/MineDaos")}>
                        <span className="w-font" >MINE DAO</span>
                        <span className="re-active">MINE DAO</span>
                    </li>
                    <li>
                        <ConnectWallet/>
                    </li>
                </ul>
            </div>

        </HeaderInfo>
    )
}
export default (RainbowHeader)
