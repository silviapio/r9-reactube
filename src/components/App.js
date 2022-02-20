import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Menu from "./composed/Menu";
import Home from "./screens/Home";
import Favorites from "./screens/Favorites";
import SearchHistory from "./screens/SearchHistory";
import VideoDetailPage from "./screens/VideoDetailPage";
import { GlobalStyle, SidebarContainer, LogoIcon, LogoWords } from "./App.styles";
import { MyGrid, MyRow, MyCol } from "./screens/Home.styles";
import logoWords from "../images/reactube.svg";
import logoIcon from "../images/reactube-logo-camera.svg";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MyGrid fluid>
        <MyRow xs={12}>
          <MyCol xs={12} md={3} lg={2} className="sidebarCol">
            <SidebarContainer>
              <Link to="/">
                <header>
                  <div>
                    <LogoIcon src={logoIcon} alt="videocamera icon" className="logo__icon" />
                    <LogoWords src={logoWords} alt="reactube" className="logo__words" />
                  </div>
                </header>
              </Link>
              <Menu />
            </SidebarContainer>
          </MyCol>
          <MyCol xs={12} md={9} lg={10}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/videoDetail/:id" component={VideoDetailPage} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/history" component={SearchHistory} />
            </Switch>
          </MyCol>
        </MyRow>
      </MyGrid>
    </Router>
  );
}
export default App;
