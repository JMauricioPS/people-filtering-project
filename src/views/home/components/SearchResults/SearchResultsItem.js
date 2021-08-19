export default function SearchResultsItem(value){
    return (
        <div style={{backgroundColor: "#e2e7e7", margin: "20px", padding: "10px 30px"}}>
            <p>Username: {value.username}</p>
            <p>Name: {value.name}</p>
            <p>Email: {value.email}</p>
            <p>Phone: {value.phone}</p>
            <p>Company: {value.company.name}</p>
        </div>
    );
}