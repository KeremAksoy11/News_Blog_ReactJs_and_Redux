import React from "react";
import { connect } from 'react-redux'
import { fetchRecorded } from '../actions'

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


class RecordedList extends React.Component {
    componentDidMount() {
        this.props.fetchRecorded();
    }

    renderList() {
        return (
            <div className="container">
                <div className="row" >
                    {this.props.recorded.map((value) => (
                        <div className="col-lg-3" key={value.id}>
                            <div className="card mb-5 shadow-sm">
                                <div className="card-sl">
                                <div className="card-image">
                                        <img src={value.urlToImage === null ? value.urlToImage="https://thumbs.dreamstime.com/b/global-news-icon-world-logo-black-white-background-simple-vector-143330934.jpg" : value.urlToImage }   height={200} width={300} alt="logo gelmiyor"   />
                                    </div>
                                    <a className="card-action-science" ><img src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png" height={25} /></a>
                                    <div className="card-heading">
                                        {truncateOverview(value.title, 50)}
                                    </div>
                                    <div className="card-text">
                                        {truncateOverview(value.description, 75)}
                                    </div>
                                    <div className="card-text" style={{color : "#037ef1"}}>
                                    Source: {truncateOverview1( value.author === null ? value.author = 'Unidentified Source' : value.author , 30)}
                                    </div>
                                    <div className="card-text text-center" >
                                        <hr/>
                                    {value.publishedAt.substr(11,14).slice(0,-4)} 
                                    <br/> 
                                    {value.publishedAt.substr(7,10).slice(1,-7)}.{value.publishedAt.substr(5,8).slice(0,-6)}.{value.publishedAt.substr(0,5).slice(0,-1)} 
                                    </div>
                                    <a href={value.url} className="card-button-science"  target="_blank" rel='noreferrer'> Show More</a>
                                </div>
                            </div>
                        </div>
                    ))};
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
    return { recorded : state.recorded }
}

export default connect(mapStateToProps, { fetchRecorded })(RecordedList);