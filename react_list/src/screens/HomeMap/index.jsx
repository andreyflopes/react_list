import { useState } from 'react';
import { Text, View, } from 'react-native';
import  { styles } from './styles'

export default function HomeMap(){

    const [ data, setData ] = useState([
        'andrey Lopes','Bruno Bandeira', 'alex Silva', 'Leticia Schutz', 'Neiva Regina', 'Andria Lopes', 'Anderson Rene','Maria Silva', 'João Santos', 'Ana Pereira', 
        'Pedro Carvalho', 'Sofia Oliveira', 'Carlos Rodrigues', 'Luísa Ferreira', 'Miguel Almeida', 'Beatriz Gomes', 'Rui Mendes', 'Fernanda Sousa', 'António Costa', 
        'Isabel Santos', 'Manuel Pereira', 'Catarina Alves', 'André Silva', 'Rita Gonçalves', 'Hugo Martins', 'Cláudia Ramos', 'Diogo Oliveira', 'Marta Ferreira', 'José Santos', 
        'Inês Rodrigues', 'Gonçalo Pereira', 'Carolina Silva', 'Paulo Almeida', 'Helena Costa', 'Bruno Fernandes', 'Teresa Sousa', 'Daniel Gomes', 'Sara Rodrigues', 'Fernando Silva', 
        'Mónica Santos', 'Ricardo Costa', 'Ana Rita Pereira', 'Hélder Sousa', 'Carla Fernandes', 'João Pedro Alves', 'Isabel Gomes', 'Mário Rodrigues', 'Patrícia Almeida', 'Luís Santos', 
        'Margarida Costa', 'Nuno Oliveira', 'Clara Pereira', 'Francisco Fernandes', 'Rosa Silva', 'Jorge Alves','Ana Silva', 'João Santos', 'Marta Pereira', 'Pedro Carvalho', 'Sofia Oliveira', 
        'Carlos Rodrigues', 'Luísa Ferreira', 'Miguel Almeida', 'Beatriz Gomes', 'Rui Mendes', 'Fernanda Sousa', 'António Costa', 'Isabel Santos', 'Manuel Pereira', 'Catarina Alves', 'André Silva', 
        'Rita Gonçalves', 'Hugo Martins', 'Cláudia Ramos', 'Diogo Oliveira', 'Maria Rodrigues', 'José Fernandes', 'Carolina Silva', 'Paulo Almeida', 'Helena Costa', 'Bruno Fernandes', 'Teresa Sousa', 
        'Daniel Gomes', 'Sara Rodrigues', 'Fernando Silva', 'Mónica Santos', 'Ricardo Costa', 'Ana Rita Pereira', 'Hélder Sousa', 'Carla Fernandes', 'João Pedro Alves', 'Isabel Gomes', 'Mário Rodrigues', 
        'Patrícia Almeida', 'Luís Santos', 'Margarida Costa', 'Nuno Oliveira', 'Clara Pereira', 'Francisco Fernandes', 'Rosa Silva', 'Jorge Alves', 'Sónia Santos', 'Eduardo Pereira'
    ])

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Convidados = Festa do Breno</Text>

            {
                data.map(item => (
                    <Text 
                        key={item}
                        style={styles.itemList}
                    >
                        {item}
                    </Text>
                ))
            }


        </View>
    )
  }