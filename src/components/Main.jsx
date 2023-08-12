import { useState } from "react";

import Register from "./Main/Register";
import Cart from "./Main/Cart";
import Progress from "./Main/Progress";

function Main() {
  const [phase, setPhase] = useState(1);
  const handleNextPhase = () => {
    setPhase((prevPhase) => prevPhase + 1);
  };
  const handlePrevPhase = () => {
    setPhase((prevPhase) => prevPhase - 1);
  };

  return (
    // <!-- main -->
    <main className="site-main">
      <div className="main-container">
        {/* <!-- register --> */}
        <Register />
        {/* <!-- cart --> */}
        <Cart />
        {/* <!-- progress --> */}
        <Progress
          phase={phase}
          handleNextPhase={handleNextPhase}
          handlePrevPhase={handlePrevPhase}
        />
      </div>
    </main>
  );
}

export default Main;
