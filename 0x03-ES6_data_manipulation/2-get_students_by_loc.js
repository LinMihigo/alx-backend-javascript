export default function getStudentByLocation(arr, city) {
  return arr.filter((obj) => obj.location === city);
}
