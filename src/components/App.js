import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Favorites from './Favorites';
import SearchHistory from './SearchHistory';
import VideoDetailPage from './VideoDetailPage';
import { GlobalStyle, SidebarContainer, LogoIcon, LogoWords } from './App.styles';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import logoWords from '../images/reactube-logo-words.svg';
import logoIcon from '../images/reactube-logo-camera.svg';

const App = () =>
    <Router>
        <GlobalStyle />
        <MyGrid fluid>
            <MyRow xs={12}>
                <MyCol xs={12} sm={3} lg={2} className="sidebarCol">
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
                <MyCol xs={12} sm={9} lg={10}>
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
    ;

export default App;