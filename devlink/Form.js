import React from "react";
import * as _Builtin from "./_Builtin";

export function Form({ as: _Component = _Builtin.FormWrapper, slot, slot2 }) {
  return (
    <_Component>
      <_Builtin.FormForm
        name="email-form"
        data-name="Email Form"
        method="get"
        id="email-form"
      >
        <_Builtin.FormBlockLabel htmlFor="name-2">
          {"Name"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          name="name-2"
          maxLength={256}
          data-name="Name 2"
          disabled={false}
          type="text"
          required={false}
          autoFocus={false}
          id="name-2"
        />
        <_Builtin.FormBlockLabel htmlFor="email-2">
          {"Email Address"}
        </_Builtin.FormBlockLabel>
        <_Builtin.FormTextInput
          name="email-2"
          maxLength={256}
          data-name="Email 2"
          disabled={false}
          type="email"
          required={true}
          autoFocus={false}
          id="email-2"
        />
        <_Builtin.FormButton
          type="submit"
          value="Submit"
          data-wait="Please wait..."
        />
        <_Builtin.FormTextInput
          name="field-2"
          maxLength={256}
          data-name="Field 2"
          placeholder="Example Text"
          disabled={false}
          type="text"
          required={true}
          autoFocus={false}
          id="field-2"
        />
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage>
        <_Builtin.Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
