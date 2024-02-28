import React, { useState, useEffect } from 'react';
import "./Type-E.css";
import { Card } from 'react-rainbow-components';
import waterph from "../images/waterph.jpg";
const TypeE = ({ onClose }) => {
    const [typee, setTypee] = useState(104);
    const [isCardOpen, setIsCardOpen] = useState(true);
    const handleCloseButtonClick = () => {
        setIsCardOpen(false);
        onClose();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://aqua-liart-eight.vercel.app/api/sensordata");
                const data = await response.json();
                setTypee(data.typee);
            } catch (error) {
                console.error(error);
            }
        };
        const intervalId = setInterval(fetchData, 2000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            {isCardOpen && (
                <Card className='card'>
                    <div className="card-header">
                        <h3 className='typea-head'>TYPE-A</h3>
                        <button className="close-button" onClick={handleCloseButtonClick}>
                            &#10006;
                        </button>
                        <p className='para-text'>According to the crustacean taxonomist Tin-Yam Chan, "The terms shrimp and prawn have
                            no definite reference to any known taxonomic groups. Although the term shrimp is sometimes
                            applied to smaller species, while prawn is more often used for larger forms,
                            there is no clear distinction between both te rms and their usage is often confused or even
                            rever in different countries or regions."[3] Writing in 1980, L. B. Holthuis noted that the
                            terms prawn and shrimp were used inconsistently "even within a single region",
                            generalising that larger species fished commercially were generally called shrimp in the United States,
                            and prawns in other English- speaking countries, although not without exceptions.</p>
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-4'>
                                <img
                                    src={waterph}
                                    alt="Street Light"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className='col-4'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='indication-text with-icon'>TRUE VALUE</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='indication-text1 with-icon1'>MEASURED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='readings'>
                            <div className='row'>
                                <div className='col-4 box-1'>
                                    <p className='reading-p1'>TYPE-A</p>
                                </div>
                                <div className='col-4 box-2'>
                                    <p className='reading-p2'>3.8pH</p>
                                </div>
                                <div className='col-4 box-3'>
                                    <p className='reading-p3'>{`${typee}pH`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="precautions">precautions</p>
                            </div>
                            <div className='col-12 precau'>
                                <ul>
                                    <li>precaution2</li>
                                    <li>precaution2</li>
                                    <li>precaution2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
};
export default TypeE;
