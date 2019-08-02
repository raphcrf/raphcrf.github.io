import React,{Component} from 'react'



class Main extends Component{
    
    state={
        cms:10
    }

    getData = function(){
        
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <div>{this.state.cms}</div>
        )
    }

    

}

export default Main