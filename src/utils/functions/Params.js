export function buildParams(params) {
  let stringBuilt = "";

  if (params.name !== "") {
    stringBuilt += stringBuilt !== "" ? `&` : ``;
    stringBuilt += `name=${params.name}`;
  }
  if (params.priority !== "") {
    stringBuilt += stringBuilt !== "" ? `&` : ``;
    stringBuilt += `priority=${params.priority}`;
  }
  if (params.isDone !== "") {
    stringBuilt += stringBuilt !== "" ? `&` : ``;
    stringBuilt += `isDone=${params.isDone}`;
  }
  if (params.sortDueDate !== "") {
    stringBuilt += stringBuilt !== "" ? `&` : ``;
    stringBuilt += `sortDueDate=${params.sortDueDate}`;
  }
  if (params.sortPriority !== "") {
    stringBuilt += stringBuilt !== "" ? `&` : ``;
    stringBuilt += `sortPriority=${params.sortPriority}`;
  }

  return stringBuilt;
}
