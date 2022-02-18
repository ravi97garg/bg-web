export const COLUMNS = (cb, disabled) => [
  {
    name: "ID",
    selector: "uuid",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Contact",
    selector: "contact",
    sortable: true,
  },
  // {
  //     name: 'Gender',
  //     selector: 'gender',
  //     sortable: true,
  // },
  {
    name: "Registered By",
    selector: "registeredBy",
    sortable: true,
  },
  {
      name: 'Remarks',
      selector: 'remarks',
      sortable: true,
  },
  {
    name: "Action",
    button: true,
    cell: (row) => (
      <div>
        <button
          style={{
            border: "1px solid black",
            margin: "2px",
            borderRadius: "4px",
          }}
          onClick={() => {
            cb("view", row);
          }}
        >
          View
        </button>
        <button
          style={{
            border: "1px solid black",
            margin: "2px",
            borderRadius: "4px",
          }}
          onClick={() => {
            cb("edit", row);
          }}
        >
          Edit
        </button>
        <button
          style={{
            color: "white",
            background: disabled ? "#666" : row.attendance === "absent" ? "#500" : "#050",
            border: "1px solid black",
            margin: "2px",
            borderRadius: "4px",
          }}
          disabled={disabled}
          onClick={() => {
            console.log('ttttttttttt',row);
            cb("attend", row);
          }}
        >
          {disabled
            ? "Please Wait..."
            : row.attendance === "absent"
            ? "Mark Present"
            : "Mark Absent"}
        </button>
      </div>
    ),
  },
];
