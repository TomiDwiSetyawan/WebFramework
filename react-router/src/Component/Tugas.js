import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tugas.css';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory,
    useLocation,
    Redirect
} from "react-router-dom";

export default function Tugas() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MARKETPLACE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/product">Product</Link></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoute path="/product">
                    <Product />
                </PrivateRoute>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2 className="h2">WELCOME TO MARKETPLACE</h2>
            <p className="p"> Marketplace adalah sebuah website atau aplikasi online yang memfasilitasi proses jual beli dari berbagai toko. Sebenarnya online marketplace memiliki konsep yang kurang lebih sama dengan pasar tradisional. Pada dasarnya, pemilik marketplace tidak bertanggung jawab atas barang-barang yang dijual karena tugas mereka adalah menyediakan tempat bagi para penjual yang ingin berjualan dan membantu mereka untuk bertemu pelanggan dan melakukan transaksi dengan lebih simpel dan mudah. Transaksinya sendiri memang diatur oleh marketplacenya. Kemudian setelah menerima pembayaran, penjual akan mengirim barang ke pembeli. Salah satu alasan mengapa marketplace terkenal adalah karena kemudahan dan kenyamanan dalam penggunaan. Banyak yang menggambarkan online marketplace seperti department store.</p>
        </div>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


function Product() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <AuthButton />
            <h2 className="categori">Categories</h2>
            <ul>
                <li>
                    <Link to={`${url}/Baju anak, Baju tidur`}>Child</Link>
                </li>
                <li>
                    <Link to={`${url}/Kaos Remaja, Gelang`}>Couple</Link>
                </li>
                <li>
                    <Link to={`${url}/Batik, Busana`}>Family</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3 className="categori">Please select a categories.</h3>
                </Route>
                <Route path={`${path}/:categoriId`}>
                    <Categori />
                </Route>
            </Switch>
        </div>
    );
}

function Categori() {
    let { categoriId } = useParams();
    return (
        <div>
            <h3>{categoriId}</h3>
        </div>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p className="logout">
            Welcome Marketplace!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
          </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div className="login">
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
