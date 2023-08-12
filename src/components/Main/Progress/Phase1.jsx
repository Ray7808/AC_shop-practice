function Phase1({ handleNextPhase }) {
  return (
    <section className="button-group col col-12" data-phase="address">
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

export default Phase1;
