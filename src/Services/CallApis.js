import React from 'react';

const urlBase='https://api.imgflip.com'

export const GetMemes =async(url)=>{
    const GetDataMemes = await fetch(`${urlBase}/${url}`,{
        method:'GET'
    })
    const GetAllData=await GetDataMemes.json()
    return GetAllData
}

export default { GetMemes
    }




