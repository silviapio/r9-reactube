import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Favorites from './Favorites';
import SearchHistory from './SearchHistory';
import VideoDetailPage from './VideoDetailPage';
import { GlobalStyle } from './App.styles';
import { MyGrid, MyRow, MyCol } from './Home.styles';

const App = () =>
    <Router>
        <GlobalStyle />
        <MyGrid fluid>
            <MyRow xs={12}>
                <MyCol xs={12} lg={2}>
                    <Menu />
                </MyCol>
                <MyCol xs={12} lg={10}>
                    <Switch>
                        <Route path={"/"} exact component={Home}></Route>
                        {/*<Route path={"/:id"} children={<VideoDetailPage/>}> </Route>*/}
                        <Route path={"/videoDetail"} component={VideoDetailPage}></Route>
                        <Route path={"/favorites"} component={Favorites}></Route>
                        <Route path={"/history"} component={SearchHistory}></Route>
                    </Switch>
                </MyCol>
            </MyRow>
        </MyGrid>
    </Router>
    ;

export default App;