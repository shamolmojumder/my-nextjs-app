const DynamicPage = ({params,searchParams}) => {
    // console.log(props.params);
    // console.log(props.searchParams);
    console.log(searchParams);
    
    return (
        <div>
            <h1>This is DynamicPag: {params.id} </h1>      
            <h1>Search Category : {searchParams.category} </h1>
            <h1>Search Category : {searchParams.price} </h1>
        </div>
    );
};

export default DynamicPage;