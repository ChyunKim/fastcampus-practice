import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/form-control';
import { Box, Heading } from '@chakra-ui/react';

interface FormCustom extends FormControlProps {
  helperText?: string | JSX.Element;
  errorText?: string | JSX.Element;
  successText?: string | JSX.Element;
  label?: string;
  children: JSX.Element | JSX.Element[];

  labelProps?: FormLabelProps;
  successTextProps?: HelpTextProps;
  helperTextProps?: HelpTextProps;
  errorTextProps?: FormErrorMessageProps;
}
const FormCustom = ({
  //
  helperText,
  errorText,
  successText,
  children,
  label,

  labelProps,
  successTextProps,
  helperTextProps,
  errorTextProps,

  ...basisProps
}: FormCustom) => {
  const isShowErrorText = !!errorText;

  return (
    <FormControl isInvalid={!!errorText} {...basisProps}>
      {!!label && (
        <FormLabel mb="10px" {...labelProps}>
          <Heading variant="titlesmall" color="App.primary.500">
            {label}
          </Heading>
        </FormLabel>
      )}
      {children}
      {isShowErrorText && (
        <FormErrorMessage
          fontSize="12px"
          color="App.warning"
          {...errorTextProps}
        >
          {errorText}
        </FormErrorMessage>
      )}
      <Box mb="50px"></Box>
    </FormControl>
  );
};

export default FormCustom;
