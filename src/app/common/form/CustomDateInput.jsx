import React from "react";
import { useField, useFormikContext } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const CustomDateInput = ({ label, ...props }) => {
  const [meta, field] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        {...props}
        {...field}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && !!meta.error ? (
        <Label basic color='red' content={meta.error} />
      ) : null}
    </FormField>
  );
};

export default CustomDateInput;
