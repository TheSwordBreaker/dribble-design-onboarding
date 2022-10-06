/* eslint-disable jsx-a11y/click-events-have-key-events */
import cx from "classnames"
import React, { useEffect, useState } from "react"

import Header from "./component/Header"
import Steps from "./component/Steps"

function App() {
  const [count, setCount] = useState(1)
  const [active, setActive] = useState(true)
  const next = () => setCount((c) => (c < 4 ? ++c : 4))
  const changeStep = (i: number) => setCount(i)

  return (
    <div id="onboarding" className="flex flex-col w-full h-full items-center font-serif">
      <div className="w-full lg:w-4/12  h-full flex flex-col items-center">
        <Header />

        <Steps count={count} changeStep={changeStep} />

        <div
          id="card1"
          className={`flex flex-col items-center pt-16 ${cx({ hidden: count !== 1 })}`}
        >
          <h2 className="pb-2 text-center">Welcome! First things first...</h2>
          <span className="small-heading">You can always change them later.</span>

          <div className="w-full pt-6 flex flex-col items-center">
            <div className="w-full max-w-xs ">
              <label htmlFor="full_name" className="label">
                <span className="label-text"> Full Name </span>
              </label>
              <input
                type="text"
                className="w-full max-w-xs"
                placeholder="Steve Jobs"
                id="full_name"
              />
            </div>

            <div className="w-full max-w-xs pt-3">
              <label htmlFor="display_name" className="label">
                <span className="label-text"> Display Name </span>
              </label>

              <input
                type="text"
                className="w-full max-w-xs"
                placeholder="Steve"
                id="display_name"
              />
            </div>
          </div>
        </div>

        <div
          id="card2"
          className={`flex flex-col items-center pt-16 ${cx({ hidden: count !== 2 })}`}
        >
          <h2 className="pb-2 text-center">Let's set up a home for all your work</h2>
          <span className="small-heading">You always create another workspace</span>
          <div className="w-full pt-6 flex flex-col items-center">
            <div className="w-full max-w-xs ">
              <label htmlFor="workspace_name">
                <span className="label-text">Workspace Name </span>
              </label>
              <input
                type="text"
                className="w-full max-w-xs"
                placeholder="eden"
                id="workspace_name"
              />
            </div>

            <div className="w-full max-w-xs pt-3">
              <label htmlFor="workspace_url">
                <span className="label-text">Workspace URL </span>{" "}
                <span className="text-xs text-gray-500">(optional)</span>
              </label>
              <div className="w-full max-w-xs">
                <div className="flex items-center text-sm m-0.5">
                  <div className="border px-3 py-2 rounded-l-md bg-gray-100 text-gray-400">
                    www.eden.com/
                  </div>
                  <input
                    type="text"
                    placeholder="Example"
                    className="clean w-full max-w-xs f text-sm border border-gray-300 rounded-r-md focus:border-primary focus:ring-primary placeholder:opacity-60 text-gray-500"
                    id="workspace_url"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="card3"
          className={`flex flex-col items-center  pt-16 ${cx({
            hidden: count !== 3,
          })}`}
        >
          <h2 className="pb-2 text-center">How are you planning to use Eden?</h2>
          <span className="small-heading">
            We'll Stremline your setup experience accordingly
          </span>

          <div className="pt-4 text-sm flex w-full px-16 gap-4 items-center">
            <div
              className={`border rounded-md px-4 pb-3 pt-2  w-full ${
                !active ? "border-gray-300" : "border-primary/90"
              }`}
              onClick={() => setActive(true)}
            >
              <div className="icon pb-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${!active ? "fill-gray-600" : "fill-primary"} h-12 w-10 `}
                  viewBox="0 0 48 48"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-black/90 pb-2">For myself</div>
              <div className="text-gray-500 text-xs">
                Write better. Think more clearly. Stay organized.
              </div>
            </div>

            <div
              className={`border rounded-md px-4 pb-3 pt-2 w-full cursor-pointer ${
                active ? "border-gray-300" : "border-primary/90"
              }`}
              onClick={() => setActive(false)}
            >
              <div className="icon pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${active ? "fill-gray-600" : "fill-primary"} h-12 w-10`}
                  viewBox="0 0 48 48"
                  preserveAspectRatio="xMinYMid meet"
                >
                  <path d="M-.15 36.15v-2.8q0-2.05 2.1-3.275T7.5 28.85q.5 0 1.025.025.525.025.975.075-.4.9-.6 1.85-.2.95-.2 2v3.35Zm12 0V32.8q0-3.3 3.35-5.375T24 25.35q5.45 0 8.8 2.075 3.35 2.075 3.35 5.375v3.35Zm27.45 0V32.8q0-1.05-.2-2t-.6-1.85q.45-.05.975-.075.525-.025 1.025-.025 3.4 0 5.525 1.225Q48.15 31.3 48.15 33.35v2.8ZM7.5 27.4q-1.5 0-2.55-1.05Q3.9 25.3 3.9 23.8q0-1.5 1.05-2.55Q6 20.2 7.5 20.2q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q9 27.4 7.5 27.4Zm33 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55Q39 20.2 40.5 20.2q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q42 27.4 40.5 27.4ZM24 23.85q-2.55 0-4.35-1.775-1.8-1.775-1.8-4.375 0-2.55 1.8-4.325Q21.45 11.6 24 11.6t4.35 1.775q1.8 1.775 1.8 4.325 0 2.6-1.8 4.375T24 23.85Z" />
                </svg>
              </div>
              <div className="font-semibold text-sm text-black/90 pb-2">With my team</div>
              <div className="text-gray-500 text-xs">
                Wikis, docs, tasks & projects, all in one place.
              </div>
            </div>
          </div>
        </div>

        <div
          id="card4"
          className={`flex flex-col items-center pt-16 ${cx({ hidden: count !== 4 })}`}
        >
          <div className="icon pb-8">
            <img src="./success.png" alt="" />
          </div>
          <h2 className="pb-2 text-center">Congratulations, Eren!</h2>
          <span className="small-heading pb-4">
            You have completed onboarding, you can start using the Eden!
          </span>
        </div>

        <button className="btn w-full max-w-xs mt-4 shadow-md" onClick={() => next()}>
          {count !== 4 ? `Create` : "Launch"} WorkSpace
        </button>
      </div>
    </div>
  )
}

export default App
