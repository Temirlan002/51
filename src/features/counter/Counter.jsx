import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";


const Counter = () => {

    const value = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{value}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter;