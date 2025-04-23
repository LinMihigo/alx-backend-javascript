export default function updateStudentGradeByCity(arr, city, grades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const gradeObj = grades.find((grade) => grade.studentId === obj.id);
      return {
        ...obj,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
