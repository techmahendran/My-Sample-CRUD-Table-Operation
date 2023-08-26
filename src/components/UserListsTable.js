const UserListsTable = ({
  userDatas,
  editUserData,
  editDataId,
  upDateName,
  upDateEmail,
  upDateCity,
  setUpDateCity,
  upDateDetail,
  setUpDateDetail,
  setUpDateName,
  setUpDateEmail,
  updateUserData,
  delUserData,
  fetchError,
}) => {
  return (
    <>
      <div className="list-table">
        <table id="userTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Details</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userDatas.map((userData, index) =>
              userData.id === editDataId ? (
                <tr key={index}>
                  <td>{userData.id}</td>
                  <td>
                    <input
                      type="text"
                      className="update-input"
                      value={upDateName}
                      onChange={(e) => setUpDateName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-input"
                      value={upDateEmail}
                      onChange={(e) => setUpDateEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-input"
                      value={upDateCity}
                      onChange={(e) => setUpDateCity(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-input"
                      value={upDateDetail}
                      onChange={(e) => setUpDateDetail(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={updateUserData} className="updatebtn btn">
                      Update
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{userData.id}</td>
                  <td>{userData.fname}</td>
                  <td>{userData.email}</td>
                  <td>{userData.city}</td>
                  <td>{userData.detail}</td>
                  <td>
                    <button
                      className="editbtn btn"
                      onClick={() => editUserData(userData.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="delbtn btn"
                      onClick={() => delUserData(userData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* {userDatas.length === 0 && <p className="empty_list">No Datas</p>} */}

      {fetchError && <p className="error_msg">Error: {fetchError}</p>}
    </>
  );
};

export default UserListsTable;
