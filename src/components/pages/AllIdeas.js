import { useState, useEffect } from "react";
// import AuthContext from "../../store/auth-context";
import IdeaList from "../ideas/IdeaList";
import classes from './AllIdeas.module.css';

function AllIdeasPage() {
  // const authCtx = useContext(AuthContext);
  const user = localStorage.getItem('currentUser');
  
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedIdeas, setFetchedIdeas] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://hack-ideas-acf7c-default-rtdb.firebaseio.com/ideas.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const ideas = [];
        for (const key in data){
          const item = {
            id: key,
            ...data[key]
          };
          ideas.push(item);
        }
        setIsLoading(false);
        ideas.map((eachChallenge) => {
          eachChallenge['isVoted'] = false;
          if(eachChallenge.voters && eachChallenge.voters.includes(user)){
            eachChallenge.isVoted = true;
          }
        })
        setFetchedIdeas(ideas);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.loadingDiv}>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Ideas</h1>
      <IdeaList ideas={fetchedIdeas} />
    </section>
  );
}

export default AllIdeasPage;
