import {Fragment} from 'react';
import {useRouter} from 'next/router';

import {getFilteredEvents} from '../../dummy-data';
import Button from '../../components/ui/button';
import EventList from '../../components/events/event-list';
import ErrorAlert from '../../components/ui/error-alert';
import ResultsTitle from '../../components/events/results-title';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>;
        <div className='center'>
          <Button link='/events'>Showw All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No Events found for the chosen filter!</ErrorAlert>
        <div className='center'>
          <Button link='/events'>Showw All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
