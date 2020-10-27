import React from "react";
import marked from 'marked';
import Prism from "prismjs"; //css for Prism is imported in ThemeSelector
import "../../utils/prism-imports";

import './MarkedEditor.css';

interface State{
    markeddata: string
}

class MarkedEditor extends React.Component<{}, State> {

    state: State = {
        markeddata: ''
    }

    componentDidMount(){
        Prism.highlightAll();
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
                <textarea onChange={this.onChangeHandler} value={markeddata} />
                <div dangerouslySetInnerHTML={{__html: marked(markeddata)}} ></div>
            </div>
        )
    }
}

export default MarkedEditor;