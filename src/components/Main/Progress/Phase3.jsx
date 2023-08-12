function Phase3({ handlePrevPhase }) {
  return (
    <section className="button-group col col-12" data-phase="credit-card">
      <button className="prev" onClick={handlePrevPhase}>
        <object data="./icons/left-arrow.svg" className="cursor-point"></object>
        上一步
      </button>
      <button className="next">確認下單</button>
    </section>
  );
}

export default Phase3;
