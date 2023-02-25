import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GradeAdd from "./components/GradeAdd";
import { useImmer } from 'use-immer'
import Animation from "./components/Animation";
import math from '../assets/images/math.jpg'

const GPACalc = () => {
  // 成績級距陣列
  const graderArray = useMemo(() => (
    ["", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
  ), [])

  // 課程名稱 datalist，供 class category 使用
  const categoryList = useMemo(() => (
    <datalist id="opt">
      <option value="ACCT">Accounting</option>
      <option value="ASL">American Sign Language</option>
      <option value="ANTH">Anthropology</option>
      <option value="ART">Art</option>
      <option value="BIOL">Biological Science</option>
      <option value="BUSM">Business Mgt</option>
      <option value="CRDEV">Career Development</option>
      <option value="CHEM">Chemistry</option>
      <option value="CHIN">Chinese</option>
      <option value="COMM">Communication Studies</option>
      <option value="CIS">Computer &amp; Information Sciences</option>
      <option value="CS">Computer Science</option>
      <option value="CRMJ">Criminal Justice</option>
      <option value="ECON">Economics</option>
      <option value="EDU">Education</option>
      <option value="ELED">Elementary Education</option>
      <option value="EMGT">Emergency Management</option>
      <option value="ENGL">English</option>
      <option value="EIL">English as Int'l Language</option>
      <option value="ENTR">Entrepreneurship</option>
      <option value="EXS">Exercise Sport Science</option>
      <option value="FILM">Film</option>
      <option value="FIN">Finance</option>
      <option value="FORS">Forensic Science</option>
      <option value="FREN">French</option>
      <option value="GEOG">Geography</option>
      <option value="HAWN">Hawaiian</option>
      <option value="HWST">Hawaiian Studies</option>
      <option value="HLTH">Health</option>
      <option value="HIST">History</option>
      <option value="HEC">Home Economics</option>
      <option value="HTM">Hospitality Tourism Mgt</option>
      <option value="HUM">Humanities</option>
      <option value="IS">Information System</option>
      <option value="IT">Information Technology</option>
      <option value="ICS">International Cultural Studies</option>
      <option value="IPB">Intercultural Peacebuilding</option>
      <option value="JPN">Japanese</option>
      <option value="LING">Linguistics</option>
      <option value="AMOR">Maori</option>
      <option value="MATH">Mathematics</option>
      <option value="MUSC">Music</option>
      <option value="OCEN">Oceanography</option>
      <option value="PAIS">Pacific Island Studies</option>
      <option value="PHSC">Physical Science</option>
      <option value="POSC">Political Science</option>
      <option value="PSYC">Psychology</option>
      <option value="PMGT">Public Management</option>
      <option value="REL">Religion</option>
      <option value="SCI">Science</option>
      <option value="SAMN">Samoan</option>
      <option value="SCED">Secondary Education</option>
      <option value="SOCW">Social Work</option>
      <option value="SPAN">Spanish</option>
      <option value="SPED">Special Education</option>
      <option value="STDEV">Student Development</option>
      <option value="TESOL">TESOL</option>
      <option value="THEA">Theatre</option>
      <option value="TONG">Tongan</option>
      <option value="WLNG">World Language</option>
    </datalist>
  ), [])

  const [gradeObjects, setGradeObjects] = useImmer([
    {
      category: '',
      number: '',
      credit: '',
      grade: ''
    }, {
      category: '',
      number: '',
      credit: '',
      grade: ''
    }, {
      category: '',
      number: '',
      credit: '',
      grade: ''
    }
  ])

  const [GPA, setGPA] = useState('0')

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });
  }, [])

  const changeCategory = useCallback((e, ind) => {
    setGradeObjects(draft => {
      const target = draft.find((el, ind2) => ind === ind2)
      target.category = e.target.value
    })
  }, [setGradeObjects])

  const changeNumber = useCallback((e, ind) => {
    setGradeObjects(draft => {
      const target = draft.find((el, ind2) => ind === ind2)
      target.number = e.target.value
    })
  }, [setGradeObjects])

  const changeCredit = useCallback((e, ind) => {
    setGradeObjects(draft => {
      const target = draft.find((el, ind2) => ind === ind2)
      target.credit = e.target.value
    })
  }, [setGradeObjects])

  // 當object的select改變時，更換select的背景顏色
  const changeSelectColor = useCallback(target => {
    // console.log(':::changeSelectColor');
    if (target.value === "A" || target.value === "A-") {
      target.style.backgroundColor = "lightgreen";
      target.style.color = "black";
    } else if (
      target.value === "B+" ||
      target.value === "B" ||
      target.value === "B-"
    ) {
      target.style.backgroundColor = "yellow";
      target.style.color = "black";
    } else if (
      target.value === "C+" ||
      target.value === "C" ||
      target.value === "C-"
    ) {
      target.style.backgroundColor = "orange";
      target.style.color = "black";
    } else if (
      target.value === "D+" ||
      target.value === "D" ||
      target.value === "D-"
    ) {
      target.style.backgroundColor = "red";
      target.style.color = "black";
    } else if (target.value === "F") {
      target.style.backgroundColor = "grey";
      target.style.color = "white";
    } else {
      target.style.backgroundColor = "white";
    }
  }, [])

  const changeSelect = useCallback((e, ind) => {
    setGradeObjects(draft => {
      const target = draft.find((el, ind2) => ind === ind2)
      target.grade = e.target.value
    })
  }, [setGradeObjects])

  // 刪除該行成績輸入欄位
  const trashButtonHandler = useCallback((e, ind) => {
    e.preventDefault();
    setGradeObjects(draft => {
      draft.splice(ind, 1)
    })

    // const form = e.target.parentElement.parentElement
    // form.style.animation = "scaleDown 0.5s ease forwards"
    // form.addEventListener("animationend", (e) => {
    //   console.log(gradeObjects[ind]);
    //   setGradeObjects(draft => {
    //     draft.splice(ind, 1)
    //   })
    // });
  }, [setGradeObjects])

  // 增加成績輸入欄位
  const addGradeObject = useCallback(() => {
    const newObject = {
      category: '',
      number: '',
      credit: '',
      grade: ''
    }
    setGradeObjects(gradeObjects.concat(newObject))
  }, [gradeObjects, setGradeObjects])

  // 將英文grade(select)轉為對應的分數
  const convertor = useCallback((grade) => {
    switch (grade) {
      case "A":
        return 4.0;
      case "A-":
        return 3.7;
      case "B+":
        return 3.4;
      case "B":
        return 3.0;
      case "B-":
        return 2.7;
      case "C+":
        return 2.4;
      case "C":
        return 2.0;
      case "C-":
        return 1.7;
      case "D+":
        return 1.4;
      case "D":
        return 1.0;
      case "D-":
        return 0.7;
      case "F":
        return 0.0;
      default:
        return 0;
    }
  }, [])

  // 計算GPA成績
  const calcGPA = useCallback(() => {
    let sum = 0; // GPA計算用分子
    let creditSum = 0; // GPA計算用分母

    gradeObjects.forEach(el => {
      if (!isNaN(el.credit)&&el.grade) {
        creditSum += (el.credit * 1)
        sum += (el.credit * 1) * convertor(el.grade)
      }
    })

    let result;
    if (creditSum === 0) {
      result = (0).toFixed(2);
    } else {
      result = (sum / creditSum).toFixed(2);
    }

    setGPA(result)

  }, [gradeObjects, convertor])

  // 處理排序
  const handleSorting = useCallback((direction) => {
    setGradeObjects(draft =>
      draft.sort((a, b) => {
        console.log(convertor(a.grade), convertor(b.grade));
        if (direction === 'ascending') {
          return convertor(a.grade) - convertor(b.grade)
        }
        else {
          return convertor(b.grade) - convertor(a.grade)
        }
      })
    )
  }, [setGradeObjects, convertor])

  useEffect(() => {
    console.log(gradeObjects);
    calcGPA()
    // updateAllSelectColor()
  }, [calcGPA, gradeObjects])



  return (
    <div style={{ padding: '5rem 0', minHeight: "100vh" ,backgroundColor: '#F2F0ED'}}>
      <section className="gpa-calc">
        <Animation imgSrc={math} imgName='math' />

        <Typography variant="h3" sx={{ color: '#5f6d89', fontWeight: 'bold' }}  >
          Grade Input Form
        </Typography>

        <div className="buttons">
          <Button variant="contained" onClick={() => { handleSorting('descending') }} color="main-darker" sx={{ lineHeight: 0 }} >降序排序</Button>
          <Button variant="contained" onClick={() => { handleSorting('ascending') }} color="main-darker" sx={{ lineHeight: 0 }} >升序排序</Button>
          {/* <button class="btn sort-descending">降序排序</button>
          <button class="btn sort-ascending">升序排序</button> */}
        </div>

        <div className="all-inputs">
          {gradeObjects.map((gradeObject, ind) => (
            <GradeAdd
              key={ind}
              ind={ind}
              gradeObject={gradeObject}
              graderArray={graderArray}
              changeCategory={(e) => changeCategory(e, ind)}
              changeNumber={(e) => changeNumber(e, ind)}
              changeCredit={(e) => changeCredit(e, ind)}
              changeSelect={(e) => changeSelect(e, ind)}
              changeSelectColor={changeSelectColor}
              trashButtonHandler={(e) => trashButtonHandler(e, ind)}
              categoryList={categoryList}
            />
          ))}
        </div>

        <button type="button" className="plus-btn" onClick={addGradeObject}>
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="result">
          <p id="gpa-text">
            Your semester <br />
            GPA is
          </p>
          <h2 id="result-gpa">{(GPA * 1).toFixed(2)}</h2>
        </div>

        {categoryList}

      </section>
    </div>
  );
};

export default GPACalc;
