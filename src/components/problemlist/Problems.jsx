import React from 'react'
import { backendUrl } from '../../constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Problems = () => {
    const [problems, setProblems] = useState([]);

    const init = async () => {
        const response = await fetch(`${backendUrl}/problems`, {
            method: "GET",
        });
        const json = await response.json();
        console.log(json)
        setProblems(json.problems);
    }

    useEffect(() => {
        init()
    }, []);

    return (


        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-stone-900 dark:bg-stone-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Problem name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Difficulty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acceptance
                        </th>
                        {/* <th scope="col" class="px-6 py-3">
                            Price
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {problems.map(problem =>
                        <tr class="bg-white border-b dark:bg-stone-800 dark:border-gray-700">
                            <Link to={`${problem.problemId}`}>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {problem.title}
                                </th>
                            </Link>
                            <td class="px-6 py-4" style={{ color: problem.difficulty === "Easy" ? 'green' : problem.difficulty === "Medium" ? 'orange' : 'red' }}>
                                {problem.difficulty}
                            </td>
                            <td class="px-6 py-4">
                                {problem.acceptance}
                            </td>
                            {/* <td class="px-6 py-4">
                                $2999
                            </td> */}
                        </tr>)}

                    {/* <tr class="bg-white border-b dark:bg-stone-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-stone-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>


    )
}

export default Problems