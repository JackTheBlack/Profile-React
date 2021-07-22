import { useState, useEffect } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import ARTICLES from "../../data/Articles.js";
/*
<Table dataSource={aux}>
<Column title="Title" dataIndex="title" key="title" />
<Column title="Upvotes" dataIndex="upvotes" key="upvotes" />
<Column title="Date" dataIndex="date" key="date" />
</Table>
*/

function SORT() {
  const [aux, setAux] = useState([...ARTICLES]);
  const [filter, setFilter] = useState("upvoted");

  const upVoted = () => {
    setFilter(" ");
    setFilter("upvoted");
  };
  const recent = () => {
    setFilter(" ");
    setFilter("date");
  };

  useEffect(() => {
    if (filter === "upvoted") {
      console.log(filter);
      setAux(" ");
      setAux([...ARTICLES]);

      const newArr = aux.sort((a, b) => b.upvotes - a.upvotes);
      setAux(newArr);
    } else if (filter === "date") {
      console.log(filter);
      setAux([...ARTICLES]);
      const newArr = aux.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAux(newArr);
    }
    setFilter(" ");
  }, [filter, aux]);

  return (
    <div className="component">
      <Button type="primary" data-testid="most-recent-link" onClick={recent}>
        Most Recent
      </Button>
      <Button type="primary" data-testid="most-upvoted-link" onClick={upVoted}>
        {" "}
        Most UpVoted
      </Button>

      <table className="Table">
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
        {aux &&
          aux.map((i, index) => {
            return (
              <tr data-testid="article">
                <td data-testid="article-title">{i.title}</td>{" "}
                <td data-testid="article-upvotes">{i.upvotes}</td>
                <td data-testid="article-date">{i.date}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default SORT;
