import { Link } from "react-router-dom";
import EditorIcons from "../templates/icons/editorIcons";
import { useContext } from "react";
import { DataContext } from "./contextProvider";

function TweetEditor() {
  const { contextData, setContextData } = useContext(DataContext);
  const user = contextData["current-user"];

  return (
    <div className="flex gap-2 p-4 border-b border-gray-text">
      <div className="">
        <Link to={user.userName} alt={user.displayName}>
          <img
            src={user.avatar}
            alt=""
            className="max-w-12 max-h-12 rounded-full border border-white"
          />
        </Link>
      </div>
      <form className="w-full flex flex-col gap-2">
        <textarea
          className="w-full p-2 rounded bg-transparent text-xl border-none outline-none"
          placeholder="What's happening?"
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-4">
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
          <input
            type="submit"
            className="bg-blue hover:bg-blue-hover py-2 px-6 rounded-full cursor-pointer"
            value="Tweet"
          />
        </div>
      </form>
    </div>
  );
}

export default TweetEditor;
