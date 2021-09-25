import axios from "axios";


export const getUserStatisticsApiCall = async (phone) => {
    try {
        // const response = await axios.get(`/statistics/${phone}/`)
        const response = [
            {
                module: 'Telegram',
                values: [3,5,6,3,2,6,7,4,3,2]
            },
            {
                module: 'Яндекс.Почта',
                values: [4,6,2,6,8,1,3,5,6,4]
            },
            {
                module: 'GitHub',
                values: [8,4,2,6,4,1,5,7,4,3]
            },
            {
                module: 'Jira',
                values: [5,6,3,6,4,7,5,3,7,5]
            },
            {
                module: 'Геопозиция',
                values: [4,6,4,2,5,7,9,7,7,5]
            },
        ]

        let datasets = []
        response.forEach((value, index) => {
            let labels = []
            for (let i = 0; i < value.values.length; i++) labels.push('');
            datasets.push({
                labels: labels,
                datasets: [{
                    label: value.module,
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