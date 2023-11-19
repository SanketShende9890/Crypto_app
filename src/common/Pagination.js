import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

function PaginatedItems({ itemsPerPage, coinData }) {
  const items = coinData;
  console.log(coinData);
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <tr
              key={index}
              className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div
                  style={{ height: "30px" }}
                  className="flex justify-start items-center"
                >
                  <img width={35} className="mr-5" src={item.iconUrl} alt="" />
                  <h4 className="font-bold text-lg mr-6">{item.symbol}</h4>
                  <p className="font-normal text-slate-400">{item.name}</p>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex justify-start items-center">
                  $ <p className="ml-1 text-md font-bold">{item.price}</p>
                </div>
              </td>
              <td className="px-6 py-4">{item.change}%</td>
              <td className="px-6 py-4">
                <div className="h-10">
                  {/* <Line options={options} data={data} /> */}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <button className="outline-btn px-3 py-2">Buy</button>
              </td>
            </tr>
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <table className="crypto-table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-400 dark:bg-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-5">
              Assets
            </th>
            <th scope="col" className="px-6 py-5">
              Last price
            </th>
            <th scope="col" className="px-6 py-5">
              Change
            </th>
            <th scope="col" className="px-6 py-5">
              Chart
            </th>
            <th scope="col" className="px-6 py-5 text-center">
              Trade
            </th>
          </tr>
        </thead>
        <tbody>
          <Items currentItems={currentItems} />
        </tbody>
      </table>

      <div className="pagination mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
