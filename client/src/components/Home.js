import React from 'react';

function Home({ currentUser, setCurrentUser }) {


    function handleLogOut() {
        fetch('/logout',{method: "DELETE"}).then((r) => {
            if(r.ok){
                setCurrentUser(null)
            }
        })
    };

    return (

        <div>
            <h1>Hi {currentUser.first_name}</h1>
            <button onClick={handleLogOut}>Logout</button>
        </div>

    );
}

export default Home;