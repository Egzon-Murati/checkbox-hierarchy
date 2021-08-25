import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'

export default function CheckboxRow({item, level, children, onCheckboxChange}) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const selections = queryParams.get('selections')
        if(selections) {
            const selectionsArr = selections.split(",")
            if(selectionsArr.includes(`${item.id}`)) {
                setIsChecked(true);
            }
        }
    }, [])


    const onCheckboxChanged = (e, item) => {
        setIsCollapsed(!isCollapsed);
        setIsChecked(!isChecked)

        onCheckboxChange(e, item);
    }
    return (
        <li className={`row level-${level}`}>
            <input type="checkbox" checked={isChecked} onChange={(e) => onCheckboxChanged(e, item)}></input>
            <label htmlFor="checkbox-name">{item.name}</label>
            <div className={`children ${isCollapsed && !isChecked ? 'collapsed' : ''}`}>
                {children}
            </div>
        </li>
    )
}