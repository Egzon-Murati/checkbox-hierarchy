import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ListItems from '../components/ListItems';

export default function ListView() {
    const [data, setData] = useState([]);
    const [selections, setSelections] = useState([]);

    useEffect(() => {
        axios.get('https://frakton.dev/articles.php')
            .then(function(response) {
                setData(response.data)
            })
            .catch(function(error) {
                console.error(error)
            })
    }, [])

    const onCheckboxChange = (e, item) => {
        if(e.target.checked) {
            setSelections((prevSelections) => 
                [...prevSelections, {
                    id: item.id,
                    name: item.name,
                    parent: item.parent
                }]
            )
        } else {
            let items = selections.filter((selection) => selection.id !== item.id)
            setSelections(items);
        }
    }

    return (
        <>
            <ListItems data={data} onCheckboxChange={onCheckboxChange} />
            <Link to={{
                pathname: "/summary",
                state: {
                    selections: selections
                }
            }}>Summary</Link>
        </>
    )
}