/* eslint-disable no-restricted-globals */
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import UserListsTable from "./components/UserListsTable";

import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  // Input Field State
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmailInput, setUserEmailInput] = useState("");
  const [userDetailInput, setUserDetailInput] = useState("");
  const [userCityInput, setUserCityInput] = useState("");
  // userDatas State
  const [userDatas, setUserDatas] = useState([]);
  // fetchError State
  const [fetchError, setFetchError] = useState("");
  // editDataId State
  const [editDataId, setEditDataId] = useState(-1);

  // upDateInput State
  const [upDateName, setUpDateName] = useState("");
  const [upDateEmail, setUpDateEmail] = useState("");
  const [upDateCity, setUpDateCity] = useState("");
  const [upDateDetail, setUpDateDetail] = useState("");

  useEffect(() => {
    const userDatas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");

        const data = response;

        setUserDatas(data.data);
      } catch (error) {
        setFetchError(error.message);
      }
    };

    userDatas();
  }, []);

  const onAddUserData = () => {
    if (
      userNameInput === "" ||
      userEmailInput === "" ||
      userCityInput === "" ||
      userDetailInput === ""
    ) {
      alert("Enter All Field");
    } else {
      try {
        const id = userDatas.length
          ? userDatas[userDatas.length - 1].id + 1
          : 1;

        axios.post("http://localhost:5000/users", {
          id: id,
          fname: userNameInput,
          email: userEmailInput,
          city: userCityInput,
          detail: userDetailInput,
        });

        location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editUserData = (id) => {
    const editData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const data = response;

        setUpDateName(data.data.fname);
        setUpDateEmail(data.data.email);
        setUpDateCity(data.data.city);
        setUpDateDetail(data.data.detail);
      } catch (error) {
        console.log(error);
      }
    };

    editData();
    setEditDataId(id);
  };

  const updateUserData = () => {
    axios.put("http://localhost:5000/users/" + editDataId, {
      id: editDataId,
      fname: upDateName,
      email: upDateEmail,
      city: upDateCity,
      detail: upDateDetail,
    });
    location.reload();
    setEditDataId(-1);
  };

  const delUserData = (id) => {
    const confirmDel = confirm("Are you sure the Delete the data?");
    if (confirmDel) {
      axios
        .delete("http://localhost:5000/users/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <div className="container">
        <Header />

        <AddForm
          userNameInput={userNameInput}
          setUserNameInput={setUserNameInput}
          userEmailInput={userEmailInput}
          setUserEmailInput={setUserEmailInput}
          userDetailInput={userDetailInput}
          setUserDetailInput={setUserDetailInput}
          onAddUserData={onAddUserData}
          userCityInput={userCityInput}
          setUserCityInput={setUserCityInput}
        />

        <UserListsTable
          userDatas={userDatas}
          setUserDatas={setUserDatas}
          editDataId={editDataId}
          upDateName={upDateName}
          upDateEmail={upDateEmail}
          upDateCity={upDateCity}
          setUpDateCity={setUpDateCity}
          upDateDetail={upDateDetail}
          setUpDateDetail={setUpDateDetail}
          setUpDateName={setUpDateName}
          setUpDateEmail={setUpDateEmail}
          editUserData={editUserData}
          updateUserData={updateUserData}
          delUserData={delUserData}
          fetchError={fetchError}
        />
      </div>
    </>
  );
}

export default App;
