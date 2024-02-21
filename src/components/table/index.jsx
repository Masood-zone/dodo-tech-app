import React from "react";
import { Check } from "../../assets/svgs";

function Table({ data }) {
  return (
    <table className="table table-fixed w-full border-none">
      <thead>
        <tr className="border-none">
          <th className="border-none w-[60%]"></th>
          <th className="text-heading-gray font-medium p-3 border-none text-lg w-1/4">
            Free
          </th>
          <th className="text-heading-gray font-medium p-3 border-none text-lg w-1/4">
            Business
          </th>
          <th className="text-heading-gray font-medium p-3 border-none text-lg w-1/4">
            Business +
          </th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((price) => (
          <tr key={price.id} className="border-none">
            <td className="border-none py-7">{price.title}</td>
            <td className="border-none py-7">
              {price.checked ? (
                <img src={Check} alt="check-icon" className="" />
              ) : (
                ""
              )}
            </td>
            <td className="border-none py-7">
              {price.checked ? (
                <img src={Check} alt="check-icon" className="" />
              ) : (
                ""
              )}
            </td>
            <td className="border-none py-7">
              {price.checked ? (
                <img src={Check} alt="check-icon" className="" />
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
