import { Link } from "react-router-dom";
import EditorIcons from "../templates/icons/editorIcons";
import { useContext } from "react";
import { DataContext } from "./contextProvider";
import TweetServices from "../models/tweetServices";
import { useForm } from "react-hook-form";

function TweetEditor() {
  const { contextData, setContextData } = useContext(DataContext);
  const user = contextData["current-user"];
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handledPost = (data) => {
    console.log(data.message);
    console.log(errors.message);
    const newTweet = {
      id: Math.floor(Math.random() * 1000),
      authorID: user.id,
      lastTime: new Date(),
      text: data.message,
      image: null,
      nbrs: {
        comment: 0,
        repost: 0,
        like: 0,
        view: 0,
      },
    };

    // TweetServices.postTweet(newTweet, user.id);
    setContextData({
      ...contextData,
      tweets: [...contextData.tweets, newTweet],
    });

    reset({ message: "" });
  };

  return (
    <div className="overflow-hidden relative">
      {errors.message && (
        <div className="absolute top-0 bottom-0 z-0 animate-fade-down text-center w-full text-sm pt-1 bg-gradient-to-b from-red-700 to-transparent">
          {errors.message.message}
        </div>
      )}
      <div className="flex gap-2 p-4 border-b border-gray-text z-10">
        <div className="z-10">
          <Link to={user.userName} alt={user.displayName}>
            <img
              src={user.avatar}
              alt=""
              className="max-w-12 max-h-12 rounded-full border border-white"
            />
          </Link>
        </div>
        <form
          className="w-full flex flex-col gap-2 relative"
          onSubmit={handleSubmit(handledPost)}
        >
          <textarea
            className="w-full p-2 rounded bg-transparent text-xl border-none outline-none"
            placeholder="What's happening?"
            name="message"
            {...register("message", {
              required: true,
              minLength: {
                value: 10,
                message: "Min 10 character required",
              },
              maxLength: {
                value: 280,
                message: "Max 280 character allowed",
              },
            })}
          />
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
              className="bg-blue hover:bg-blue-hover py-2 px-6 rounded-full cursor-pointer disabled:opacity-75 disabled:cursor-default disabled:hover:bg-blue"
              value="Tweet"
              disabled={!watch("message") && true}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetEditor;
