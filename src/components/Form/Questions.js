import React, { useState } from "react";

const Questions = () => {
    const [answers, setAnswers] = useState({
        gender: "",
        description: [],
        fruit: "Apple",
    })
    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    const createFirstAnswer = (e) => {
        setAnswers(previous => ({
            ...previous,
            gender: e.target.value
        }))
    }

    const createSecondAnswer = (e) => {
        const array = answers.description;
        const findValue = array.indexOf(e.target.value);
        if (findValue > -1) {
            array.splice(findValue, 1)
        } else {
            array.push(e.target.value);
        }

        setAnswers(previous => ({
            ...previous,
            description: array
        }))
        console.log(e.target.value);
        console.log(e.target.checked);
        console.log(answers.description);
    }

    const createThirdAnswer = (e) => {
        const thirdAnswer = e.target.value;
        answers.fruit = thirdAnswer;
        console.log(answers);
    }

    const showAnswers = (e) => {
        e.preventDefault();
        if (answers.description.length === 2) {
            setIsClicked(true);
            setShow(true);
        } else {
            alert("You must select two boxes for part b).")
            setShow(false);
            setIsClicked(false);
        }
    }

    const showForm = (e) => {
        setIsClicked(false);
        setShow(false);
        document.getElementById("form").reset();
        setAnswers(prevState => ({
            ...prevState,
            gender: "",
            description: [],
            fruit: "Apple"
        }))
    }

    return (
        <div>
            <p className="counter-title content">The following form makes use of various types of inputs. The user's answers are saved to an object and are then displayed to the user on the following page. The form can then be reset to be completed again.</p>
            <div className="radioform-div">
                <div className={isClicked ? "displayNone" : ""}>
                    <h4 className="radioformtitle">Fill in the form below</h4>
                    <form id="form">
                        <div className="question">
                            <p>a. What is your gender?</p>

                            <input className="radio" type="radio" value="Male" name="gender" onChange={createFirstAnswer} checked={answers.gender === "Male"} />
                            <label className="genderlabel">Male</label>
                            <br />

                            <input className="radio" type="radio" value="Female" name="gender" onChange={createFirstAnswer} checked={answers.gender === "Female"} />
                            <label className="genderlabel">Female</label>
                            <br />

                            <input className="radio" type="radio" value="Other" name="gender" onChange={createFirstAnswer} checked={answers.gender === "Other"} />
                            <label className="genderlabel">Other</label>
                            <br />

                        </div>
                        <br />

                        <div className="question">


                            <p>b. Which two words describe you best?</p>

                            <input className="checkbox" type="checkbox" value="Funny" name="description" onChange={createSecondAnswer} selected={answers.description.includes("Funny")} />
                            <label className="descriptionlabel">Funny</label>
                            <br />
                            <input className="checkbox" type="checkbox" value="Kind" name="description" onChange={createSecondAnswer} selected={answers.description.includes("Kind")} />
                            <label className="descriptionlabel">Kind</label>
                            <br />
                            <input className="checkbox" type="checkbox" value="Smart" name="description" onChange={createSecondAnswer} selected={answers.description.includes("Smart")} />
                            <label className="descriptionlabel">Smart</label>
                            <br />
                            <input className="checkbox" type="checkbox" value="Easygoing" name="description" onChange={createSecondAnswer} selected={answers.description.includes("Easygoing")} />
                            <label className="descriptionlabel">Easygoing</label>
                            <br />
                        </div>
                        <br />

                        <div className="question" onChange={createThirdAnswer}>

                            <p>c. Select your favourite fruit below:</p>
                            <select className="favfruit">
                                <option value="Apple">Apple</option>
                                <option value="Orange">Orange</option>
                                <option value="Banana">Banana</option>
                                <option value="Mango">Mango</option>
                                <option value="Dragon fruit">Dragon Fruit</option>
                                <option value="Pear">Pear</option>
                            </select>


                        </div>
                        <br />

                        <button className="submitbutton" onClick={showAnswers}>Show My Answers</button>
                    </form>
                </div>
                <div className={show ? "show" : "displayNone"} id="answerDiv">
                    <h4 className="radioformtitle">You answered:</h4>

                    <p className="question">Your gender is <span className="answersBold">{answers.gender}</span></p>
                    <p className="question">You would describe yourself as <span className="answersBold">{answers.description[0]}</span> and <span className="answersBold">{answers.description[1]}</span></p>
                    <p className="question">Your favourite fruit is <span className="answersBold">{answers.fruit}</span></p>
                    <button className="submitbutton" onClick={showForm}>Reset form</button>
                </div>

            </div>
        </div>
    );
};

export default Questions;
