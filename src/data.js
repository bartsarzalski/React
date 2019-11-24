import axios from 'axios';
const key = `YzVmbNV3eRtFmmoVGjoPocdLoDMym4btkjLLqkGN`;

export async function getData() {
    try {
        const res = await axios(`https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`);
        const result = res.data;
        return result;
        //console.log(result);
    } catch (error) {
        console.log(error);
    }
};

getData();