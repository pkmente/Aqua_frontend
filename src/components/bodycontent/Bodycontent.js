import React, { useState } from 'react';
import "./Bodycontent.css";
import TypeA from "../../pages/Type-A";
import TypeB from '../../pages/Type-B';
import TypeC from '../../pages/Type-C';
import TypeD from '../../pages/Type-D';
const Bodycontent = () => {
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
            {selectedType === 'Type-A' && <TypeA onClose={handleCloseType} />}
            {selectedType === 'Type-B' && <TypeB onClose={handleCloseType}/>}
            {selectedType === 'Type-C' && <TypeC onClose={handleCloseType}/>}
            {selectedType === 'Type-D' && <TypeD onClose={handleCloseType}/>}
        </>
    );
};
export default Bodycontent;
