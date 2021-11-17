import NewIdeaForm from "../ideas/NewIdeaFrom";
import { useHistory } from "react-router";

function NewIdea() {
  const history = useHistory();
  function addIdeaHandler(ideaData) {
    fetch(
      "https://hack-ideas-acf7c-default-rtdb.firebaseio.com/ideas.json",
      {
        method: "POST",
        body: JSON.stringify(ideaData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/home");
    });
  }
  return (
    <section>
      <h1>Add an Idea</h1>
      <NewIdeaForm onAddChallenge={addIdeaHandler} />
    </section>
  );
}

export default NewIdea;
