/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { makeSelectError, makeSelectLoading, makeSelectRepos } from "containers/App/selectors";
import H2 from "components/H2";
import AtPrefix from "./AtPrefix";
import CenteredSection from "./CenteredSection";
import Form from "./Form";
import Input from "./Input";
import Section from "./Section";
import messages from "./messages";
import { Button,DatePickerView } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
/* eslint-disable react/prefer-stateless-function */
export default class ViewLogin extends React.PureComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.user_name && this.props.user_name.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Login222 Page</title>
        </Helmet>
        <Button children={'11111'} onClick={()=>{alert('1111')}}/>

        <div >
          <Button children={'22222'} onClick={()=>{alert('22222')}}/>
          <DatePickerView/>
        </div>
        <div onClick={() => {
          alert('aaa');
          this.props.onPress_login
        }}>
          <Button children={'3333'} onClick={()=>{alert('3333')}}/>

          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onPress_login}>
              <label htmlFor="user_name">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="user_name"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.user_name}
                  onChange={this.props.onChange_user_name}
                />
                <Input
                  id="password"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.password}
                  onChange={this.props.onChange_password}
                />
              </label>
            </Form>
          </Section>
        </div>
      </article>
    );
  }
}

ViewLogin.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  repos : PropTypes.oneOfType([ PropTypes.array, PropTypes.bool ]),
  onPress_login : PropTypes.func,
  user_name : PropTypes.string,
  onChange_user_name : PropTypes.func,
  onChange_password : PropTypes.func,

};

