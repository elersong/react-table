import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import InputModal from "./InputModal";

export default function Table({ data }) {
  // add a 'hidden' property to each object
  const adjustedData = data.map((obj) => {
    return { ...obj, hidden: false };
  });

  const [tableData, setTableData] = useState(adjustedData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInputModal, setShowInputModal] = useState(false);
  // don't render the 'hidden' property to the table
  const columnHeaders = Object.keys(tableData[0]).filter(
    (text) => text !== "hidden"
  );

  // change 'hidden' property to true as needed to filter search terms
  useEffect(() => {
    // set all the data 'hidden' properties to false before filtering
    const freshCopyOfTableData = [...tableData].map((row) => {
      return { ...row, hidden: false };
    });

    //now re-hide the objects that have no properties which match the search term
    const searchedData = freshCopyOfTableData.map((row) => {
      if (
        !Object.values(row).some((tableDatum) => {
          // the 'hidden' term is a boolean, and has no .includes() function, so return false by default
          return typeof tableDatum == "string"
            ? // if this cell at least partially matches the search term, return true
              // and make it case-insensitive
              tableDatum.toLowerCase().includes(searchTerm.toLowerCase())
            : false;
        })
      ) {
        return { ...row, hidden: true };
      } else {
        return row;
      }
    });

    setTableData(searchedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleHeaderClick = (e) => {
    const sortHeader = e.target.innerText;

    const newTableData = [...tableData].sort((a, b) => {
      let x = a[sortHeader].toLowerCase();
      let y = b[sortHeader].toLowerCase();

      return x < y ? -1 : y < x ? 1 : 0;
    });
    setTableData(() => newTableData);
  };

  const handleShowInputModal = (e) => {
    setShowInputModal(true);
  };

  const handleHideInputModal = (e) => {
    setShowInputModal(false);
  };

  const handleNewRecordSubmit = (newRecordObject) => {
    newRecordObject["hidden"] = false;
    setTableData([...tableData, newRecordObject]);
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
    return tableData
      .filter((row) => !row.hidden)
      .map((row, idx) => {
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
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={handleShowInputModal}>Add New</button>
      <InputModal
        show={showInputModal}
        hide={handleHideInputModal}
        headers={columnHeaders}
        saveToParent={handleNewRecordSubmit}
      />
      <table>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
