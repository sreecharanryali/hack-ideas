import { useEffect, useState } from "react";
// import AuthContext from "../../store/auth-context";
import Card from "../ui/Card";
import classes from "./IdeaItem.module.css";

function IdeaItem(props) {
  // const authCtx = useContext(AuthContext);
  const tempData = props;
  const [data, setData] = useState(tempData);
  const [votes, setVotes] = useState(tempData.votes);
  const user = localStorage.getItem("currentUser");
  const [hasVoted, setHasVoted] = useState(props.isVoted);
  function voteHandler() {
    const updatedIdea = {
      title: props.title,
      image: props.image,
      description: props.description,
      tags: props.tags,
      votes: props.votes + 1,
      voters: [...props.voters, user],
    };
    fetch(
      "https://hack-ideas-acf7c-default-rtdb.firebaseio.com/ideas/" +
        props.id +
        ".json",
      {
        method: "PATCH",
        body: JSON.stringify(updatedIdea),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setHasVoted(true);
        var currentData = {...data};
        currentData.votes += currentData.votes;
        setData(currentData);
    });
  }
  return (
    <li className={classes.item} id={data.id}>
      <Card>
        <div className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={classes.content}>
          <h3>{data.title}</h3>
          Tags: &nbsp;
          {data.tags.map((tag, index) => {
            return (
              <span className={classes.tag} key={data.id + index}>
                {tag}
              </span>
            );
          })}
          <p>{data.description}</p>
          <p className={classes.voteText}>
            <img
              src="/thumbsUp.png"
              alt="Up Vote Image"
              className={classes.voteImg}
            />
            {data.votes} votes
          </p>
        </div>
        <div className={classes.actions}>
          {!hasVoted && (
            <button onClick={() => voteHandler(data)}>
              Vote for this idea
            </button>
          )}
          {/* {hasVoted && <button>You've already voted for this</button>} */}
        </div>
      </Card>
    </li>
  );
}

export default IdeaItem;
