import React, {Fragment, useEffect} from 'react';
import {SummaryPriorityRequest, SummaryRequest} from "../../APIRequest/APIRequest";
import {useSelector} from "react-redux";
const Dashboard = () => {

    useEffect(()=>{
        SummaryRequest();
        SummaryPriorityRequest()
    },[])

    const SummaryList = useSelector((state) => state.summary.TotalTask)
    const PriorityList = useSelector((state) => state.summary.PriorityTask)
    console.log(PriorityList)
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {
                        SummaryList.map((item, i) =>
                            <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="animated fadeInUp">Total {item._id} Task</h5>
                                        <h6 className="text-secondary animated fadeInUp">{item.sum}</h6>
                                    </div>
                                </div>
                            </div>
                        )}

                    {
                        PriorityList.map((item, i) =>
                            <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="animated fadeInUp">Total {item._id} Task</h5>
                                        <h6 className="text-secondary animated fadeInUp">{item.sum}</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;