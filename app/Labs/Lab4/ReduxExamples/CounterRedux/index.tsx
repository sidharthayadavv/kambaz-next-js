import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import { RootState } from "../../store";
export default function CounterRedux() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())} id="wd-counter-redux-increment-click" className="bg-success border-0 me-1 text-white"> Increment </button>
      <button onClick={() => dispatch(decrement())} id="wd-counter-redux-decrement-click" className="bg-danger border-0 text-white"> Decrement </button>
      <hr/>
    </div>
);}
