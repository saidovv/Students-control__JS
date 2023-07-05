let tbody = document.querySelector(".tbody");
let arr = [
  {
    id: "2",
    name: "Ilhom Saidov",
    tel: "000000000",
    date1: {
      hm: 0,
      absent: false,
    },
    date2: {
      hm: 0,
      absent: false,
    },
    date3: {
      hm: 0,
      absent: false,
    },
    date4: {
      hm: 0,
      absent: false,
    },
    date5: {
      hm: 0,
      absent: false,
    },
    result: {
      exam: 0,
      sum: 0,
    },
  },
  {
    id: "3",
    name: "John Doe",
    tel: "86545685466",
    date1: {
      hm: 0,
      absent: false,
    },
    date2: {
      hm: 0,
      absent: false,
    },
    date3: {
      hm: 0,
      absent: false,
    },
    date4: {
      hm: 0,
      absent: false,
    },
    date5: {
      hm: 0,
      absent: false,
    },
    result: {
      exam: 0,
      sum: 0,
    },
  },
];
let arr1 = [];
function Sum(mine) {
  return (
    Number(mine?.date1?.hm) +
    mine?.date1?.absent +
    Number(mine?.date2?.hm) +
    mine?.date2?.absent +
    Number(mine?.date3?.hm) +
    mine?.date3?.absent +
    Number(mine?.date4.hm) +
    mine?.date4?.absent +
    Number(mine?.date5.hm) +
    mine?.date5?.absent +
    Number(mine?.result?.exam)
  );
}

function onSelectChange(event) {
  const { name, value, id, placeholder } = event.target;
  arr = arr.map((elem) => {
    if (elem.id == id) {
      elem[placeholder][name] = value;
    }
    return elem;
  });
  Sum(arr.find((elem) => elem.id == id));
  ren();
  console.log(arr);
}

function onInputChange(event) {
  const { name, checked, id, placeholder } = event.target;
  console.log(placeholder);
  arr = arr.map((elem) => {
    if (elem.id == id) {
      elem[placeholder][name] = checked;
    }
    return elem;
  });
  Sum(arr.find((elem) => elem.id == id));
  ren();
  console.log(arr);
}

function onInputExamChange(event) {
  const { name, value, id, placeholder } = event.target;
  arr = arr.map((elem) => {
    if (elem.id == id) {
      elem[placeholder][name] = value;
    }
    return elem;
  });
  Sum(arr.find((elem) => elem.id == id));
  ren();
  console.log(arr);
}

function ownSelect(id, mainName, name, value) {
  let select = document.createElement("select");
  for (let i = 0; i < 6; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    select.appendChild(option);
  }
  select.id = id;
  select.name = name;
  select.value = value;
  select.placeholder = mainName;
  select.onchange = onSelectChange;
  return select;
}

function ownInput(val, type, id, mainName, name, onChange) {
  let inp = document.createElement("input");
  inp.type = type;
  if (type === "number") {
    inp.value = val;
  } else {
    inp.checked = val;
  }
  inp.id = id;
  inp.placeholder = mainName;
  inp.name = name;
  inp.onchange = onChange;
  return inp;
}

function ren() {
  tbody.innerHTML = "";
  arr.forEach((elem) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");

    tdId.innerHTML = elem.id;

    let tdName = document.createElement("td");
    tdName.innerHTML = elem.name;

    let tdTel = document.createElement("td");
    tdTel.innerHTML = elem.tel;

    let hm1 = document.createElement("td");
    hm1.appendChild(ownSelect(elem.id, "date1", "hm", elem.date1.hm));
    let absent1 = document.createElement("td");
    absent1.appendChild(
      ownInput(
        elem.date1["absent"],
        "checkbox",
        elem.id,
        "date1",
        "absent",
        onInputChange
      )
    );

    let hm2 = document.createElement("td");
    hm2.appendChild(ownSelect(elem.id, "date2", "hm", elem.date2.hm));
    let absent2 = document.createElement("td");
    absent2.appendChild(
      ownInput(
        elem.date2["absent"],
        "checkbox",
        elem.id,
        "date2",
        "absent",
        onInputChange
      )
    );

    let hm3 = document.createElement("td");
    hm3.appendChild(ownSelect(elem.id, "date3", "hm", elem.date3.hm));
    let absent3 = document.createElement("td");
    absent3.appendChild(
      ownInput(
        elem.date3["absent"],
        "checkbox",
        elem.id,
        "date3",
        "absent",
        onInputChange
      )
    );

    let hm4 = document.createElement("td");
    hm4.appendChild(ownSelect(elem.id, "date4", "hm", elem.date4.hm));
    let absent4 = document.createElement("td");
    absent4.appendChild(
      ownInput(
        elem.date4["absent"],
        "checkbox",
        elem.id,
        "date4",
        "absent",
        onInputChange
      )
    );

    let hm5 = document.createElement("td");
    hm5.appendChild(ownSelect(elem.id, "date5", "hm", elem.date5.hm));
    let absent5 = document.createElement("td");
    absent5.appendChild(
      ownInput(
        elem.date5["absent"],
        "checkbox",
        elem.id,
        "date5",
        "absent",
        onInputChange
      )
    );

    let exam = document.createElement("td");
    exam.appendChild(
      ownInput(
        elem.result["exam"],
        "number",
        elem.id,
        "result",
        "exam",
        onInputExamChange
      )
    );

    let sum = document.createElement("td");
    sum.innerHTML = Sum(elem);

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdTel);
    tr.appendChild(hm1);
    tr.appendChild(absent1);
    tr.appendChild(hm2);
    tr.appendChild(absent2);
    tr.appendChild(hm3);
    tr.appendChild(absent3);
    tr.appendChild(hm4);
    tr.appendChild(absent4);
    tr.appendChild(hm5);
    tr.appendChild(absent5);
    tr.appendChild(exam);
    tr.appendChild(sum);
    tbody.appendChild(tr);
  });
}

ren();
