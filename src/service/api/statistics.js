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

        let labels = [];
        let data = []
        response.data.map(item => {
            if (!labels.includes(item.type)){
                labels.push(item.type.slice(0, 3) + '.')
                data.push(item.sum)
            } else {
                data[labels.indexOf(item.type)] = data[labels.indexOf(item.type)] + item.sum
            }
        })
        
        return [datasets, {
            labels: labels,
            datasets: [{
                label: 'Продуктивность по областям',
                data: data,
            }]
        }];
    } catch (err) {
        console.log(err);
        return [];
    }
}