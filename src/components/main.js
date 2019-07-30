import React,{Component} from 'react'
// import result from './server'


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