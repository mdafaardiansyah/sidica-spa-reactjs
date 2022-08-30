import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BsThermometer, BsEye, BsWind, BsTropicalStorm, BsCloudDrizzleFill, BsCloudHaze2Fill, BsWater} from "react-icons/bs";
import {ImSpinner9} from "react-icons/im";
import {IoMdRainy, IoMdSunny, IoMdCloudy, IoMdThunderstorm, IoMdSnow} from "react-icons/io";
import {TbTemperatureCelsius, TbMist, TbCloudFog, TbTornado} from "react-icons/tb";

//initiating variable for API Key
const APIKey = '722cf3cab03dd7cd2782b7c6963d3078';

//fetching data from API
const App = () => {
    const [data, setData] = useState();
    const [city, setCity] = useState('Sidoarjo');

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
        axios.get(url).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
        axios.get(url).then((res) => {
            setData(res.data);
        });
    }, [city]);

    const WeatherIcon = (props) => {
        console.log(props);
        switch (props.data.weather[0].main) {
            case 'Thunderstorm':
                return <IoMdThunderstorm {...props}/>
            case 'Drizzle':
                return <BsCloudDrizzleFill {...props}/>;
            case 'Rain':
                return <IoMdRainy {...props}/>;
            case 'Snow':
                return <IoMdSnow {...props}/>;
            case 'Haze':
                return <BsCloudHaze2Fill {...props}/>;
            case 'Clear':
                return <IoMdSunny {...props}/>;
            case 'Clouds':
                return <IoMdCloudy {...props}/>;
            case 'Mist':
                return <TbMist {...props}/>;
            case 'Smoke':
                return <TbMist {...props}/>;
            case 'Dust':
                return <IoMdRainy {...props}/>;
            case 'Fog':
                return <TbCloudFog {...props}/>;
            case 'Sand':
                return <TbMist {...props}/>;
            case 'Ash':
                return <TbMist {...props}/>;
            case 'Squall':
                return <BsTropicalStorm {...props}/>;
            case 'Tornado':
                return <TbTornado {...props}/>;
            default:
                return <></>;
        }
    }

    return (
        <>
            {!data ? (
                <div className="loading bg-blue min-h-screen flex flex-col justify-center items-center">
                    <div>
                        <ImSpinner9 className="text-4xl animate-spin"/>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="bg-blue min-h-screen flex flex-col justify-center items-center">
                        {/*<div className="text-6xl text-white my-14 font-bold">*/}
                        {/*    SIDICA*/}
                        {/*</div>*/}

                        <div>
                            <div className="flex">
                                <div>
                                    <WeatherIcon size={140} color={"white"} data={data}/>
                                </div>
                                <div className="pl-8 flex flex-col justify-center">
                                    <div className="text-white text-3xl font-semibold">Location</div>
                                    <div className="text-white text-2xl font-light">Date Time</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center mb-8">
                                <div className="flex">
                                    <div className="text-white text-9xl font-normal">14</div>
                                    <div>
                                        <TbTemperatureCelsius size={28} color={"white"} />
                                    </div>
                                </div>
                                <div className="text-white text-2xl font-light">Description</div>
                            </div>

                            <div className="flex flex-row divide-x-2 divide-white ">
                                <div className="flex-col divide-white mb-4 ">
                                    <div className="flex items-center flex-1">
                                        <div className="mx-4 "><BsEye size={42} color={"white"} /></div>
                                        <div className="mr-3 text-[32px] font-thin text-white">Visibility</div>
                                        <div className="mx-3 text-[32px] font-thin text-white flex justify-end w-full">10km</div>
                                    </div>
                                    <div className="flex items-center flex-1">
                                        <div className="mx-4 "><BsThermometer size={42} color={"white"} /></div>
                                        <div className="mr-3 text-[32px] font-thin text-white">Feels like</div>
                                        <div className="mx-3 text-[32px] font-thin text-white">10km</div>
                                    </div>
                                </div>
                                <div className="flex-col divide-white ">
                                    <div className="flex items-center flex-1">
                                        <div className="mx-4 "><BsWater size={42} color={"white"} /></div>
                                        <div className="mr-3 text-[32px] font-thin text-white">Humidity</div>
                                        <div className="mx-3 text-[32px] font-thin text-white flex justify-end w-full">10km</div>
                                    </div>
                                    <div className="flex items-center flex-1">
                                        <div className="mx-4 "><BsWind size={42} color={"white"} /></div>
                                        <div className="mr-3 text-[32px] font-thin text-white ">Wind</div>
                                        <div className="mx-3 text-[32px] font-thin text-white flex justify-end w-full">10km</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
