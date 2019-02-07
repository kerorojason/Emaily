import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import { Card } from "react-bootstrap";

class SurveyList extends Component {
  constructor() {
    super();
    this.renderSurveys.bind(this);
  }
  componentWillMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <Card
          bg="dark"
          text="white"
          // style={{ width: "40rem", margin: "auto " }}
          key={survey._id}
          className="mb-2 text-center"
        >
          <Card.Header>
            <h4>{survey.title}</h4>
            <Card.Text className="text-muted text-right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Text>{survey.body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link>Yes: {survey.yes}</Card.Link>
            <Card.Link>No: {survey.no}</Card.Link>
          </Card.Footer>
        </Card>
      );
    });
  }
  render() {
    return <div className="pb-3 ">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
