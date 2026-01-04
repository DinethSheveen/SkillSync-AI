import { BsBarChartSteps } from "react-icons/bs";

function Title({small_title,title,description}) {
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex gap-3 items-center px-3 py-1 rounded-full border border-purple-500 bg-purple-100 w-fit">
                <BsBarChartSteps className="text-purple-600"/>
                <p className="text-purple-600 font-bold">{small_title}</p>
            </div>
            <p className="text-3xl font-bold">{title}</p>
            <p className="max-w-md text-center">{description}</p>
        </div>
    </div>
  )
}

export default Title