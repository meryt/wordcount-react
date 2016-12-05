import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import DatePicker from 'react-bootstrap-date-picker';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'; // for DatePicker
import { SplitButton, MenuItem } from 'react-bootstrap';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

class MyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : new Date().toISOString()
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange (value, formattedValue) {
        this.setState({
            value: value,
            formattedValue: formattedValue
        });
    }

    componentDidUpdate() {
        console.log(this.state.value);
    }

    render() {
        return <FormGroup>
                <ControlLabel>Date</ControlLabel>
                <DatePicker id="example-datepicker" value={this.state.value}
                            dateFormat="YYYY-MM-DD" onChange={this.handleChange} />
                <HelpBlock>Help</HelpBlock>
            </FormGroup>;
    }
}

class ProjectPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "Red Boots"
        };
        this.handleChange = this.handleChange.bind(this);
    };

    // This is not working, still need to figure out how to update title/value based on change events for these
    // buttons.
    handleChange (event) {
        /**
        this.setState({
            value: event.target.value
        });
         */
        console.log(JSON.stringify(event));
    }

    render() {
        return <SplitButton id="project-select" title={this.state.value}>
                <MenuItem onClick={this.handleChange}>Red Boots</MenuItem>
                <MenuItem onClick={this.handleChange}>Ohio</MenuItem>
                <MenuItem divider />
                <MenuItem>Add new...</MenuItem>
            </SplitButton>;
    }
}

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <HelloMessage name="Jenny" />
                <MyDatePicker />
                <ProjectPicker />
                <div id="date-picker-container" />
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
