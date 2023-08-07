import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

function CalendarDefault() {
  return (
    <div>
        <Calendar next2Label={null} prev2Label={null} />
    </div>
  );
}

export default CalendarDefault;
