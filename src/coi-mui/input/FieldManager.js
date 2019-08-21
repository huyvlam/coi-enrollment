/* @flow */

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FieldManagerProps from './metadata/field-manager-props';
import DictInputVal from 'coi-common-ui/core/coi-dict-input-validation';

import './stylesheet/field-manager.scss';

let INPUT_VALIDATION = null;

function FieldManager({
  onBlur, onChange, onFocus, onClick,
  name, type, label, description, descriptionList = [], value, variant, color,
  disabled, pristine, valid, validation = {}, InputValidation,
  ...rest
} = FieldManagerProps) {
  const { required } = validation;

  /*
   * @desc: FieldManager maintains an instance of InputValidation for optimized performance
   *        However, there are case where you need to make custom revision to InputValidation.
   *        In such case, you can supply your own InputValidation and override FieldManager instance
   */
  INPUT_VALIDATION = INPUT_VALIDATION ? INPUT_VALIDATION : new DictInputVal();
  const VALIDATION = InputValidation || INPUT_VALIDATION;

  /*
   * @desc: optional callback for blur event
   * @output: return object argument with field attributes: value, valid
   */
  const handleBlur = (event) => {
    event.preventDefault();
    if (!onBlur) return;
    onBlur({ name, value: event.target.value });
  };

  /*
   * @desc: required callback for change event
   * @output: return object argument with field attributes: value, valid
   */
  const handleChange = (event) => {
    event.preventDefault();
    if (!onChange) return;

    const validateField = VALIDATION.validateInput({
      required, validation,
      pristine: false, value: event.target.value
    });
    onChange({ ...validateField, name, value: event.target.value });
  };

  /*
   * @desc: required callback for focus event
   * @output: return object argument with field attribute: pristine
   */
  const handleFocus = (event) => {
    event.preventDefault();
    if (!onFocus) return;
    onFocus({ name, value: event.target.value });
  };

  /*
   * @desc: check and validate field on pressing Enter key
   */
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      handleChange(event);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  /*
   * @desc: generate a unique id to make label and helperText accessible
   */
  const generateId = (prefix = type, postfix = name) => {
    return `${prefix}-${postfix}`;
  };

  const renderDescription = () => {
    return (
      <React.Fragment>
        <Box component="span">{description}</Box>
        {descriptionList.map((item, index) => (
          <Box
            component="span"
            key={generateId('helper-text', index)}
            className={`password-helper ${item.valid ? 'valid-helper' : ''}`}
          >{item.description}</Box>
        ))}
      </React.Fragment>
    );
  }

  switch(type) {
    case 'button':
    case 'submit':
    case 'reset':
      return (
        <Button
          type={type}
          variant={variant}
          color={color}
          disabled={disabled}
          onClick={handleClick}
          {...rest}
        >{label}</Button>
      );

    default:
      return (
        <TextField
          fullWidth
          id={generateId()}
          margin="normal"
          type={type}
          label={label}
          helperText={renderDescription()}
          required={required}
          error={!valid}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          {...rest}
        />
      );
  }
}

export default FieldManager;
