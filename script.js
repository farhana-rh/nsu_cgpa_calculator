function gradeCalc(grade, unit) {
    if (grade === "A") {
      return 4.0 * unit;
    } else if (grade === "A-") {
      return 3.7 * unit;
    } else if (grade === "B+") {
      return 3.3 * unit;
    } else if (grade === "B") {
      return 3.0 * unit;
    } else if (grade === "B-") {
      return 2.7 * unit;
    } else if (grade === "C+") {
      return 2.3 * unit;
    }
    else if (grade === "C") {
        return 2.0 * unit;
      }else if (grade === "C-") {
        return 1.7 * unit;
      }
      else if (grade === "D+") {
        return 1.3 * unit;
      } else if (grade === "D") {
        return 1 * unit;
      } else if (grade === "F") {
        return 0 * unit;
      } 
  }
  
  let counter = 1;
  
  function addCourse() {
    let addNew = document.createElement("form");
    addNew.classList.add("add_new", `key-${counter}`);
    const course_name = `
    <form class="add_new key-${counter}">
      <input type="text" placeholder="Course Code" class="courses key-${counter}" required>
          <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
          <select class="grade key-${counter}" required>
       <option class="grade" value="select">Select</option>
                    <option class="grade" value="5">A</option>
                    <option class="grade" value="4">A-</option>
                    <option class="grade" value="3">B+</option>
                    <option class="grade" value="2">B</option>
                    <option class="grade" value="1">B-</option>
                    <option class="grade" value="0">C+</option>
                    <option class="grade" value="0">C</option>
                    <option class="grade" value="0">C-</option>
                    <option class="grade" value="0">D+</option>
                    <option class="grade" value="0">D</option>
                    <option class="grade" value="0">F</option>
      </select>  
    </form>
    `;
    addNew.innerHTML = course_name;
    document.getElementById("course-wrapper").appendChild(addNew);
    counter++;
  }
  
  function removeCourse() {
    let mainForm = document.querySelector("form.add_new");
    mainForm?.remove();
  }
  
  const reports = [];
  
  /**
   * @description calculates cgpa
   */
  function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GRADESSELECT = document.querySelectorAll("select.grade");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
    let totalUnits = 0;
  
    GRADESSELECT.forEach((e) => {
      let GRADES = e.options;
      const selectedIndex = e.selectedIndex;
      const selectedGrade = GRADES[selectedIndex];
      const gradeValue = selectedGrade.text.toUpperCase();
      listOfGrades.push(gradeValue);
    });
    console.log(listOfGrades);
  
    UNIT.forEach((e) => {
      const unitValue = parseInt(e.value);
      totalUnits += unitValue;
      listOfUnits.push(unitValue);
    });
    console.log(listOfUnits);
  
    let totalEarnedUnits = 0;
  
    for (let i = 0; i < listOfUnits.length; i++) {
      totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
    }
    const gpa = totalEarnedUnits / totalUnits;
    
    if (gpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);   
    } else {
      CGPAPARAGRAPH.textContent = "Please enter a valid grade and credit units";    
    }
    
  }
  