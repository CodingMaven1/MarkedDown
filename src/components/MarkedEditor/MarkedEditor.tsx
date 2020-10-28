import React from "react";

import MarkedInput from "../MarkedInput/MarkedInput";
import MarkedPreview from '../MarkedPreview/MarkedPreview';
import {DefaultData} from '../../utils/DefaultData';

import './MarkedEditor.css';

interface State{
    markeddata: string
}

class MarkedEditor extends React.Component<{}, State> {

    state: State = {
        markeddata: DefaultData
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
                {/* <textarea onChange={this.onChangeHandler} value={markeddata} className="MarkedEditor--Textarea" /> */}
                <MarkedInput changed={this.onChangeHandler} markeddata={markeddata} />
                <MarkedPreview markeddata={markeddata}/>
            </div>
        )
    }
}

export default MarkedEditor;