import ChatBox from "../../components/chatBox/ChatBox";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h3>User Information</h3>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              {/* Avatar: */}
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <p>
              Username: <b>John Doe</b>
              <span>
                E-mail: <b>john@gmail.com</b>
              </span>
            </p>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
