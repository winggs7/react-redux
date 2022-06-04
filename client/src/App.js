import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

    const user = useSelector(state => state.user.userInfo);
    console.log(user)

    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    {user ? <Home /> : <Redirect to="/login" />}
                    {/* <Home /> */}
                </Route>
                <Route path="/login" >
                    {!user ? <Login /> : <Redirect to="/" />}
                    {/* <Login /> */}
                </Route>
                <Route path="/register" >
                    {!user ? <Register /> : <Redirect to="/" />}
                    {/* <Register /> */}
                </Route>
                {user && (
                    <>
                        <Route path="/profile" exact >
                            <Profile />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default App;
