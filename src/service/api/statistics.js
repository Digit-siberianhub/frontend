import axios from "axios";


export const getUserStatisticsApiCall = async (phone) => {
    try {
        const response = await axios.get(`/statistics/${phone}/module/`)
        console.log(response.data)
        let datasets = []
        response.data.forEach((value, index) => {
            let labels = []
            for (let i = 0; i < value.values.length; i++) labels.push('');
            datasets.push({
                labels: labels,
                datasets: [{
                    label: value.name,
                    data: value.values
                }]
            })
        })
        
        return datasets;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const getModuleTypesStatisticsApiCall = async (phone) => {
    try {
        // const response = await axios.get(`/statistics/${phone}/types/`)
        const response = [
            {
                module_type: 'Telegram',
                value: 30
            },
            {
                module_type: 'Яндекс.Почта',
                value: 54
            },
            {
                module_type: 'GitHub',
                value: 13
            },
            {
                module_type: 'Jira',
                value: 0
            },
            {
                module_type: 'Геопозиция',
                value: 34
            },
        ]
        let labels = [];
        let data = []
        response.map(item => {
            labels.push(item.module_type)
            data.push(item.value)
        })
        return ({
            labels: labels,
            datasets: [{
                label: 'Продуктивность по областям',
                data: data,
            }]
        });
    } catch (err) {
        console.log(err);
        return [];
    }
}