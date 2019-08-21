/* @flow */

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';

import Form from 'COI-MUI/input/Form';
import CAHeader from 'CREATE-ACCOUNT/component/CAHeader';
import CAHeadline from 'CREATE-ACCOUNT/component/CAHeadline';
import useFieldList from 'COI-MUI/input/hook/use-field-list';
import './stylesheet/create-account.scss';

import {
  emailField, firstNameField, lastNameField, companyField, newPasswordField, confirmPasswordField, emailOptinField, submitField
} from 'COI-MUI/input/metadata/input-field-shape';
import getContent from 'coi-common-ui/core/coi-content';

const { BUTTON_LABEL_REGISTER } = getContent('button label');
const { CONSENT_UPDATES_ABOUT_CISCO } = getContent('consent');
const {
  ENROLLMENT_STATEMENT_1, ENROLLMENT_STATEMENT_2, ENROLLMENT_POLICY, ENROLLMENT_TERMS_CONDITIONS
} = getContent('enrollment app');

function CreateAccountLayout() {
  const CAFieldList = useFieldList({
    fields: [
      { ...emailField, name: 'email' },
      { ...firstNameField, name: 'firstName' },
      { ...lastNameField, name: 'lastName' },
      { ...companyField, name: 'company' },
      { ...newPasswordField, name: 'newPassword', onChange: handleNewPassword },
      { ...confirmPasswordField, name: 'confirmPassword' },
      { ...submitField, label: BUTTON_LABEL_REGISTER, onClick: handleSubmit }
    ],
    // onListUpdate: listInfo => { CAFieldList.setField('submit', {disabled: !listInfo.completed}); }
  });

  function handleSubmit(event) {
    console.log('list', CAFieldList.getList());
  }

  /*
   * @desc: custom method to handle new password change
   *        + update the value of newPassword field
   *        + update the validation specs of confirmPassword field
   */
  function handleNewPassword(changeField) {
    const { value } = changeField;
    const { validation } = CAFieldList.getField('confirmPassword');
    const { name } = validation.specs.equal;

    CAFieldList.setField('newPassword', changeField);
    CAFieldList.setField('confirmPassword', {
      validation: {
        ...validation, specs: {
          equal: { name, value }
        }
      }
    });
    const { completed } = CAFieldList.getList();
    CAFieldList.setField('submit', { disabled: !completed });
  }

  return (
		<div className="create-account-layout">
      <Grid container justify="center" className="pos-relative">
        <CAHeader />
      </Grid>
			<Grid item xs={12} className="center-text">
        <CAHeadline />
      </Grid>
      <Form
        name="create-account"
        layout={<React.Fragment>
          <Grid item xs={12}>
            {CAFieldList.renderField('email')}
          </Grid>
          <Grid item xs={12}>
            {CAFieldList.renderField('firstName')}
          </Grid>
          <Grid item xs={12}>
            {CAFieldList.renderField('lastName')}
          </Grid>
          <Grid item xs={12}>
            {CAFieldList.renderField('company')}
          </Grid>
          <Grid item xs={12}>
            {CAFieldList.renderField('newPassword')}
          </Grid>
          <Grid item xs={12}>
            {CAFieldList.renderField('confirmPassword')}
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">{CONSENT_UPDATES_ABOUT_CISCO}</FormLabel>
              <RadioGroup aria-label={emailOptinField.label} name={emailOptinField.name}
                row={true} onChange={(event) => console.log('RadioGroup', event)}>
                <FormControlLabel value="yes" label="&nbsp;Yes" control={<Radio color="primary" />} />
                <FormControlLabel value="no" label="&nbsp;No" control={<Radio color="primary" />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} className="center-text">
            <p className="sm-font">{ENROLLMENT_STATEMENT_1} <Link>{ENROLLMENT_POLICY}</Link> {ENROLLMENT_STATEMENT_2} <Link>{ENROLLMENT_TERMS_CONDITIONS}</Link>.</p>
            {CAFieldList.renderField('submit')}
          </Grid>
        </React.Fragment>}
      />
		</div>
  );
}

export default CreateAccountLayout;
