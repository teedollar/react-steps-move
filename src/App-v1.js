import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    //if (step < 3) setStep(step + 1); same as
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">   Was like this before changing to children props
            <h3>Step {step}:</h3> {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgCOlor="#7950f2" textColor="#fff" onCLick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgCOlor="#7950f2" textColor="#fff" onCLick={handleNext}>
              {" "}
              Next <span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage(step, children) {
  return (
    <div>
      <p className="message">
        <h3>Step {step}</h3>
        {children}
      </p>
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  {
    /*CHildren prop - In between tags. Children is the keyword. e.g props.children */
  }
  <button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}
  >
    {children}
  </button>;
}
