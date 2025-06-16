import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function UserDetails() {
    return (
        <>


            <div id="main-wrapper">

                <Header />

                <SideBar />

            <div className="content-body">
                <div className="container-fluid">




                     <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">User Details</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="example_wrapper" className="display table">
                                        <thead>
                                            <tr>
                                                <th>S. No.</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Created Date</th>
                                                <th>Updated date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>A</td>
                                                <td><span className="btn btn-warning btn-xs">Pending</span></td>
                                                <td>25/03/2011</td>
                                                <td>10/14/2025</td>
                                              
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