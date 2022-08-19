import React,{Component} from "react";
class Like extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
            click:0,
            show:true,
            
        };
    }
    IncrementItem=()=>{
        this.setState({clicks:this.state.clicks+1});
    }
    DecreaseItem=()=>{
        this.setState({clicks:this.state.clicks-1});
    }
    ToggleClick=()=>{
        this.setState({show:!this.state.show});
    }
    
    lCount=()=>{
        this.setState({clicks:this.state.clicks+1});
        if((this.state.clicks)%2!=0){
          this.state.click -=1;
          this.setState({clicks:this.state.clicks-1});
        }
        else
        {
            this.state.click+=1;
            
        }

    }
    render(){
        return(
            <div>
                
                {/* <button onClick={this.IncrementItem} className="fas fa-heart text-danger"></button>
                <button onClick={this.DecreaseItem} className="fas fa-heart text-primary"></button> */}
                {/* <button className="fas fa-heart text-primary"
                onClick={()=>{this.setState({BackgroundColor:"Pink"});this.lCount()}}></button>
                <button className="fas fa-heart text-danger"
                onClick={()=>{this.setState({BackgroundColor:"Blue"});this.lCount()}}></button> */}
                <button onClick={this.lCount} className="fas fa-heart text-danger"></button>
                {/* <button onClick={this.ToggleClick}>
                    {this.state.show?'Hide number':'show number'}
                </button> */}
                {this.state.show ? <h2>{this.state.click}</h2>:''}
                {this.state.show ? <h2>{this.state.clicks}</h2>:''}
            </div>
        );
    }
}
export default Like;