/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "containers/Base/PrivateRoute";
import LoginPage from "containers/LoginPage/Loadable";
import MyPage from "containers/MyPage/Loadable";
import MyBillPage from "containers/MyPage/Bill/Loadable";
import BillAddPage from "containers/MyPage/Bill/BillAdd/Loadable";
import BillAddAddProductPage from "containers/MyPage/Bill/BillAdd/AddProduct/Loadable";
import BillDetailPage from "containers/MyPage/Bill/BillDetail/Loadable";

import MyProviderPage from "containers/MyPage/Provider/Loadable";
import ProviderAddPage from "containers/MyPage/Provider/ProviderAdd/Loadable";
import ProviderDetailPage from "containers/MyPage/Provider/ProviderDetail/Loadable";

import MyCustomerPage from "containers/MyPage/Customer/Loadable";
import CustomerAddPage from "containers/MyPage/Customer/CustomerAdd/Loadable";
import CustomerDetailPage from "containers/MyPage/Customer/CustomerDetail/Loadable";


import MyProductBatchPage from "containers/MyPage/Product/Batch/Loadable";
import ProductBatchAddPage from "containers/MyPage/Product/Batch/BatchAdd/Loadable";
import ProductBatchDetailPage from "containers/MyPage/Product/Batch/BatchDetail/Loadable";

import MyProductPage from "containers/MyPage/Product/Loadable";
import ProductAddPage from "containers/MyPage/Product/ProductAdd/Loadable";
import ProductDetailPage from "containers/MyPage/Product/ProductDetail/Loadable";
import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Header from "components/Header";
import Footer from "components/Footer";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - 进销存"
        defaultTitle="进销存"
      >
        <meta name="description" content="A React.js Boilerplate application"/>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/my" component={MyPage}/>
        <PrivateRoute path="/home" component={HomePage}/>
        <Route path="/features" component={FeaturePage}/>
        <Route path="/base_info" component={FeaturePage}/>
        <Route path="/bill" component={MyBillPage}/>
        <Route path="/bill__add" component={BillAddPage}/>
        <Route path="/bill__add__add_product" component={BillAddAddProductPage}/>
        <Route path="/bill__detail" component={BillDetailPage}/>

        <Route path="/provider" component={MyProviderPage}/>
        <Route path="/provider__add" component={ProviderAddPage}/>
        <Route path="/provider__detail" component={ProviderDetailPage}/>

        <Route path="/customer" component={MyCustomerPage}/>
        <Route path="/customer__add" component={CustomerAddPage}/>
        <Route path="/customer__detail" component={CustomerDetailPage}/>

        <Route path="/product" component={MyProductPage}/>
        <Route path="/product__add" component={ProductAddPage}/>
        <Route path="/product__detail" component={ProductDetailPage}/>

        <Route path="/product__batch" component={MyProductBatchPage}/>
        <Route path="/product__batch__add" component={ProductBatchAddPage}/>
        <Route path="/product__batch__detail" component={ProductBatchDetailPage}/>


        <Route path="" component={NotFoundPage}/>
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
