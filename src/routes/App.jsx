import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '../containers/Layout';// Container Principal
import '../styles/global.scss'; // Estilo Central

import Login from "../pages/Login";
import RecoveryPassword from '../pages/RecoveryPassword';// Pagina cambiar cuenta
import SendEmail from '../pages/SendEmail';// Seender ceunta
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import Orders from '../pages/Orders';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/recovery-password' element={<RecoveryPassword />} />
                    <Route exact path='/send-mail' element={<SendEmail />} />
                    <Route exact path='/sign-up' element={<CreateAccount />}/>
                    <Route exact path='/my-account' element={<MyAccount />} />
                    <Route exact path='/my-order' element={<MyOrder />} />
                    <Route exact path='/orders' element={<Orders />} />
                    
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
