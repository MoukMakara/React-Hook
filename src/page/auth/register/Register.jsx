import { Label } from "flowbite-react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../../../lib/constant";
// import notify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// initialValues
const initialValues = {
  email: "",
  first_name: "Mouk",
  last_name: "Makara",
  password1: "1234!@#$",
  password2: "1234!@#$",
};

// validationSchema
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  password1: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  password2: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password1"), null], "Passwords must match"),
});

export default function Register() {
  // notify
  const notify = (message) => toast.error(message);

  const handleRegister = async (values) => {
    try {
      const response = await fetch(`${BASE_URL}user/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      //   check if the response indicates an error

      if (response.status === 400 && data.email) {
        notify("A user is already registered with this e-mail address.");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold text-blue-800">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {/* Form */}
        <Form className="max-w-screen-xl w-1/2 bg-blue-300 rounded-md">
          <div className="flex flex-col p-6">
            {/* Email */}
            <Label htmlFor="email">Enter Email</Label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />

            {/* First Name */}
            <Label htmlFor="first_name">First Name</Label>
            <Field
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              className="rounded-md"
            />
            <ErrorMessage
              name="first_name"
              component="div"
              className="text-red-500"
            />

            {/* Last Name */}
            <Label htmlFor="last_name">Last Name</Label>
            <Field
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              className="rounded-md"
            />
            <ErrorMessage
              name="last_name"
              component="div"
              className="text-red-500"
            />

            {/* Password */}
            <Label htmlFor="password1">Password</Label>
            <Field
              type="password"
              id="password1"
              name="password1"
              placeholder="Enter your password"
              className="rounded-md"
            />
            <ErrorMessage
              name="password1"
              component="div"
              className="text-red-500"
            />

            {/* Confirm Password */}
            <Label htmlFor="password2">Confirm Password</Label>
            <Field
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm your password"
              className="rounded-md"
            />
            <ErrorMessage
              name="password2"
              component="div"
              className="text-red-500"
            />

            {/* Register Button */}
            <div className="flex justify-end items-end">
              <button
                type="submit"
                className="bg-blue-600 py-3 px-8 mt-4 rounded-xl text-white"
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>

      {/* notify */}
      <ToastContainer />
    </section>
  );
}
