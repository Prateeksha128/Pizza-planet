import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzId }) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(pizzId))
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzId))}
        type="round"
      >
        -
          </Button>
          <span className="font-medium">{currentQuantity} </span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
