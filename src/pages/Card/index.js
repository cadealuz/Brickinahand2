import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Card() {
 return (
   <ScrollView>
    <Text> PAGAMENTO </Text>
    <View>
        <Text style={styles.text}>
            Pague com Paypal
        </Text>
        <Text style={styles.paragraph}>Ao fazer um pedido no Paypal, você será redirecionado para a página de pagamento do PayPal, onde poderá confirmar seu pagamento fazendo login com seu nome de usuário e a senha do PayPal.
            Você ainda pode fazer o check-out mesmo sem uma conta no PayPal. Para fazer isso, clique em "Pagar com cartão de débito / crédito" e você será redirecionado para uma página segura na qual poderá inserir as informações do cartão de crédito ou concluir seu pagamento com segurança pelo PayPal.
        </Text>
    </View>

    <View>
        <Text style={styles.text}>
        Pagar com cartão de crédito / débito
        </Text>
        <Text style={styles.paragraph}>As opções de cartão de crédito disponíveis estão listadas acima. As empresas de cartão de crédito listadas acima são os cartões de crédito mais usados neste site. Não se preocupe se a empresa do seu cartão de crédito não estiver na lista, recomendamos que você faça a compra.
            Observe que a SHEIN não coleta seu número de cartão de crédito / débito ou informações pessoais quando você efetua um pagamento. Para perguntas sobre suas transações em nosso site, consulte o banco emissor do cartão para obter informações.
        </Text>
    </View>

    <View>
        <Text style={styles.text}>
        Pague com MB WAY
        </Text>
        <Text style={styles.paragraph}>Aceitamos Multibanco como meio de pagamento: Disponível apenas para encomendas enviadas para clientes em Portugal em EUR. Você receberá os detalhes de pagamento em seu aplicativo MB WAY. Em seguida, você pode pagar em casa através do sistema de banco online.
            Este método de pagamento não pode ser reembolsado diretamente; qualquer transação reembolsada será creditada em sua conta SHEIN. O reembolso para uma conta SHEIN é rápido e não tem taxas adicionais.
        </Text>
    </View>
   </ScrollView>

    

  );
}

const styles = StyleSheet.create({
    
    text:{
      fontFamily: 'Anton_400Regular',
      fontSize: 20,
      marginHorizontal: '1%',
      textAlign: 'center'
    },
    paragraph: {
      margin: 30,
      marginTop: 10,
      fontSize: 15,
      textAlign: 'center',
    },
   
  });