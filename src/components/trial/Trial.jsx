import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { backendUrl } from "../../constants";

function Trial() {
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
                    <div class="columns-2 flex flex-row gap-0 h-[40rem] bg-stone-700   ">
                        <div class="rows-2 m-2 basis-2/5 h-auto rounded-lg bg-black text-zinc-50">
                            <div class="bg-stone-900 rounded-t-lg h-12 text-lg p-2">Description</div>
                            <div class="h-full p-2">
                                <h1 class="text-2xl text-amber-500">{problem.title}</h1>
                                <p>{problem.description}</p>
                                <div class="bg-stone-800 rounded-lg px-2 py-1 my-2">
                                    <code>Input : {problem.exampleIn}</code><br></br>
                                    <code>Output : {problem.exampleOut}</code>
                                </div>
                            </div>
                        </div>
                        <div class="rows-3 m-2 basis-3/5 h-auto rounded-lg bg-black text-zinc-50">
                            <div class="bg-stone-900 rounded-t-lg h-12 text-lg p-2">C++</div>
                            <form class="bg-stone-900 h-[33rem]">
                                <textarea class="w-full h-full bg-black border-stone-950 resize-none" id="code" placeholder="Write your code here." ></textarea>
                                <div class="bg-stone-900 rounded-b-lg h-12 text-lg p-1">
                                    <button class="bg-green-600 rounded-lg my-1 mx-2 px-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                ) :
                    (<div> No such problem exist </div>)
            }
        </>
    )

}

export default Trial;