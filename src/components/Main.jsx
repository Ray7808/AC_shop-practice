import Register from "./Main/Register";
import Cart from "./Main/Cart";
import Progress from "./Main/Progress";

function Main() {
  return (
    // <!-- main -->
    <main className="site-main">
      <div className="main-container">
        {/* <!-- register --> */}
        <Register />
        {/* <!-- cart --> */}
        <Cart />
        {/* <!-- progress --> */}
        <Progress />
      </div>
    </main>
  );
}

export default Main;
