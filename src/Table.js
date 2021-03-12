import React from "react";
import getSomeData from './data/dummy-data';

export default function Table() {
//   const headers = getSomeData(5,5);
//   console.log(headers)
  return (
    <div>
      <table>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </table>
    </div>
  );
}
