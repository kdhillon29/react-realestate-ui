import "./list.scss";
import Card from "../card/Card";
import { listData } from "../../lib/dummyData";

function List() {
  return (
    <div className="list">
      {listData.slice(0, Math.random() * 10 + 1).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
