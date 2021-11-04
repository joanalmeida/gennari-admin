const convertFileToBase64 = file => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

const processProductUpdate = async (params, url) => {
    return convertFileToBase64(params.data.image).then(base64Image => {
        const data = {
            id: params.data.id,
            name: params.data.name,
            description: params.data.description,
            price: params.data.price,
            size: params.data.size,
            imageUri: params.data.imageUri,
            category: params.data.category,
            image: base64Image
        }

        return fetch(url, { 
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' } 
        }).then(response => response.json()).then(data => {
            return {
                data: data
            }
        });
    });
}

export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        let url = `/api/v1/${resource}?page=${page - 1}&size=${perPage}`;
        if (field !== 'id') url += `&sortBy=${field}&order=${order}`;
        return fetch(url).then(response => response.json()).then(data => {
            return {
                data: data.content,
                total: data.totalElements
            }
        });
    },

    getOne: (resource, params) => {
        let url = `/api/v1/${resource}/${params.id}`;
        return fetch(url).then(response => response.json()).then(data => {
            return {
                data: data
            }
        });
    },

    getMany: (resource, params) => {
        return Promise.reject('Not implemented');
    },

    getManyReference: (resource, params) => {
        return Promise.reject('Not implemented');
    },

    update: (resource, params) => {
        let url = `/api/v1/${resource}`;
        if(resource === 'products') {
            return processProductUpdate(params, url);
        } else {
            return fetch(url, { 
                method: 'PUT',
                body: JSON.stringify(params.data),
                headers: { 'Content-Type': 'application/json' } 
            }).then(response => response.json()).then(data => {
                return {
                    data: data
                }
            });
        }
    },

    updateMany: (resource, params) => {
        return Promise.reject('Not implemented');
    },

    create: (resource, params) => {
        return Promise.reject('Not implemented');
    },

    delete: (resource, params) => {
        return Promise.reject('Not implemented');
    },

    deleteMany: (resource, params) => {
        return Promise.reject('Not implemented');
    }
};
