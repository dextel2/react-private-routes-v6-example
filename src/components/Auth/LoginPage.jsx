import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actions from "../../store/actions/auth/auth";

export function LoginPage() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(actions.auth(values.email, values.password));
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />

          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
