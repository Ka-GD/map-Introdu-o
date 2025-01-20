




export default function App(){

  //estrutura do array
  //variavel nome =['intem1','item2','item3']

const tarefas =[
  'estrutura map()',
  'praticar esporte',
  'estudar',
  'amar o map'

]


//array de objetos
const personagens = [
  
  {
    imagem: 'https://w7.pngwing.com/pngs/389/897/png-transparent-marvel-wolverine-illustration-wolverine-iron-man-spider-man-thor-marvel-comics-marvel-comics-superhero-fictional-character-thumbnail.png',
    nome: 'Wolverine', 
    idade: 150,
    filme: 'X-men',
    textoAlt:'imagem do Wolverine'
  },
  {
    imagem:'https://i.pinimg.com/236x/1c/ce/60/1cce60e38fd7a40b6b135bacd11c8bf6.jpg',
    nome: 'Pernalonga', 
    idade: 80, 
    filme: 'Looney Tunes',
    textoAlt:'imagem do pernalonga'
  },
  {
    imagem:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_fJdva3_urSCrTb715vulLmx5z73UU0bsskKT2hLac4NMj1Nmjx33XwkHp-d9mQd7yh6XO906RiYy4a_30IwLG-N39hxbYHWn56Xu4g',
    nome:'Zeca Urubu',
    idade:100,
    filme: 'Pica Pau', 
    textoAlt:'imagem do zeca urubu'
  }
  
]

  return(

    //estrutura 
    // array.map(  (item) => (codigo a ser executado)  )
   <main>
     <h1>Lista de tarefas </h1>

     {
      tarefas.map( (item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))
     }
<section>
{
      personagens.map( (item) => (
        <div>
          <img src={item.imagem} alt={item.textoAlt} />
          <h2>{item.nome}</h2>
          <h3>idade{item.idade}</h3>
          <h3>filme{item.filme}</h3>
          
        </div>
      ))
     }
</section>
     
   </main>
  
  )
}