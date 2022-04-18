const paginate = (menu) =>{
    const itemsPerPage=4;
    const numberOfPage = Math.ceil(menu.length/itemsPerPage);
    const newMenu = Array.from({length:numberOfPage},(_,index)=>{
        const start = index*itemsPerPage;
        return menu.slice(start,start+itemsPerPage);
    })
    return newMenu;
}

export default paginate;