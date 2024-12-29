const defaultCaracter = {
    name:'',
    life: 1,
    maxLife: 1,
    attack:0,
    defense:0
}

const createKnight = (name) =>{
    return{
        ...defaultCaracter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcer = (name) => {
    return {
        ...defaultCaracter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () =>{
    return{
        ...defaultCaracter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 16,
        defense: 1
    }
}