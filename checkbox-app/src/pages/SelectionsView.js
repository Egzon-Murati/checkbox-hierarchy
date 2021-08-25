import React, {useEffect, useState} from 'react'

export default function SelectionsView(props) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const arr = props.location.state.selections.map((selection) => selection.id)
        const queryString = arr.join(",");
        setQuery(queryString)
    }, [])

    return (
        <div>
            <ol>
                {props.location.state.selections.map((selection) => 
                    <li key={selection.id}>{selection.name}</li>
                )}
            </ol>
            <a href={`/?selections=${query}`}>View Selections</a>
        </div>
    )
}