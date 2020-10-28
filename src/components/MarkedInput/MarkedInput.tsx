import React from "react";

import './MarkedInput.css';

interface Props{
    markeddata: string
    changed: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkedEditor : React.FC<Props> = (props) => {

        return(
            <div className="MarkedInput">
                <textarea onChange={props.changed} value={props.markeddata} className="MarkedInput--Textarea" />
            </div>
        )
}

export default MarkedEditor;