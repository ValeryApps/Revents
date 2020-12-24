import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <textarea {...field} {...props}></textarea>
      {meta.touched && !!meta.error ? (
        <Label basic color='red' content={meta.error} />
      ) : null}
    </FormField>
  );
};
