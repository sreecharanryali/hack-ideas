import { useEffect, useState } from "react";
import Select from "react-select";
import IdeaItem from "./IdeaItem";
import classes from "./IdeaList.module.css";

function IdeaList(props) {
  const ideas = props.ideas;
  const [ideasList, setIdeasList] = useState([]);
  const [sortType, setSortType] = useState('');
  
  useEffect(()=> {
    setSortType('latestDate');
  },[])

  useEffect(() => {
    const handleSorting = (selectedValue) => {
      var sorted = [];
      switch (selectedValue) {
        case "votesHL":
          sorted = [...ideas].sort((a, b) => b.votes - a.votes)
          break;
        case "votesLH":
          sorted = [...ideas].sort((a, b) => a.votes - b.votes)
          break;
        case "latestDate":
          sorted = [...ideas].sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
          break;
        case "oldestDate":
          sorted = [...ideas].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
          break;
      }
      setIdeasList(sorted);
    };
    handleSorting(sortType);
  }, [sortType]);
  const sortOptions = [
    { value: "votesLH", label: "Sort By Votes(Low to High)" },
    { value: "votesHL", label: "Sort By Votes(High to Low)" },
    { value: "latestDate", label: "Sort By Date(Latest)" },
    { value: "oldestDate", label: "Sort By Date(Oldest)" },
  ];
  return (
    <section>
      <Select options={sortOptions} id="sort" onChange={(e) => setSortType(e.value)} placeholder='Sort By Date(Latest)'/>
      <ul className={classes.list}>
        {ideasList.map((idea) => (
          <IdeaItem
            key={idea.id}
            id={idea.id}
            image={idea.image}
            title={idea.title}
            tags={idea.tags}
            description={idea.description}
            votes={idea.votes}
            voters={idea.voters ? idea.voters : []}
            isVoted={idea.isVoted}
          />
        ))}
      </ul>
    </section>
  );
}

export default IdeaList;
