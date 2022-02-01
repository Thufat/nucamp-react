<<<<<<< HEAD
import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card> 
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }        

    renderComments (comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                        {comments.map(comments => {
                            return (
                                <div key={comments.id}>
                                    <div>{comments.text}</div>
                                    <div className="mb-3">-- {comments.author}, 
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                                    </div>
                                </div>
                            )
                               
                        })}
                </div>
            );
        }
        return <div></div>
    }

    render () {
        if (this.props.campsite) {
            return <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
        } 
        else {
                return <div></div>
                
        }
        
    }    
}

export default CampsiteInfo;

import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comments) => {
          return (
            <div key={comments.id}>
              <div>{comments.text}</div>
              <div className="mb-3">
                -- {comments.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comments.date)))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>

        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CampsiteInfo;

