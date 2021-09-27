import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if (n < 0) {
        return -1
    }
    if (n === 0) {
        return 1
    }
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [par, setPar] = useState(false);


    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = 'Eita!!'
        }

    }, [fatorial])

    useEffect(function () {
        setPar(number % 2 === 0);
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red"> {fatorial === -1 ? 'Não existe' : fatorial} </span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />

            <div className="center">
                <span className="text">Estado: </span>
                <span className="text"> {par === true ? 'Par' : 'Impar'} </span>

            </div>

        </div>
    )
}

export default UseEffect
