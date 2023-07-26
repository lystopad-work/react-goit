import {Component} from "react";
import './Skeleton.scss';
export class Skeleton extends Component {
    render() {
        return (
            <div className="container loading-skeleton">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="//placekitten.com/300/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}