import React from "react";
import "./card.css"

const Card = () => {
    return(
        <div>
                <div className="jumbotron myJumbotron">
                    <h1 className="display-4">A WARM WELCOME</h1>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio voluptatem nihil, odio laborum rem quos nesciunt distinctio at tempore ipsam dolorum excepturi repudiandae accusantium, in repellat et, fugit non?</p>
                    <p className="lead">
                        <a className="btn btn-primary myBoton" href="#" role="button">Call to action</a>
                    </p>
                </div>
            <div className="row">
                <div className="col-3 col-sm-12 card myCard" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBbzD4PKTF_X5JwNAv7tCIXYGVyQbeWQfqg&usqp=CAU" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out More!</a>
                    </div>
                </div>
                <div className="col-3 col-sm-12 card myCard" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XlQmdn0U6pv7PSF8pkegK6peRah2PRMloQ&usqp=CAU" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out More!</a>
                    </div>
                </div>
                <div className="col-3 col-sm-12 card myCard" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBbzD4PKTF_X5JwNAv7tCIXYGVyQbeWQfqg&usqp=CAU" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out More!</a>
                    </div>
                </div>
                <div className="col-3 col-sm-12 card myCard" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBbzD4PKTF_X5JwNAv7tCIXYGVyQbeWQfqg&usqp=CAU" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;