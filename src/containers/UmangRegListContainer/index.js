import React, { Component } from "react";
import DataTable, { createTheme, memoize } from "react-data-table-component";
import {
  fetchAllRegistrations,
  markAttendance,
  updateRegistration,
  updateUser,
} from "../../services/umang";
import { COLUMNS } from "./constants";
import "./style.scss";

class UmangRegListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchText: "",
      editPopup: null,
      viewPopup: null,
    };
  }
  componentDidMount() {
    fetchAllRegistrations()
      .then((res) => {
        this.setState({
          data: res.data.users.map((reg) => ({
            ...reg,
            registeredOn: new Date(reg.registeredOn).toDateString(),
          })),
        });
      })
      .catch((err) => {
        alert("Error:", err.message);
      });
  }

  convertArrayOfObjectsToCSV = (array) => {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    // const keys = Object.keys(data[0]);
    const names = COLUMNS(() => {}, false)
      .map((e) => e.name)
      .slice(0, -1);
    const keys = COLUMNS(() => {}, false)
      .map((e) => e.selector)
      .slice(0, -1);

    result = "";
    result += names.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key].toString().replace(",", ".");

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  };

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  downloadCSV = (array) => {
    // const link = document.createElement('a');
    let csv = this.convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    this.exportRef.setAttribute("href", encodeURI(csv));
    this.exportRef.setAttribute("download", filename);
    // this.exportRef.click();
  };

  onSearch = (e) => {
    const { data } = this.state;
    const value = e.target.value;
    const lowered = value && value.toLowerCase();
    this.setState({
      filteredData: data.filter((participant) => {
        console.log(">>>", participant);
        return (
          participant.uuid?.toLowerCase().includes(lowered) ||
          participant.name?.toLowerCase().includes(lowered) ||
          participant.email?.toLowerCase().includes(lowered) ||
          participant.contact.toString()?.toLowerCase().includes(lowered) ||
          participant.registeredBy?.toLowerCase().includes(lowered)
        );
      }),
      searchText: value,
    });
  };

  handleButtonClick = (type, row) => {
    switch (type) {
      case "edit": {
        this.setState({ editPopup: row });
        break;
      }
      case "view": {
        this.setState({ viewPopup: row });
        break;
      }
      case "attend": {
        this.setState({ disabled: true });
        markAttendance(row.uuid, row.attendance === "absent" ? "present" : "absent")
          .then((res) => {
            const updatedData = this.state.data.map((participant) => {
              if (participant.uuid === row.uuid) {
                participant.attendance = row.attendance === "absent" ? "present" : "absent";
              }
              return participant;
            });
            this.setState({
              data: updatedData,
              disabled: false,
            });
          })
          .catch((err) => {
            this.setState({ disabled: false });
            alert(err.message);
          });
      }
      default:
    }
  };

  sendUpdateRequest = () => {
    const {
      editPopup: {
        uuid,
        email,
        contact,
      },
    } = this.state;
    updateRegistration({
      uuid,
      email,
      contact,
    })
      .then((res) => {
        const updatedData = this.state.data.map((participant) => {
          if (participant.uuid === uuid) {
            return {
              ...participant,
              email: res.data.user.email,
              contact: res.data.user.contact,
            };
          }
          return participant;
        });
        this.setState({
          data: updatedData,
          editPopup: null,
        });
      })
      .catch((err) => {
        alert(err.message);
        this.setState({
          editPopup: null,
        });
      });
  };

  render() {
    const { data, searchText, filteredData, editPopup, viewPopup, disabled } =
      this.state;
    return (
      <div className="reg-list-container">
        <div className="header-bar">
          <a
            ref={(ref) => {
              this.exportRef = ref;
            }}
            onClick={() => this.downloadCSV(data)}
          >
            <button>Export to CSV</button>
          </a>
          <input
            autoComplete="off"
            id="search"
            type="text"
            placeholder="Search by Ticket ID / Name/ Email / Phone number"
            aria-label="Search Input"
            value={searchText}
            onChange={this.onSearch}
          />
        </div>
        <DataTable
          title="All Umang Registrations"
          columns={COLUMNS(this.handleButtonClick, disabled)}
          data={searchText.length ? filteredData : data}
          pagination
          selectableRows
          dense
        />
        {editPopup && (
          <div
            className="popup-outer"
            onClick={() => {
              this.setState({ editPopup: null });
            }}
          >
            <div
              className="popup-inner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ul className="edit-sheet">
                <li>
                  Email
                  <br />
                  <b>
                    <input
                      autoComplete="off"
                      value={editPopup.email}
                      onChange={(e) => {
                        this.setState({
                          editPopup: { ...editPopup, email: e.target.value },
                        });
                      }}
                    />
                  </b>
                </li>
                <li>
                  Contact
                  <br />
                  <b>
                    <input
                      autoComplete="off"
                      value={editPopup.contact}
                      onChange={(e) => {
                        this.setState({
                          editPopup: { ...editPopup, contact: e.target.value },
                        });
                      }}
                    />
                  </b>
                </li>
              </ul>
              <button onClick={this.sendUpdateRequest}>UPDATE</button>
            </div>
          </div>
        )}
        {viewPopup && (
          <div
            className="popup-outer"
            onClick={() => this.setState({ viewPopup: null })}
          >
            <div
              className="popup-inner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ul className="view-sheet">
                <li>
                  Ticket ID: <b>{viewPopup.uuid}</b>
                </li>
                <li>
                  Name: <b>{viewPopup.name}</b>
                </li>
                <li>
                  Email: <b>{viewPopup.email}</b>
                </li>
                <li>
                  Contact: <b>{viewPopup.contact}</b>
                </li>
                <li>
                  Registered by: <b>{viewPopup.registeredBy}</b>
                </li>
                <li>
                  Remarks: <b>{viewPopup.remarks}</b>
                </li>
                <li>
                  Registered on: <b>{viewPopup.registeredOn}</b>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UmangRegListContainer;
