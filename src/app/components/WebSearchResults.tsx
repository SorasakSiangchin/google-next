"use client"

import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

const WebSearchResults = ({ results }: any) => {

    //console.log("results : ", results)

    return (
        <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52' >
            <p>
                About {results.searchInformations?.formattedTotalResults} results
                ({results.searchInformations?.formattedSearchTime} seconds)
            </p>
            {results.items?.map((result: any) => {
                return <div className="mb-8 max-w-xl" key={result.link}>
                    <div className="group flex flex-col">
                        <Link href={result.link} >
                            {result.formattedUrl}
                        </Link>
                        <Link href={result.link}
                            className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                            {result.title}
                        </Link>
                    </div>
                    <p>
                        {Parser(result.htmlSnippet)}
                    </p>
                </div>
            })}
            <PaginationButtons />
        </div>
    )
}

export default WebSearchResults