import React,{Component} from "react";
class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
            click:Number(props.e.elikes),
            show:true,
            
        };
    }
    
    
    lCount=()=>{
        this.setState({clicks:this.state.clicks+1});
        if((this.state.clicks)%2!=0){
          this.state.click -=1;
          this.setState({clicks:this.state.clicks-1});
        }
        else
        {
            this.state.click +=1;           
        }

    }
    render(){
        return(
            <div>
                
                <div className="d-flex align-items-center">
                <button onClick={this.lCount} className="fas fa-heart text-danger"></button>
                {this.state.show ? <h2>{this.state.click}</h2>:''}   </div>
                
                
            </div>
        );
    }
}
export default Like;