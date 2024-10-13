import { useState } from 'react';
import '../../global.css';
import styles from './Formulario.module.css';
import Tabela from '../Tabela';


const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    const calculaImc = (e) =>{
        e.preventDefault();
        //console.log(peso);
        //console.log(altura);
        setImc((peso/(altura*altura)).toFixed(2));
        //console.log(imc);
    }

    return(
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <form className={styles.formulario} onSubmit={calculaImc}>
                <div className={styles.formularioItem}>
                    <label>Altura(m): </label>
                    <input onChange={event => setAltura(parseFloat(event.target.value))} className={styles.formularioItemCampo} type='number' placeholder='1.80' step="0.01" required></input>
                </div>
                <div className={styles.formularioItem}>
                    <label>Peso(Kg): </label>
                    <input onChange={event => setPeso(parseFloat(event.target.value))} className={styles.formularioItemCampo} type='number' placeholder='80.0' step="0.01" required></input>
                </div>
                <button type='submit' className={styles.formularioButton}>Calcular IMC</button>
            </form>
            <p className={styles.resultadoImc}>O seu IMC é: {imc}</p>
            <Tabela imc={imc}></Tabela>
        </div>
    )
}

export default Formulario;