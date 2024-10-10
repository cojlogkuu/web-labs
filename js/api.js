const base_url = 'http://localhost:5000/stones';

export async function addNewItem(data) {
    try {
        const response = await fetch(base_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), // Перетворюємо `data` в JSON-рядок
        });

        if (response.status === 201) {
            console.log('Item was successfully added');
            return;
        }

        if (!response.ok) {
            const errorMessage = await response.json();
            throw new Error(`Status code - ${response.status} \n${JSON.stringify(errorMessage)}`);
        }
    } catch (error) {
        console.error(`Error while adding item - ${error}`);
    }
}


export async function getItems(name='', type='all', sort='not_sort') {
    try {
        const response = await fetch(base_url + `?name=${name}&type=${type}&sort=${sort}`, {method: 'GET'});
        if (response.ok) {
            const data = await response.json();
            console.log("Received items:", data);
            return data;
        } else {
            const errorData = await response.json();
            throw new Error(`Status code - ${response.status}\nError message - ${JSON.stringify(errorData)}`);
        }
    } catch (error) {
        console.error(`Error while getting items - ${error}`);
    }
}

export async function deleteItem(idToDelete) {
    try {
        const response = await fetch(base_url + `/${idToDelete}`, {method: 'DELETE'});
        if (response.ok) {
            console.log('Item was successfully deleted');
        } else {
            const errorMessage = await response.json();
            throw new Error(`Status code - ${response.status}\nError message - ${JSON.stringify(errorMessage)}`);
        }
    } catch (error) {
        console.error(`Error while deleting item: ${idToDelete}`);
    }
}

export async function updateItem(idToUpdate, data) {
    try {
        const response = await fetch(base_url + `/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Item was successfully updated');
        } else {
            const errorMessage = await response.json();
            throw new Error(`Status code - ${response.status}\nError message - ${JSON.stringify(errorMessage)}`);
        }
    } catch (error) {
        console.error(`Error while updating item - ${idToUpdate}`);
    }
}
