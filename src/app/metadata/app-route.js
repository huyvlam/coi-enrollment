import routerPath from 'coi-common-ui/core/coi-path-router';
import ActivateAccountLayout from 'ACTIVATE-ACCOUNT/ActivateAccountLayout';
import CreateAccountLayout from 'CREATE-ACCOUNT/CreateAccountLayout';
import CompleteAccountLayout from 'COMPLETE-ACCOUNT/CompleteAccountLayout';

const clientPath = routerPath('client', {client: 'enrollment-ui'});

const appRoutes = [
  {
    path: `${clientPath}/verify-mail/:mailToken`,
    layout: ActivateAccountLayout
  },
  {
    path: clientPath,
    layout: CreateAccountLayout
  },
	{
    path: `${clientPath}/additional`,
    layout: CompleteAccountLayout
  }
]

export default appRoutes;
