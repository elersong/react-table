import React, { useState } from "react";

export default function Table({ data }) {
  const [tableData, setTableData] = useState(data);
  const columnHeaders = Object.keys(tableData[0]);

  const handleHeaderClick = (e) => {
      const sortHeader = e.target.innerText;

      const newTableData = [...tableData].sort((a, b) => {
          let x = a[sortHeader].toLowerCase();
          let y = b[sortHeader].toLowerCase();

          return x < y ? -1 : (y < x ? 1 : 0);
      });
      setTableData(() => newTableData);
  };

  const header = (() => {
    return (
      <tr>
        {columnHeaders.map((headTxt, idx) => (
          <th onClick={handleHeaderClick} key={`h${idx}`}>
            {headTxt}
          </th>
        ))}
      </tr>
    );
  })();

  const body = (() => {
    return tableData.map((row, idx) => {
      return (
        <tr key={`r${idx}`}>
          {columnHeaders.map((text, headIdx) => {
            return <td key={`r${idx}-d${headIdx}`}>{row[text]}</td>;
          })}
        </tr>
      );
    });
  })();

  return (
    <div>
      <table>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
