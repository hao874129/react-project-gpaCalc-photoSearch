import React, { useEffect } from "react";

const GradeAdd = (props) => {
  const { ind, gradeObject, graderArray,
    changeCategory, changeNumber, changeCredit, changeSelect, changeSelectColor,
    trashButtonHandler } = props

  useEffect(() => {
    const select = document.querySelectorAll('.select')
    changeSelectColor(select[ind])
  }, [gradeObject.grade, changeSelectColor, ind])

  return (
    <form className="grader">
      <div>
        <input type="text" placeholder="class category"
          onChange={changeCategory}
          className="class-type" list="opt" value={gradeObject.category} />
        <input type="text" placeholder="class number"
          onChange={changeNumber}
          className="class-number" value={gradeObject.number} />
        <input type="number" placeholder="credit"
          onChange={changeCredit}
          min="0" max="6" className="class-credit" value={gradeObject.credit} />
        <select name="select" className="select"
          onChange={changeSelect}
          value={gradeObject.grade}>
          {graderArray.map((el, ind) => (<option value={el} key={ind}>{el}</option>))}
        </select>
        <button className="trash-button" onClick={trashButtonHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </form>
  )
}

export default GradeAdd