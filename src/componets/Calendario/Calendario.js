import React  from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import '../../styles/comprando.scss'

const Calendario = ({numberOfMonths, getInitialState,setGetInitialState}) => {

  numberOfMonths=1
  
  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, getInitialState);
    setGetInitialState(range)
  };
  const handleResetClick = () => {
    setGetInitialState({
      from: undefined,
      to: undefined
    });
  };
  
  const { from, to } = getInitialState;
  const modifiers = { start: from, end: to };

  console.log(getInitialState)
  
  return (
    <div className="calendar-info-container">
      <div className='text-calendario'>
        <h3 className='p-text'>Selecciona la fecha de publicación:</h3>
      <p className='p-text'>
        {!from && !to && "Fecha de inicio"}
        {from && !to && "Fecha de finalización"}
        {from &&
          to &&
          `Del día: ${from.toLocaleDateString()} al día:
                ${to.toLocaleDateString()}`}{" "}
        {from && to && (
          <button className="link" onClick={handleResetClick}>
            Borrar
          </button>
        )}
      </p>
      <div className='flexi'>
        <div className='circle'></div><p className='p-text'>Fechas NO disponibles</p> 
      </div>
      <div className='flexi'>
        <div className='blue-circle'></div><p className='p-text'>Fechas disponibles</p>
      </div>
      
      </div>
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
        disabledDays={[
          {
            after: new Date(2020, 8, 20),
            before: new Date(2020, 8, 25),
          },
          {
            after: new Date(2020, 8, 11),
            before: new Date(2020, 8, 14),
          },
          {
            after: new Date(2020, 9, 1),
            before: new Date(2020, 9, 20),
          },
        ]}
      />
      <Helmet>
        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
      </Helmet>
    </div>
  );
};
export default Calendario;