import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import './home.scss';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/table';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                home container
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Month (Revenue)" aspect={2 / 1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;