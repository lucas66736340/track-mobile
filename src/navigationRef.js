import { NavigationActions} from 'react-navigation'

//navegando sem a propriedade navigation

/*
entao toda vez que eu quiser navegar fora de um componente do react 
no caso dentro de uma funcao dentro do context ou em qualquer outro 
lugar sem que seja necessario usar uma funcao de callback 
posso usar dentro de qualquer funcao dentro da minha aplicacao
que apos ser disparada faz uma navegação 


*/

let navigator;

//pegando switchNavigator ele tem acesso a propriedade de navegacao 
export function setNavigator(navigation){
    navigator = navigation
}


//construindo a funcao de navegacao que estara disponivel para todos os componentes dentro do swite navigator 
export function navigate(route,params){
    navigator.dispatch(
        NavigationActions.navigate({
            routeName:route,//route e a tela que eu quero 
            params:params // os dados que eu quero passar para aquela rota
        })
    )
}