import React from 'react';
import { useParams } from 'react-router';
import avatar from '../../assets/img/avatar.jpg';
import { Radar, Line, Bar } from 'react-chartjs-2';
import { getModuleTypesStatisticsApiCall, getUserStatisticsApiCall } from '../../service/api/statistics';
import { getUserInfoApiCall } from '../../service/api/users';
import './UserPage.scss';
import { accentColor } from '../../assets/constants';


export default function UserPage() {
    const {phone} = useParams();
    const [selectedModule, setSelectedModule] = React.useState(0);
    const [user, setUser] = React.useState();
    const [moduleTypesStatistics, setModuleTypesStatistics] = React.useState();
    const [statisticsData, setStatisticsData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        const collectAllData = async () => {
            await getUserInfo();
            await getModuleTypesStatistics();
            await getStatisticsData();
            setLoaded(true);
        }

        collectAllData();
    }, [])

    const getUserInfo = async () => {
        const userInfo = await getUserInfoApiCall(phone);
        setUser(userInfo);
    };

    const getModuleTypesStatistics = async () => {
        const moduleTypesStatistics = await getModuleTypesStatisticsApiCall(phone);
        setModuleTypesStatistics(moduleTypesStatistics);
    };

    const getStatisticsData = async () => {
        const statisticsData = await getUserStatisticsApiCall(phone);
        console.log(statisticsData)
        setStatisticsData(statisticsData);
    }

    return(
        <div className='UserPage'>
            {!loaded ? <img className='Loader' src="https://img.icons8.com/fluency/96/000000/spinner-frame-5.png" /> :
            <>
            <section className="Profile">
                <img src={avatar} className="Profile__avatar" />
                <div className="Profile__infoBlock">
                    <p className="Profile__text">ФИО: {user.fio}</p>
                    <p className="Profile__text">Направление: {user.type}</p>
                    <p className="Profile__text">Продуктивность: {user.productivity}</p>
                </div>
                <div className='Profile__radar'>
                <Radar
                    width={300}
                    height={300}
                    options={{
                        backgroundColor: 'rgba(0, 99, 251, 0.2)',
                        borderColor: info => {
                            let index = info.dataIndex
                            let color = moduleTypesStatistics.datasets[0].data[index] < 0 ? 'red' : 'rgba(0, 99, 251, 1)';
                            return color
                        },
                        scale: {
                          ticks: { beginAtZero: true },
                        },
                      }}
                    data={moduleTypesStatistics} 
                 />
                </div>
            </section>
            <section>
                <p className="StatisticsTitle">Статистика за месяц</p>
                <div className="ModuleButtons">
                    {statisticsData.map(item => {
                        return(
                            <div className="ModuleButtons__button" onClick={() => setSelectedModule(statisticsData.indexOf(item))}>
                                <p className="ModuleButtons__name" style={{color: statisticsData.indexOf(item) === selectedModule ? 'rgb(0, 80, 251)' : 'black'}}>{item.datasets[0].label}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="StatisticsChart">
                <Bar data={statisticsData[selectedModule]} options={{borderColor: accentColor, backgroundColor: 'rgba(0, 99, 251, 0.2)', borderWidth: 1}} />
                </div>
            </section>
            </>}
        </div>
    )
}