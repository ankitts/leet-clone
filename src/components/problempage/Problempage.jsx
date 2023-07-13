import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { backendUrl } from "../../constants";
import "./Problempage.css"

function Problempage() {
    const { pid } = useParams();
    const cleanId = pid.toString()
    const [problem, setProblem] = useState(null);

    const init = async () => {
        const response = await fetch(`${backendUrl}/problem/` + cleanId, {
            method: "GET",
        });
        const json = await response.json();
        setProblem(json.problem);
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <>
            {
                problem ? (
                    <div id="problempage" className='flex-row' class="bg-stone-900 columns-2">
                        <div className="ques" class="mx-4 my-4 h-96 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-stone-950 dark:border-stone-950">
                            <div class="px-4 py-2 bg-white rounded-t-lg text-white dark:bg-stone-950">
                                <h1 class="text-2xl text-amber-500">{problem.title}</h1>
                                <p>{problem.description}</p>
                                <div class="bg-stone-800 rounded-lg px-2 my-2 -mx-2">
                                    <code>Input : {problem.exampleIn}</code><br></br>
                                    <code>Output : {problem.exampleOut}</code>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="code">
                            {/* <h1>Code Here</h1> */}
                            <div className='code-form'>

                                <form>
                                    <div class="w-full -mx-4 my-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-stone-950 dark:border-stone-950">
                                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-stone-950">
                                            <label for="comment" class="sr-only">Your comment</label>
                                            <textarea id="comment" rows="4" class="w-full h-96 px-0 text-sm text-gray-900 bg-white border-0 dark:bg-stone-950 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your code here..." required></textarea>
                                        </div>
                                        <div class="flex items-center justify-between px-3 py-2 border-t bg-stone-800 dark:border-gray-600">
                                            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-stone-900 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-blue-900 hover:bg-amber-500">
                                                Submit your code
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) :
                    (<div> No such problem exist </div>)
            }
        </>
    )

}

export default Problempage;