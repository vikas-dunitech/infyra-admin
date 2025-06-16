import { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Paginator } from 'primereact/paginator';

export default function ReferralReport() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <SideBar />
                <div className="content-body">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header" id="default-tab">
                                <h4 className="card-title">Referral Report</h4>
                                <ul className="nav nav-tabs custome-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#DefaultTab" type="button" role="tab" aria-selected="true">Today's</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#DefaultTab-html" type="button" role="tab" aria-selected="false">Total</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="DefaultTab" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="card-body">
                                        <div className="table-responsive mt-3">
                                            <table id="example_wrapper" className="display table">
                                                <thead>
                                                    <tr>
                                                        <th>Amount[ETH]</th>
                                                        <th>Address</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>864bjbgjfbg78644685</td>
                                                        <td>25/03/2011</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                            {/* <div className="d-flex justify-content-end">
                                                <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
                                             </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="DefaultTab-html" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label>From</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label>To</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mt-4">
                                                <div className="form-group">
                                                   <button type="button" className="btn btn-rounded btn-info"><span className="btn-icon-start text-info"><i className="fa fa-search color-info"></i>
														</span>Search</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive mt-3">
                                            <table id="example_wrapper" className="display table">
                                                <thead>
                                                    <tr>
                                                        <th>Amount[ETH]</th>
                                                        <th>Address</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>864bjbgjfbg78644685</td>
                                                        <td>25/03/2011</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}