import React from "react";
import Input from "../../components/Input";
import RoundBtn from "../../components/RoundBtn";
import { createNewRegistration } from "../../services/umang";
import COLORS from "../../constants/colors";
import "./style.scss";
import { transformName } from "../../utils";

class UmangVolunteerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      gender: "",
      location: "",
      remarks: "",
      paid: true,
      registeredBy: "0",
      volunteers: [
          "Aakarsh Saxena",
          "Abhishek Johri",
          "Abhishek Kumar",
          "Abhishek Tiwari",
          "Adhoksaja Dham Das",
          "Aditya Mukherjee",
          "Aditya Munje",
          "Advaaith Upadhyay",
          "Adbhut Narsimha Das",
          "Akshay Kumar Gupta",
          "Akshit",
          "Alok Mandal",
          "Aman Verma",
          "Anand Kumar",
          "Angad Kumar",
          "Amanda Madhu Mangal Das",
          "Ankur Sharma",
          "Anmol Gupta",
          "Anuj Ruhela",
          "Anuj Saxena",
          "Anupam Mishra",
          "Anurag Mishra",
          "Aryaman Bhatnagar",
          "Ashish Chaudhary",
          "Ashish Kushwaha",
          "Ashish Lohia",
          "Ashish Nath",
          "Ashish Saxena",
          "Ashish Singh",
          "Ashutosh Jaiswal",
          "Aviral Chaudhary",
          "Bharat",
          "Chahat Kumar",
          "Chaitanya Tirtha Das",
          "Damodar Lila Das",
          "Deep Subhanjay",
          "Dev Kumar",
          "Dwarikanath Hrishikesh Das",
          "Gaurav Rajput",
          "Hanu Shukla",
          "Harsh Chauhan",
          "Harsh Singhal",
          "Harsh Verma",
          "Harshdeep Singh",
          "Harshit Garg",
          "Harshit Sharma",
          "Himanshu Hito",
          "Himanshu Saxena",
          "Hansa Avtar Das",
          "Hrishabh Sisodiya",
          "Ishan Sharma",
          "Jatin Chenani",
          "Jatin Choudhary",
          "Jatin Sharma",
          "Jitendra Nickey",
          "Kanu Mohan Das",
          "Krishan Gopal",
          "Krishnanand Sharma",
          "Kshitij Sharma",
          "Kunal Bisht",
          "Lucky Garg",
          "Manish Choudhary",
          "Manish Kumar",
          "Manish Vaid",
          "Manu Singh",
          "Mayank Dixit",
          "Mohit Gupta",
          "Mohit Kushwaha",
          "Mohit Rajput",
          "Mohit Yadav",
          "Mukul Agnihotri",
          "Mukul Kaushik",
          "Mukul Verma",
          "Narayan",
          "Omprakash Tiwari",
          "Pankaj Gupta",
          "Pankaj Verma",
          "Piyush Goswami",
          "Piyush Goswami",
          "Pradeepyadav",
          "Prajwal Singh",
          "Prashant Sarvabhauma Das",
          "Purshottam Singh",
          "Purshottam Singh",
          "Rajan Pandey",
          "Rajan Sharma",
          "Rajat Sharma",
          "Raghav Kripa Das",
          "Rishabh Pal",
          "Ritesh Tiwari",
          "Ritik Dagar",
          "Ritik Rajput",
          "Rohit Kumar",
          "Rohit Pandit",
          "Sachin Kumar",
          "Sachin Shakya",
          "Sarva Mangal Gaur Das",
          "Shankey Bhati",
          "Shashi Kant",
          "Shivakant Awasthi",
          "Shivam Gupta",
          "Shivam Kashyap",
          "Shivam Kaushal",
          "Shivam Sharma",
          "Shivam Singh",
          "Shreshth Garg",
          "Shreyash Tiwari",
          "Shubham Kumar Singh",
          "Shubham Kumar Yadav",
          "Shubham Tiwari Das",
          "Sonu Goswami",
          "Seva Priya Vaisnava Das",
          "Sujal Mahajan",
          "Sumit Pal",
          "Suraj Maurya",
          "Tanishq Srivastava",
          "Tanuj Chauhan",
          "Tarun Anand",
          "Tushar Shukla",
          "Umesh Kumar",
          "Vaibhav Gupta",
          "Vasu Sharma",
          "Vibhor Sinha",
          "Vikram Singh",
          "Vikrant Shishodia",
          "Vishal Kumar",
          "Vishal Singh",
          "Vishal Thakur"
      ],
    };
  }

  setFormData = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  register = () => {
    const { name, email, contact, location, gender, registeredBy, paid, remarks } =
      this.state;
    // console.log(name, email, contact, gender, location, registeredBy, paid);
    if (name && email && contact && location && gender && registeredBy !== "0") {
      //   console.log(name, email, contact, gender, location, registeredBy, paid);
      createNewRegistration({
        name,
        email,
        contact,
        gender,
        location,
        paid,
        registeredBy: registeredBy === "0" ? undefined : registeredBy,
        remarks,
      })
        .then((res) => {
          this.setState({
            name: "",
            email: "",
            contact: "",
            location: "",
            gender: "0",
            paid: true,
            registeredBy: "0",
            remarks: "",
          });
          alert(
            `Registration successfully done. Ticket ID is ${res.data.user.uuid}.`
          );
        })
        .catch((e) => {
          alert("Error:", JSON.stringify(e));
        });
    } else {
      alert("Please fill details");
    }
  };

  render() {
    const {
      name,
      email,
      contact,
      location,
      registeredBy,
      volunteers,
      gender,
      remarks,
    } = this.state;
    return (
      <div className="umang-container">
        <h1>GITA UTSAV REGISTRATION</h1>
        <div className="form">
          <Input
            placeholder={"Name"}
            setValue={this.setFormData}
            value={name}
            name="name"
            required
          />
          <Input
            placeholder={"Contact"}
            setValue={this.setFormData}
            value={contact}
            name="contact"
            type="number"
            maxLength="10"
            required
          />
          <Input
            placeholder={"Email"}
            setValue={this.setFormData}
            value={email}
            name="email"
            type="email"
            required
          />
          <Input
            placeholder={"Gender"}
            setValue={this.setFormData}
            value={gender}
            name="gender"
            type="select"
            options={[
              { label: "Male", value: "MALE" },
              { label: "Female", value: "FEMALE" },
            ]}
            className="full input"
          />
          <Input
            placeholder={"Location"}
            setValue={this.setFormData}
            value={location}
            name="location"
            required
          />
          {/* <Input
            placeholder={"Paid"}
            setValue={this.setFormData}
            value={paid}
            name="paid"
            type="checkbox"
          /> */}
          <Input
            placeholder={"Registered by"}
            setValue={this.setFormData}
            value={registeredBy}
            name="registeredBy"
            type="select"
            options={volunteers.map((v) => ({
              label: transformName(v),
              value: v,
            }))}
            className="full input"
            required
          />
          <Input
            placeholder={"Remarks"}
            setValue={this.setFormData}
            value={remarks}
            name="remarks"
          />
          <RoundBtn
            className="btn selector-btn"
            onClick={this.register}
            outlineColor={COLORS.YELLOW}
            textColor={COLORS.WHITE}
            bgColor={COLORS.YELLOW}
            outlinePt={2}
          >
            Register
          </RoundBtn>
          <div className="note">
            Please select your correct name in <strong>Registered By</strong>{" "}
            field. If you don't find your name, contact, Raghav Kripa Das at
            9953522058.
            <br /> ISKCON YOUTH FORUM GHAZIABAD holds the right to cancel the
            registration, if any discrepancies found.
          </div>
        </div>
      </div>
    );
  }
}

export default UmangVolunteerContainer;