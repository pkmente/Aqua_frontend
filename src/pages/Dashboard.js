import Header from "../components/header/Header";
import Bodycontent from "../components/bodycontent/Bodycontent";
import "./Dashboard.css";
import Header1 from "../components/header/Header1";
import Bodycontent1 from "../components/bodycontent/Bodycontent1";
const Dashboard = () => {
    return (
        <div>
            <Header />
            <Bodycontent />
            <Header1/>
            <Bodycontent1/>
        </div>
    );
}
export default Dashboard;