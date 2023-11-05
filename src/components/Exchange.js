import React from "react";
import { Fragment } from "react";
import exchangeIconA from "../assets/exchange_icon_1.png";
import exchangeIconB from "../assets/exchange_icon_2.png";
import exchangeIconC from "../assets/exchange_icon_3.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import usdIcon from "../assets/usd_icon.png";
import btnIcon from "../assets/bitcoin.png";

import masterCardIcon from "../assets/brand/masterCard_icon.png";
import visaCardIcon from "../assets/brand/visa_icon.png";
import applePayIcon from "../assets/brand/applepay_logo.png";
import gPayIcon from "../assets/brand/gpay_icon.png";
import payPalIcon from "../assets/brand/paypal_icon.png";

import thirdVector from "../assets/illustration/VectorLineC.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Exchange = () => {
  return (
    <section className="overflow-hidden relative mt-20 lg:mt-10">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row">
        <div className="relative overflow-hidden w-full flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8 mt-8">
          <div className="flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">
              One click, instant payout with credit or debit card.
            </h1>
            <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
              Become a crypto owner in minutes using your debit or credit card
              and quickly purchase top cryptocurrencies.
            </p>
            <div className="mt-10">
              <div className="flex justify-start items-center w-full my-8">
                <img className="w-16" src={exchangeIconA} alt="" />
                <h5 className="font-bold text-xl ml-8">Create an account</h5>
              </div>
              <div className="flex justify-start items-center w-full my-8 ml-0 lg:ml-10">
                <img className="w-16" src={exchangeIconB} alt="" />
                <h5 className="font-bold text-xl ml-8">
                  Link your bank account
                </h5>
              </div>
              <div className="flex justify-start items-center w-full my-8 ml-0 lg:ml-20">
                <img className="w-16" src={exchangeIconC} alt="" />
                <h5 className="font-bold text-xl ml-8">
                  Start buying & selling
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-center lg:text-left px-6 lg:pl-8 mt-8">
          <div className="card-bg w-[447px] rounded-xl px-6 py-4">
            <div className="w-full flex justify-between items-center">
              <button
                style={{ color: "#246CF9" }}
                className="w-full font-bold py-4 rounded-md hover:bg-slate-700"
              >
                Buy
              </button>
              <div
                style={{
                  backgroundColor: "#34384C",
                  width: "1px",
                  height: "32px",
                }}
              ></div>
              <button
                style={{ color: "#5D6588" }}
                className="w-full font-bold py-4 rounded-md hover:bg-slate-700"
              >
                Sell
              </button>
            </div>
            <div className="mt-4">
              <span className="text-sm">1 BTC is roughly</span>
              <div className="flex justify-between items-end mt-3">
                <div className="flex items-end">
                  <h5 className="font-bold text-2xl">53,260.20</h5>
                  <span className="ml-3 text-slate-500">USD</span>
                </div>
                <div className="flex items-end">
                  <p className="text-slate-400">Claim $10 in Rewards</p>
                </div>
              </div>

              <div
                style={{ borderBottom: "1px solid #34384C" }}
                className="w-full flex justify-between items-center mt-6 py-1"
              >
                <p className="text-lg font-semibold">4,000</p>
                <div className="flex justify-center items-center">
                  <div
                    style={{
                      backgroundColor: "#34384C",
                      width: "1px",
                      height: "26px",
                    }}
                  ></div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="ml-3 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-700">
                        <span className="text-white flex items-center block">
                          <img src={usdIcon} className="w-6 h-6" alt="" />
                          <p className="ml-2">USD</p>
                        </span>
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              <div
                style={{ borderBottom: "1px solid #34384C" }}
                className="w-full flex justify-between items-center mt-6 py-1"
              >
                <p className="text-lg font-semibold">0.07415</p>
                <div className="flex justify-center items-center">
                  <div
                    style={{
                      backgroundColor: "#34384C",
                      width: "1px",
                      height: "26px",
                    }}
                  ></div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="ml-3 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-700">
                        <span className="text-white flex items-center block">
                          <img src={btnIcon} className="w-6 h-6" alt="" />
                          <p className="ml-2">USD</p>
                        </span>
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              <div className="w-full flex justify-center items-center">
                <button className="grad-btn lg-btn w-full md:w-72 mt-10">
                  Buy Now
                </button>
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-6">
                <h4>We accept</h4>
                <div className="w-full flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-2">
                  <img
                    className="w-11"
                    src={masterCardIcon}
                    alt="Master card"
                  />
                  <img className="w-11" src={visaCardIcon} alt="Visa card" />
                  <img className="w-11" src={applePayIcon} alt="Apple pay" />
                  <img className="w-11" src={gPayIcon} alt="Google pay" />
                  <img className="w-11" src={payPalIcon} alt="Paypal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="third-vector" src={thirdVector} alt="" />
    </section>
  );
};

export default Exchange;
