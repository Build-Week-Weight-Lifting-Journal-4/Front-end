import React, { Component } from 'react';
import WorkOutList from './WorkOutList';
import axiosWithAuth from '../utlis/axiosWithAuth';
import { connect } from 'react-redux'
import { getExercises } from "../Actions"

class Dashboard extends Component {
    componentDidMount() {
        // axiosWithAuth().get('https://weightlift2020.herokuapp.com/exercise')
        // .then(res => {
        //     console.log(res);
        // })
        this.props.getExercises();
    }
    render() {
        console.log(this.props.exerciseList)
        const { exerciseList } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <WorkOutList exercises={exerciseList}/>
                    </div>
                    {/* <div className=" col s12 m5 offset-m1">
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps,{ getExercises })(Dashboard)