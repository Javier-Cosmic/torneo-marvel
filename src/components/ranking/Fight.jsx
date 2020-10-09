import React from 'react';

const Fight = ({ fight }) => (
    <tbody>
        <tr>
            <td>{fight.date}</td>
            <td>{fight.p1}</td>
            <td>{fight.p2}</td>
            <td>{fight.win}</td>
        </tr>
    </tbody>
);

export default Fight;
