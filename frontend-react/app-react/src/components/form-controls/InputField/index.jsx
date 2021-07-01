import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

export default function InputField(props) {
  const { name, label, form } = props;
  const { formState:{ errors } } = form;
  const hasError = errors[name];

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <TextField
            margin="normal"
            variant="outlined"
            label={label}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
            {...field}
          />
        )}
      />
    </div>
  );
}
