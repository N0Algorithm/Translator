import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Translate = () => {

    const [options, setOptions] = useState([]);
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const translate = () => {
        // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', process.env.REACT_APP_TRANSLATE_API);

        axios.post('https://libretranslate.de/translate', params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res.data)
            setOutput(res.data.translatedText)
        })
    };

    useEffect(() => {
        axios
            .get('https://libretranslate.de/languages', {
                headers: { accept: 'application/json' },
            })
            .then((res) => {
                console.log(res.data);
                setOptions(res.data);
            });
    }, []);

    //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"

    return (
        <div>
            <div class='row'>
                <div class="col-md-6"> 
                    From ({from}) :
                    <select onChange={(e) => setFrom(e.target.value)}>
                        {options.map((opt) => (
                            <option key={opt.code} value={opt.code}>
                                {opt.name}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                     

                    <textarea cols="80" rows="8" placeholder="Enter text" onInput={(e) => setInput(e.target.value)}></textarea>
                </div>
                <div class="col-md-6">
                    To ({to}) :
                    <select onChange={(e) => setTo(e.target.value)}>
                        {options.map((opt) => (
                            <option key={opt.code} value={opt.code}>
                                {opt.name}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                    <textarea cols="50" rows="8" style={{backgroundColor:'#f5f5f5'}} value={output}></textarea>
                </div>
            </div>
            <div className='container'>
                <button onClick={e => translate()}>Translate</button>
            </div>
        </div>
    )
}

export default Translate