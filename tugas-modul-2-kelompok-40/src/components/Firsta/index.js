import React from "react";
import greenCheck from "../../assets/images/greenCheck.png";
import redCross from "../../assets/images/redCross.png";

export default function GroceryList(props) {
  const { data, name, date } = props;

  return (
    <div className="bg-gray-900 shadow p-4">
      <div>
        <h2 className="text-4xl font-bold tracking-wide text-center text-white">
          Daftar Belanja
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map(({ nama, harga, jumlah, isBought }) => (
            <div className= {` ${isBought ? "bg-green-700" : "bg-red-700"} p-3 shadow-lg`}>
              <div className="flex justify-between">
                <div className="text-gray-100">
                  <p>{name}</p>
                </div>
                <div className="text-gray-100">
                  <p>{date}</p>
                </div>
              </div>
              <div className="justify-center flex">
                <img
                  src={`${isBought ? greenCheck : redCross}`}
                  alt="Gambar"
                ></img>
              </div>
              <div className="text-gray-100">
                <span>Nama Barang : {nama}</span>
              </div>
              <div className="text-gray-100">
                <span>Harga Barang : {harga}</span>
              </div>
              <div className="text-gray-100">
                <span>Jumlah Barang : {jumlah}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
