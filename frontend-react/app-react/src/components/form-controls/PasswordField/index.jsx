import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import { FormHelperText, OutlinedInput } from "@material-ui/core";
import { Controller } from "react-hook-form";

export default function PasswordField(props) {
  const { form, label, name } = props;

  const [showPassword, setShowPassword] = useState(false);
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      <FormControl  error={!!hasError} fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              id={name}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
              {...field}
            />
          )}
        />
        <FormHelperText >{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}
