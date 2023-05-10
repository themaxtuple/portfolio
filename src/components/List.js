function List ({items}) {
    if(items[0]!=="")
        return <ul>{items.map((item) => (<li>{item}</li>))}</ul>
};

export default List;