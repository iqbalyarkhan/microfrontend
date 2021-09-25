import React from 'react';

const CalendarCard = React.lazy(() =>  import('calendar_card/CalendarCard'));

const App = () => {
    const  calendarCards = Array.from(Array(24).keys());
    return (
        <main>
            <h1>This is the calendar-container app</h1>
            <div>
                {calendarCards.map((day) => (
                    <React.Suspense
                        fallback={<p>Loading content from calendar-card...</p>}
                        key={day}
                    >
                        <CalendarCard  dayOfDecember={day + 1}  />
                    </React.Suspense>
                ))}
            </div>
        </main>
    );
};
export default App;