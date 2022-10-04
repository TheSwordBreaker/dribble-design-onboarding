type stepProps = {
  changeStep: (i: number) => void
  count: number
}
import cx from "classnames"
export default function Steps({ changeStep, count }: stepProps) {
  return (
    <ul className="flex w-full justify-between items-center pt-12 px-14">
      <li>
        <button onClick={() => changeStep(1)} className="step step-active">
          1
        </button>{" "}
      </li>
      <li className="flex-auto border-t border-primary" />
      <li className={`flex-auto border-t ${cx({ "border-primary": count > 1 })}`} />
      <li>
        <button
          onClick={() => changeStep(2)}
          className={`step ${cx({ "step-active": count > 1 })}`}
        >
          2
        </button>{" "}
      </li>
      <li className={`flex-auto border-t ${cx({ "border-primary": count > 1 })}`} />
      <li className={`flex-auto border-t ${cx({ "border-primary": count > 2 })}`} />
      <li>
        <button
          onClick={() => changeStep(3)}
          className={`step ${cx({ "step-active": count > 2 })} `}
        >
          3
        </button>{" "}
      </li>
      <li className={`flex-auto border-t ${cx({ "border-primary": count > 2 })}`} />
      <li className={`flex-auto border-t ${cx({ "border-primary": count > 3 })}`} />
      <li>
        <button
          onClick={() => changeStep(4)}
          className={`step ${cx({ "step-active": count > 3 })}`}
        >
          4
        </button>{" "}
      </li>
    </ul>
  )
}
