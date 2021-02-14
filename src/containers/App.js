import React, { useEffect } from 'react';
import Actions from 'actions';
import Selectors from 'selectors';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/UI/Loading';
import CONFIG from 'utils/config';
import Button from 'components/UI/Button';
import TextInput from 'components/Form/TextInput';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';

const FormContainer = styled('div')(space, color);

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const { NODE_ENV } = process.env;

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(Selectors.getToken);
  const isLoading = useSelector(
    Selectors.createLoadingSelector([Actions.SIGN_IN_REQUEST])
  );

  useEffect(() => {
    console.log(
      `Environment: ${NODE_ENV}, Server Endpoint: ${CONFIG[NODE_ENV].SERVER_URL}`
    );
  }, []);

  const renderSignIn = () => (
    <FormContainer className="rounded" bg="#efefef" p={3}>
      <Formik
        onSubmit={({ email, password }) =>
          dispatch(Actions.signIn({ email, password }))
        }
        validationSchema={LoginSchema}
        initialValues={{
          email: 'test@gmail.com',
          password: 'password',
        }}
      >
        {({ handleSubmit }) => (
          <form>
            <Field
              label="Email"
              name="email"
              component={TextInput}
              type="email"
              placeholder="Email"
            />
            <Field
              label="Password"
              name="password"
              component={TextInput}
              type="password"
              placeholder="Password"
            />
            <Button label="Sign In" onClick={handleSubmit} />
          </form>
        )}
      </Formik>
    </FormContainer>
  );

  const renderDashboard = () => (
    <div>
      <div className="mb-3">Welcome Back!</div>
      <div>
        <Button label="Sign Out" onClick={() => dispatch(Actions.signOut())} />
      </div>
    </div>
  );

  return (
    <div className="container flex justify-center mx-auto h-screen items-center">
      <div className="py-20">
        {token === null && renderSignIn()}
        {token !== null && renderDashboard()}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
