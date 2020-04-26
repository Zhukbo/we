export default class VoteService{
    _apiBase = 'https://knuvote.herokuapp.com';

    async GetResource (url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new (`Could not fetch ${url}` + ` Problem is ${res.status}`)
        }
        return await res.json();
    }
    async SendResource(url,data, token = ''){
            //const data = {name:'Hello'};

        try {
            const response = await fetch(`${this._apiBase}${url}`, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
            'Content-Type': 'application/json',
            'Authorization': token
            }
        });
            const json = await response.json();
            return('Успех:', json);
            }   catch (error) {
            return('Ошибка:', error);
        }
    }
    /*async getData(){
        try{
        const json = await response.json();
            return('Успех:', JSON.stringify(json));
            }   catch (error) {
            return('Ошибка:', error);
        } 
    }*/
    methodReturn=()=>{
        return (this.error, this.json)
    }
    registration (data){
        return this.SendResource(`/api/v1/knuvote/user/registration/`,data);
    }

    getStatsCategory(){
        return this.GetResource(`/api/v1/knuvote/category/stats`);
    }
    getCategories(){
        return this.GetResource(`/api/v1/knuvote/category/all/?sortBy=1&order=0&sought=&page=0&size=6`);
    }
    getOneCategory(categoryId){
        return this.GetResource(`/api/v1/knuvote/category/?id=${categoryId}`)
    }
    createCategory(){
        return this.SendResource(`/api/v1/knuvote/category/create/`);
    }
    getCandidates(id){
        return this.GetResource(`/api/v1/knuvote/category/candidates/${id}/?sortBy=1&order=0&sought=&page=0&size=7`);
    }
    verificationAccount(token){
        return this.SendResource(`/api/v1/knuvote/user/verification-account/`,token);
    }
    login (data){
        return  this.SendResource(`/api/v1/knuvote/user/login/`,data);
    }
    getProfile(userId){
        return this.GetResource(`/api/v1/knuvote/user/profile/?id=${userId}`);
    }
    addCandidate(categoryId){
        return this.SendResource(`/api/v1/knuvote/category/${categoryId}/add/`)
    }


}