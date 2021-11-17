import Card from "../ui/Card";
import classes from "./NewIdeaFrom.module.css";
import { useRef } from "react";
import Select from "react-select";

function NewIdeaForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  var tagRef = [];

    function handleTagChange(selectedOptions) {
        console.log(selectedOptions)
        let tempArr = [];
        selectedOptions.map(option => {
            tempArr.push(option.value);
            return;
        })
        tagRef = tempArr;
    }
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current;
    const enteredImage = imageRef.current;
    const enteredDescription = descriptionRef.current;
    const enteredTag = tagRef;

    const challengeData = {
      title: enteredTitle.value,
      image: enteredImage.value,
      description: enteredDescription.value,
      tags: enteredTag,
      votes: 0,
      voters: [],
      createdDate: new Date()
    };
    props.onAddChallenge(challengeData);
  }
  const tagOptions = [
    { value: "Tech", label: "Tech" },
    { value: "Code", label: "Code" },
    { value: "Feature", label: "Feature" },
    { value: "Improvisation", label: "Improvisation" },
    { value: "Re-vamp", label: "Re-vamp" },
    { value: "Sports", label: "Sports" },
    { value: "Fun", label: "Fun" },
    { value: "Festive", label: "Festive" },
  ];
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Idea Title</label>
          <input type="text" name="" id="title" required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Idea Image</label>
          <input type="url" name="" id="image" required ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Idea Description</label>
          <textarea
            name=""
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="tag">Idea Tag</label>
          <Select
            options={tagOptions}
            id="tag"
            required
            isMulti
            onChange={handleTagChange}
          >
          </Select>
        </div>
        <div className={classes.actions}>
          <button>Add Idea</button>
        </div>
      </form>
    </Card>
  );
}
export default NewIdeaForm;
