const UrlModel = require("./model")
const randomstring = require("randomstring");

const shorturl =async(longUrl)=>{
 try {
    if(!longUrl){
        return {
            status:false,
            massge:"long url missing"
        }
    }
    let random = await randomstring.generate(7);
    const checkUrl = await UrlModel.findOne({longUrl:longUrl} )

    if(checkUrl){
        return{
            status:false,
            massge:"url Already exist"
        }
    }
    const checkShortUrl = await UrlModel.findOne({shortkey:random})
    if(checkShortUrl){
        randon = await randomstring.generate(7);
    }
    const shortUrlData = {
        longUrl:longUrl,
        shortKey:random
    }
    const data  = await UrlModel.create(shortUrlData)

    return data

 } catch (error) {
    console.log(error);
    return error 
 }
}

const getUrl = async(skey)=>{
    const serch = await UrlModel.findOne({shortKey:skey})
    return serch;
}

module.exports  ={shorturl,getUrl}