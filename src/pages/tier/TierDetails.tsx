import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function TierDetails() {
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <SideBar />
                <div className="content-body">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Add Tier</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="example_wrapper" className="display table">
                                        <thead>
                                            <tr>
                                                <th>Currency Id</th>
                                                <th>No. of Nft</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>8645643</td>
                                                <td>10</td>
                                                <td>10 ETH</td>
                                                  <td><span className="btn btn-warning btn-xs">Pending</span></td>
                                                 <td>25/03/2011</td>
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
        </>
    )
}