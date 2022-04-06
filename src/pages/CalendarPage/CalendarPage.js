import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enCA from 'date-fns/locale/en-CA'
// import 'react-big-calendar/lib/sass/styles';
import React, {useState} from 'react'; 
import Datepicker from 'react-datepicker';
// import Navigation from '../../components/Navigation/Navigation';

const locales = { 
    'en-US': require("date-fns/locale/en-CA")
}

const localizer = dateFnsLocalizer ({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const tasks = { 
    title: "capstone",
    allDay: true, 
    start: new Date(2022,6,0),
    end: new Date(2022,6,0)
}

const CalendarPage = () => { 
    return (
        <>
            <section>
                <CalendarPage 
                localizer={localizer} 
                events={tasks}
                starAccessor='start'
                endAccessor='end'
                style={{ height: 500 }}
                 />
            </section>
        {/* <Navigation /> */}
        </>
    )
}

export default CalendarPage;
