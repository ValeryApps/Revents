import { Form, Formik } from "formik";
import React from "react";
import ModalWrapper from "../../common/modals/ModalWrapper";
import * as Yup from "yup";
import CustomInputField from "../../common/form/CustomInputField";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../common/modals/modalReducer";
import { signIn_user } from "./authAction";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper header='Sign in Re-vent' size='mini'>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmiting }) => {
          dispatch(signIn_user(values));
          dispatch(closeModal());
          setSubmiting(false);
        }}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form translate='' className='ui form'>
            <CustomInputField name='email' placeholder='email' />
            <CustomInputField
              name='password'
              placeholder='password'
              type='password'
            />
            <Button
              loading={isSubmitting}
              disabled={!dirty || !isValid || isSubmitting}
              type='submit'
              content='Sign in'
              color='teal'
            />
            <Button
              content='Cancel'
              basic
              onClick={() => dispatch(closeModal())}
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
