import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKX3bCHoOuJJ-wPQ1OM8oDsEyZ9E0YJ0St4_4G7Y5TKNbCXFVqVaSBWg8hUX0Xo3iDGko&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiua75HikeZECKh1blXAUKElrH3ZjeK7I1_5VhnIiUEzIX6Hka7sRZ5uxJclgJZ0ZbDuo&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTbbrGVZtq0U6Eb0BE06g5gLmK1PmtShNm3aZlNPKJ5Ty6-8B8VjMeHQqCeYbSZaRv8c&usqp=CAU",
  },
};
let obChoice = Object.keys(choice);
console.log(choice[obChoice[1]].img);

function App() {
  // 변수
  const [userChoiceImg, setUserChoiceImg] = useState("");
  const [computerChoiceImg, setComputerChoiceImg] = useState("");
  const [userResult, setUserResult] = useState("결과");
  const [computerResult, setComputerResult] = useState("결과");
  const [result, setResult] = useState("결과");
  const [counter, setCounter] = useState({ user: 0, computer: 0 });

  // 함수
  // 선택 버튼 눌렀을때 실행되는 함수
  const play = (userChoice) => {
    setUserChoiceImg(choice[userChoice].img);
    let randomComputerChoice = computerChoice();
    setComputerChoiceImg(randomComputerChoice.img);
    setUserResult(choice[userChoice].name);
    setComputerResult(randomComputerChoice.name);
    setResult(judgement(choice[userChoice].name, randomComputerChoice.name));
    let counterResult = judgement(
      choice[userChoice].name,
      randomComputerChoice.name
    );
    // counter
    if (counterResult == "win") {
      console.log("win");
      setCounter((prevState) => ({
        ...prevState,
        user: prevState.user + 1,
      }));
    } else if (counterResult == "lose") {
      console.log("lose");
      setCounter((prevState) => ({
        ...prevState,
        computer: prevState.computer + 1,
      }));
    }
  };

  // 로직
  const judgement = (user, computer) => {
    if (user == computer) {
      return "tie";
    } else if (user == "Rock") {
      return computer == "Scissors" ? "win" : "lose";
    } else if (user == "Scissors") {
      return computer == "Paper" ? "win" : "lose";
    } else if (user == "Paper") {
      return computer == "Rock" ? "win" : "lose";
    }
  };

  // 컴퓨터 랜덤 선택 뽑기
  const computerChoice = () => {
    let itemArray = Object.keys(choice);
    let computerRandomNum = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[computerRandomNum];
    return choice[final];
  };
  return (
    <div className="wrapper">
      <div className="header">
        <span className="score">
          {counter.user}:{counter.computer}
        </span>
        <button
          onClick={() => {
            setCounter((prevState) => ({
              ...prevState,
              user: 0,
              computer: 0,
            }));
          }}
          className="reset"
        >
          Reset
        </button>
      </div>
      <section className="game-view">
        <Box
          choiceImg={userChoiceImg}
          gameResult={userResult}
          result={result}
          title={"User"}
        />
        <Box
          choiceImg={computerChoiceImg}
          gameResult={computerResult}
          result={result}
          title={"Computer"}
        />
      </section>
      <section className="gmae-play-bt">
        <button
          className="game-bt"
          onClick={() => {
            play("rock");
          }}
        >
          <img src={choice["rock"].img} alt="img"></img>
        </button>
        <button
          className="game-bt"
          onClick={() => {
            play("scissors");
          }}
        >
          <img src={choice["scissors"].img} alt="img"></img>
        </button>
        <button
          className="game-bt"
          onClick={() => {
            play("paper");
          }}
        >
          <img src={choice["paper"].img} alt="img"></img>
        </button>
      </section>
    </div>
  );
}

export default App;

//   // const [userSelect, setUserSelect] = useState(null);
// const [computerSelect, setComputerSelect] = useState(null);
// const [result, setResult] = useState("");
// const play = (userChoice) => {
//   setUserSelect(choice[userChoice]);
//   let computerChoice = randomChoice();
//   setComputerSelect(computerChoice);
//   setResult(judgement(choice[userChoice], computerChoice));
// };
// const randomChoice = () => {
//   let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
//   console.log("item array", itemArray);
//   let randomItem = Math.floor(Math.random() * itemArray.length);
//   console.log("random value", randomItem);
//   let final = itemArray[randomItem];
//   return choice[final];
// };
// const judgement = (user, computer) => {
//   console.log("user", user, "computer", computer);
//   if (user.name == computer.name) {
//     return "tie";
//   } else if (user.name == "Rock")
//     return computer.name == "Scissors" ? "win" : "lose";
//   else if (user.name == "Scissors")
//     return computer.name == "Paper" ? "win" : "lose";
//   else if (user.name == "Paper")
//     return computer.name == "Rock" ? "win" : "lose";
// };
// return (
//   <div>
//     <div className="main">
//       <Box title="You" item={userSelect} result={result} />
//       <Box title="Computer" item={computerSelect} result={result} />
//     </div>
//     <div className="main">
//       <button onClick={() => play("scissors")}>가위</button>
//       <button onClick={() => play("rock")}>바위</button>
//       <button onClick={() => play("paper")}>보</button>
//     </div>
//   </div>
// );
