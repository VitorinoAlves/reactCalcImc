import '../../global.css';
import styles from './Tabela.module.css';

const Tabela =({imc}) =>{
    return(
        <>
            <h2>Veja a interpretação do seu IMC:</h2>
            <div className={styles.containerTabela}>
                <table>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={imc > 1 && imc < 18.5 ? styles.selectedImc : ''}>
                            <td>Menor que 18.5</td>
                            <td>Magreza</td>
                        </tr>
                        <tr className={imc >= 18.5 && imc <= 24.9 ? styles.selectedImc : ''}>
                            <td>Entre 18.5 e 24.9</td>
                            <td>Normal</td>
                        </tr>
                        <tr className={imc >= 25.0 && imc <= 29.9 ? styles.selectedImc : ''}>
                            <td>Entre 25.0 e 29.9</td>
                            <td>Sobrepeso</td>
                        </tr>
                        <tr className={imc >= 30.0 && imc <= 39.9 ? styles.selectedImc : ''}>
                            <td>Entre 30.0 e 39.9</td>
                            <td>Obesidade</td>
                        </tr>
                        <tr className={imc >= 40.0 ? styles.selectedImc : ''}>
                            <td>Maior que 40.0</td>
                            <td>Obesidade grave</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tabela;