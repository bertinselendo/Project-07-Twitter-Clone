import { Link } from "react-router-dom";
import UsersServices from "../models/usersServices";
import EditorIcons from "../templates/icons/editorIcons";

function TweetEditor() {
  const user = UsersServices;
  const currentUserID = user.currentUserID;

  return (
    <div className="tweet-editor">
      <div className="avatar">
        <Link to={user.getUserName(currentUserID)}>
          <img src={user.getUserAvatar(currentUserID)} alt="" />
        </Link>
      </div>
      <form className="tweet-editor-form">
        <textarea
          className="tweet-editor-input"
          placeholder="What's happening?"
        ></textarea>
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <div>
              <EditorIcons icon="image" />
            </div>
            <div>
              <EditorIcons icon="gif" />
            </div>
            <div>
              <EditorIcons icon="graph" />
            </div>
            <div>
              <EditorIcons icon="reaction" />
            </div>
            <div>
              <EditorIcons icon="schedule" />
            </div>
          </div>
          <input type="submit" className="button" value="Tweet" />
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;
