import React from "react";

import MarkedPreview from '../MarkedPreview/MarkedPreview'

import './MarkedEditor.css';

interface State{
    markeddata: string
}

class MarkedEditor extends React.Component<{}, State> {

    state: State = {
        markeddata: ''
    }

    onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        let {markeddata} = this.state;
        markeddata = event.target.value;
        this.setState({markeddata})
    }

    render(){
        let {markeddata} = this.state;
        return(
            <div className="MarkedEditor">
                <textarea onChange={this.onChangeHandler} value={markeddata} className="MarkedEditor--Textarea" />
                <MarkedPreview markeddata={markeddata}/>
            </div>
        )
    }
}

export default MarkedEditor;