import {Fragment} from 'react';

import Button from '../components/ui/button';
import ErrorAlert from '../components/ui/error-alert';

export default function Custom404() {
  return (
    <Fragment>
      <ErrorAlert>404 - Pages Not Found!</ErrorAlert>;
      <div className='center'>
        <Button link='/events'>Showw All Events</Button>
      </div>
    </Fragment>
  );
}
