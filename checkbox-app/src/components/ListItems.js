import React from 'react'

import CheckboxRow from './CheckboxRow'

export default function ListItems({data, parentId = 0, level = 0, onCheckboxChange}) {
    const items = data.filter((item) => item.parent === parentId)
    return (
        <ul>
            {items.map((item) => (
                <CheckboxRow key={item.id} item={item} level={level} onCheckboxChange={onCheckboxChange} >
                    <ListItems data={data} parentId={item.id} level={level + 1} onCheckboxChange={onCheckboxChange} />
                </CheckboxRow>
            ))}
        </ul>
    )
}