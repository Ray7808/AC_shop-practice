function Phase2({ handlePrevPhase, handleNextPhase }) {
  return (
    <section className="button-group col col-12" data-phase="shipping">
      <button className="prev" onClick={handlePrevPhase}>
        <object data="./icons/left-arrow.svg" className="cursor-point"></object>
        上一步
      </button>
      <button className="next" onClick={handleNextPhase}>
        下一步
        <object
          data="./icons/right-arrow.svg"
          className="cursor-point"
        ></object>
      </button>
    </section>
  );
}

export default Phase2;
