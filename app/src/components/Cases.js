//Need to import react with useEffect
import React, { useEffect } from 'react';
//Need to import connect
import { connect } from 'react-redux';
//Need to import fetchCases from actions
import { fetchCases } from '../store/actions/index';
//Use moment for current date
import moment from 'moment';

const Cases = props => {
    useEffect(() => {
        props.fetchCases();
    },[])

    return (
        <div>

            {props.cases && <div className='wrapper'>
                <h1>COVID-19 Cases</h1>
                <h3>Today is {moment().format('MMM Do YYYY')}</h3>

                {props.isFetching && <h3>Fetching Data...</h3> }

                <h2>{props.cases.Country}</h2>
                <h4>New Confirmed Cases: {props.cases.NewConfirmed}</h4>
                <h4>Deaths: {props.cases.NewDeaths}</h4>
                <h4>Total Confirmed Cases: {props.cases.TotalConfirmed}</h4>
                <h4>Total Deaths: {props.cases.TotalDeaths}</h4>
                <h4>Total Recoveries: {props.cases.TotalRecoveries}</h4>
              </div>  
            }

        </div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
      isFetching: state.reducer.isFetching,
      cases: state.reducer.cases,
      error: state.reducer.error
    }
  }
  
  export default connect(mapStateToProps, { fetchCases })(Cases);