import React from "react";
import marked from 'marked';
import Prism from "prismjs"; 

import '../../utils/Prism.css';
import "../../utils/PrismImports";

import './MarkedPreview.css'

interface Props{
    markeddata: string
}

class MarkedPreview extends React.Component<Props> {

    componentDidUpdate(){
        Prism.highlightAll();
    }

    render(){
        let {markeddata} = this.props;
        console.log(marked(markeddata))
        return(
            <div className="MarkedPreview">
                <div className="MarkedPreview--Output" dangerouslySetInnerHTML={{__html: marked(markeddata)}} ></div>
            </div>
        )
    }
}

export default MarkedPreview;