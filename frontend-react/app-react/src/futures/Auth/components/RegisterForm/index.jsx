import React from "react";
import { useForm } from "react-hook-form";
import InputField from "components/form-controls/InputField";
import { LockOutlined } from "@material-ui/icons";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PasswordField from "components/form-controls/PasswordField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: "auto",
    background: theme.palette.secondary.main,
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(3, 0, 3, 0),
  },
  submit: {
    padding: theme.spacing(2, 0, 2, 0),
    margin: "auto",
  },
}));

export default function RegisterForm(props) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid empty email"),
    fullname: yup
      .string()
      .required("Please enter your fullname")
      .test("check length", "Please enter a least two words", (value) => {
        return value.split(" ").length >= 2;
      }),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "please enter at least 8 character"),
    repassword: yup
      .string()
      .required("Please retype your password")
      .oneOf([yup.ref("password")], "Password dose not match"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      repassword: "",
    },
    resolver: yupResolver(schema),
  });

  const frmSubmit = (values) => {
    const { onSubmit } = props;
    onSubmit(values);
    form.reset();
  };

  const classes = useStyles();

  return (
    <div>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create Account
      </Typography>

      <form onSubmit={form.handleSubmit(frmSubmit)}>
        <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Username" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="repassword" label="Retype Password" form={form} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Create
        </Button>
      </form>
    </div>
  );
}
