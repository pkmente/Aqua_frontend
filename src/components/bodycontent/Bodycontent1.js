import React, { useState } from 'react';
import "./Bodycontent1.css";
import TypeE from "../../pages/Type-E";
import TypeF from '../../pages/Type-F';
import TypeG from '../../pages/Type-G';
import TypeH from '../../pages/Type-H';
const Bodycontent1 = () => {
    const [selectedType, setSelectedType] = useState(null);
    const handleTypeClick = (type) => {
        setSelectedType((prevType) => (prevType === type ? null : type));
    };
    const handleCloseType = () => {
        setSelectedType(null);
    };
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <p className="second-para">Types</p>
                </div>
            </div>
            
            {selectedType === null && (
                <div className="sub-types">
                    <div className="row">
                        <div className="col-12" onClick={() => handleTypeClick('Type-A')}>
                            <p className="sub-para">Type-A</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" onClick={() => handleTypeClick('Type-B')}>
                            <p className="sub-para">Type-B</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" onClick={() => handleTypeClick('Type-C')}>
                            <p className="sub-para">Type-C</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" onClick={() => handleTypeClick('Type-D')}>
                            <p className="sub-para">Type-D</p>
                        </div>
                    </div>
                </div>
            )}
            {selectedType === 'Type-A' && <TypeE onClose={handleCloseType} />}
            {selectedType === 'Type-B' && <TypeF onClose={handleCloseType}/>}
            {selectedType === 'Type-C' && <TypeG onClose={handleCloseType}/>}
            {selectedType === 'Type-D' && <TypeH onClose={handleCloseType}/>}
        </>
    );
};
export default Bodycontent1;
