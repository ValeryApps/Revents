import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

const CustomSelectInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => {
          helpers.setValue(d.value);
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
        {...props}
      />

      {meta.touched && !!meta.error ? (
        <Label basic color='red' content={meta.error} />
      ) : null}
    </FormField>
  );
};

export default CustomSelectInput;
