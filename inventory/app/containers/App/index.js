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

import PublicRoute from "containers/Base/PublicRoute";
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
        <PublicRoute exact path="/" component={MyBillPage}/>
        <PublicRoute path={`/${PATH.PATH__login}`} component={LoginPage}/>
        <PublicRoute path={`/${PATH.PATH__my}`} component={MyPage}/>
        <PrivateRoute path={`/${PATH.PATH__home}`} component={HomePage}/>
        <PublicRoute path="/features" component={FeaturePage}/>
        <PublicRoute path={`/${PATH.PATH__base_info}`} component={FeaturePage}/>
        <PublicRoute path={`/${PATH.PATH__bill}`} component={MyBillPage}/>
        <PublicRoute path={`/${PATH.PATH__bill__add}`} component={BillAddPage}/>
        <PublicRoute path={`/${PATH.PATH__bill__add__add_product}`} component={BillAddAddProductPage}/>
        <PublicRoute path={`/${PATH.PATH__bill__detail}`} component={BillDetailPage}/>

        <PublicRoute path={`/${PATH.PATH__provider__select}`} component={MyProviderPage}/>
        <PublicRoute path={`/${PATH.PATH__provider}`} component={MyProviderPage}/>
        <PublicRoute path={`/${PATH.PATH__provider__add}`} component={ProviderAddPage}/>
        <PublicRoute path={`/${PATH.PATH__provider__detail}`} component={ProviderDetailPage}/>

        <PublicRoute path={`/${PATH.PATH__customer__select}`} component={MyCustomerPage}/>
        <PublicRoute path={`/${PATH.PATH__customer}`} component={MyCustomerPage}/>
        <PublicRoute path={`/${PATH.PATH__customer__add}`} component={CustomerAddPage}/>
        <PublicRoute path={`/${PATH.PATH__customer__detail}`} component={CustomerDetailPage}/>

        <PublicRoute path={`/${PATH.PATH__product}`} component={MyProductPage}/>
        <PublicRoute path={`/${PATH.PATH__product__add}`} component={ProductAddPage}/>
        <PublicRoute path={`/${PATH.PATH__product__detail}`} component={ProductDetailPage}/>

        <PublicRoute path={`/${PATH.PATH__product__batch}`} component={MyProductBatchPage}/>
        <PublicRoute path={`/${PATH.PATH__product__batch__add}`} component={ProductBatchAddPage}/>
        <PublicRoute path={`/${PATH.PATH__product__batch__detail}`} component={ProductBatchDetailPage}/>


        <PublicRoute path="" component={NotFoundPage}/>
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
