import React from 'react'

const Status = ({toDoList}) => {
    let countList = toDoList ? toDoList.length : 0;
  return (
    <div className='status'>
        <p className='notify'>
            {countList === 0 
                ? 'All Finished! Relax!' 
                : `You have ${countList} task(s) left in your list`}
        </p>
    </div>
  )
}

export default Status;