import Phase1 from "./Progress/Phase1.jsx";
import Phase2 from "./Progress/Phase2.jsx";
import Phase3 from "./Progress/Phase3.jsx";
function Progress({ handleNextPhase, handlePrevPhase, phase }) {
  console.log("phase:", phase);
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {/* Conditionally render phases */}
      {phase === 1 && <Phase1 handleNextPhase={handleNextPhase} />}
      {phase === 2 && (
        <Phase2
          handleNextPhase={handleNextPhase}
          handlePrevPhase={handlePrevPhase}
        />
      )}
      {phase === 3 && <Phase3 handlePrevPhase={handlePrevPhase} />}
    </section>
  );
}

export default Progress;
