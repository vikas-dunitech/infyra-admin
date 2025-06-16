import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function ActiveNodes() {
    return (
        <>

            <div id="main-wrapper">

                <Header />

                <SideBar />

                <div className="content-body">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header" id="default-tab">
                                <h4 className="card-title">Active Nodes</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="example_wrapper" className="display table">
                                        <thead>
                                            <tr>
                                                <th>Address</th>
                                                <th>Status</th>
                                                <th>Activation Date</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>864bjbgjfbg78644685</td>
                                                <td><span className="btn btn-warning btn-xs">Pending</span></td>
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