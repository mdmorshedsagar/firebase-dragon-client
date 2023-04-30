import qZone1 from "../../../../public/qZone1.png"
import qZone2 from "../../../../public/qZone2.png"
import qZone3 from "../../../../public/qZone3.png"

const QZone = () => {
    return (
        <div className="mt-3 bg-light p-2">
           <h3>Q-Zone</h3>
           <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default QZone;