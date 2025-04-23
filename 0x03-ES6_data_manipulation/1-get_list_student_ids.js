export default function getListStudentIds(arr) {
  // * Function takes an array of objects as an argument
  if (Array.isArray(arr)) {
    return arr.map((obj) => obj.id);
  }
  return [];
}
