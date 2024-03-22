// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        // console.log(getCurrentId)
        //  if the selected id is already the current one we clicked on - deselect it 
        setSelected(getCurrentId === selected ? null : getCurrentId); //  if the current id is equal to the selected one 
    };
    console.log(selected, multiple);

    function handleMultipleSelection(getCurrentId) {
        let tempArray = [...multiple];
        const findIndexOfCurrentId = tempArray.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        // if there are no items in the array add the getCurrentId to the array
        if (findIndexOfCurrentId === -1) {
            tempArray.push(getCurrentId);
        } else {
            // remove the item that matches the click from the array
            tempArray.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(tempArray);
    }

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            Enable multi selection
        </button>
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 &&
                                <div className="content" >{dataItem.answer}</div>
                                : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                        {/* {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 
                            ? <div className="content" >{dataItem.answer}</div> 
                            : null
                        } */}

                    </div>)
                    : <div> No data found ! </div>
            }
        </div>
    </div>;
}