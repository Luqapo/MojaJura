import React from 'react';

class MyList extends React.Component{
        render(){
            return (
                <div>
                    <table style={{width: '98%', margin: '2px', borderCollapse: "collapse"}} className="green">
                        <thead>
                        <tr>
                            <th>Data przejcia</th>
                            <th>Wycena</th>
                            <th>Styl</th>
                            <th>Nazwa</th>
                            <th>Rejon/skałą</th>
                            <th>Komentarz</th>
                            <th>Ocena</th>
                            <th>Edytuj</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            )
        }
    }

    export {MyList};