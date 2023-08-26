const AddForm = ({
  userNameInput,
  setUserNameInput,
  userEmailInput,
  setUserEmailInput,
  userDetailInput,
  setUserDetailInput,
  onAddUserData,
  userCityInput,
  setUserCityInput,
}) => {
  const onAddDatas = (e) => {
    e.preventDefault();
    onAddUserData();
  };

  return (
    <>
      <section id="formSection">
        <form onSubmit={onAddDatas}>
          <div id="userinput">
            <label>Name</label>
            <input
              required
              type="text"
              placeholder="Your name.."
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>

          <div id="userinput">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Your Email.."
              value={userEmailInput}
              onChange={(e) => setUserEmailInput(e.target.value)}
            />
          </div>

          <div id="userinput">
            <label>City</label>
            <input
              type="text"
              placeholder="Your City Name.."
              value={userCityInput}
              onChange={(e) => setUserCityInput(e.target.value)}
            />
          </div>

          <div id="userinput">
            <label>Details</label>
            <textarea
              placeholder="Your Details.."
              value={userDetailInput}
              onChange={(e) => setUserDetailInput(e.target.value)}
            />
          </div>

          <div className="btns">
            <input type="submit" id="submitBtn" value="Submit"></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddForm;
