import React from "react";
import { connect } from 'react-redux'
import { fetchBusiness } from '../actions'
import { v4 as uuidv4 } from 'uuid';


const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.lenght <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
}
const truncateOverview1 = (string, maxLength) => {
    if (!string) return null;
    if (string.lenght <= maxLength) return string;
    return `${string.substring(0, maxLength)}`;
}



class BusinessList extends React.Component {
      async componentDidMount() {
        this.props.fetchBusiness();

    }
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
      }

    showAlert = () =>{
        alert("News Recorded.")
    }
 
    renderList() {
        return (
            <div className="container">
                <div className="row" >
                    {this.props.business.map((value) => (
                        <div className="col-lg-3" key={value.id = uuidv4()} onSubmit={this.handleSubmit} >
                            <div className="card mb-5 shadow-sm">
                                <div className="card-sl">
                                    <div className="card-image">
                                        <img src={value.urlToImage === null ? value.urlToImage="https://thumbs.dreamstime.com/b/global-news-icon-world-logo-black-white-background-simple-vector-143330934.jpg" : value.urlToImage } height={200} width={300}   alt="logo gelmiyor" className="center-block"  />
                                    </div>
                                    <a className="card-action-business"  ><img src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png" 
                                     height={25} alt="logo gelmiyor" className="center-block" onClick={this.showAlert} /></a>
                                    <div className="card-heading">
                                        {truncateOverview(value.title, 50)}
                                    </div>
                                    <div className="card-text">
                                        {truncateOverview(value.description, 75)}
                                    </div>
                                    <div className="card-text" style={{color : "#061ea7af"}}>
                                    Source: {truncateOverview1( value.author === null ? value.author = 'Unidentified Source' : value.author && value.author.indexOf("https://www.") ? value.author.replace("https://www.") : value.author , 30)}
                                    </div>
                                    <div className="card-text text-center" >
                                        <hr />
                                        {value.publishedAt.substr(11, 14).slice(0, -4)}
                                        <br />
                                        {value.publishedAt.substr(7, 10).slice(1, -7)}.{value.publishedAt.substr(5, 8).slice(0, -6)}.{value.publishedAt.substr(0, 5).slice(0, -1)}
                                    </div>
                                    <a href={value.url} className="card-button-business" target="_blank" rel='noreferrer'> Show More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { business: state.business }
}

export default connect(mapStateToProps, { fetchBusiness })(BusinessList);