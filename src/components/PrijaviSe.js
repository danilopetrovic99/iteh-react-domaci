import FormaPrijaviSe from './FormaPrijaviSe'

function PrijaviSe() {

    const users = [
        { username: 'nidza12', password: 'n123', name: 'Stefan' },
        { username: 'ninx99', password: 'xn131', name: 'Nina' },
        { username: 'beki01', password: 'bk22', name: 'Bojana' },
        { username: 'lakiii', password: 'l011', name: 'Lazar' },
    ];

    return (
        <div className="prijavise_div">
            <FormaPrijaviSe users={users} />
        </div>
    );
}

export default PrijaviSe;