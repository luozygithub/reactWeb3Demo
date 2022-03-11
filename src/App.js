import {Routes, Route, Link} from "react-router-dom";
import DaoHome from "./view/daoHome";
import MineDaos from "./view/MineDaos";
import RainbowReader from "./component/rainbow-header"
import RainbowFooter from "./component/rainbow-footer";
import GlobalStyle from "./style/style";
import React from "react";
import { ConnectProvider} from "./api/contracts";

function App() {
    return (
        <ConnectProvider>
            <GlobalStyle/>
            <div className="App" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <RainbowReader/>
                <Routes>
                    <Route path="/" element={<DaoHome/>}/>
                    <Route path="/MineDaos" element={<MineDaos/>}/>
                </Routes>
                <RainbowFooter/>
            </div>

        </ConnectProvider>
    )
}

export default App;
