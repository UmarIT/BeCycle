import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {ExpandableCalendar, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import testIDs from './testIDs';
import {agendaItems, getMarkedDates} from './agendaItems';
import {getTheme, lightThemeColor} from './theme';

const leftArrowIcon = require('./previous.png');
const rightArrowIcon = require('./next.png');
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
  onExpand?:()=>void;
}

const Calender = (props: Props) => {
  const {weekView,onExpand} = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
    >
      {weekView ? (
        <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={marked.current}/>
      ) : (
        <ExpandableCalendar
          testID={testIDs.expandableCalendar.CONTAINER}
          // hideKnob
          
          theme={theme.current}
          onCalendarToggled={()=>onExpand()}
          
          firstDay={1}
          markedDates={marked.current}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
        />
      )}
    </CalendarProvider>
  );
};

export default Calender;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  }
});