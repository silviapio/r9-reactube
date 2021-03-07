import { BrowserRouter as Router, Route, Switch, Link } from'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Favorites from './Favorites';
import SearchHistory from './SearchHistory';
import VideoDetailPage from './VideoDetailPage';
import { GlobalStyle, SidebarContainer } from './App.styles';
import { MyGrid, MyRow, MyCol } from './Home.styles';
import { FaYoutube } from 'react-icons/fa'

const App = () =>
    <Router>
        <GlobalStyle />
        <MyGrid fluid>
            <MyRow xs={12}>
                <MyCol xs={12} sm={3} lg={2} className="sidebarCol">
                    <SidebarContainer>
                    <Link to='/'>
                        <header>
                            <div>
                            <FaYoutube /> 
                            <h4>Reactube</h4>
                            </div>
                        </header>
                    </Link>
                        <Menu />
                    </SidebarContainer>
                </MyCol>
                <MyCol xs={12} sm={9} lg={10}>
                    <Switch>
                        <Route path={"/"} exact component={Home}></Route>
                        {/*<Route path={"/:id"} children={<VideoDetailPage/>}> </Route>*/}
                        <Route path={"/videoDetail/:id"} component={VideoDetailPage}></Route>
                        <Route path={"/favorites"} component={Favorites}></Route>
                        <Route path={"/history"} component={SearchHistory}></Route>
                    </Switch>
                </MyCol>
            </MyRow>
        </MyGrid>
    </Router>
;

export default App;